import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

async function getNextTicketCode() {
  const latestTicket = await prisma.ticket.findFirst({
    orderBy: { createdAt: "desc" },
    select: { ticketCode: true },
  });

  if (!latestTicket) {
    return "TCK-1001";
  }

  const lastNumber = Number(latestTicket.ticketCode.replace("TCK-", ""));
  const nextNumber = Number.isNaN(lastNumber) ? 1001 : lastNumber + 1;

  return `TCK-${nextNumber}`;
}

function sanitizeFileName(fileName: string) {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const title = String(formData.get("title") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    const category = String(formData.get("category") ?? "").trim();
    const priority = String(formData.get("priority") ?? "").trim() as
      | "Low"
      | "Medium"
      | "High";

    if (!title || !description || !category || !priority) {
      return Response.json({ message: "Invalid form data" }, { status: 400 });
    }

    const ticketCode = await getNextTicketCode();

    let attachmentPath: string | null = null;
    const attachment = formData.get("attachment");
    if (attachment instanceof File && attachment.size > 0) {
      const uploadDir = path.join(process.cwd(), "public", "uploads", "tickets");
      await mkdir(uploadDir, { recursive: true });

      const ext = path.extname(attachment.name) || ".jpg";
      const baseName = sanitizeFileName(path.basename(attachment.name, ext));
      const fileName = `${Date.now()}-${baseName}${ext}`;
      const buffer = Buffer.from(await attachment.arrayBuffer());

      await writeFile(path.join(uploadDir, fileName), buffer);
      attachmentPath = `/uploads/tickets/${fileName}`;
    }

    await prisma.ticket.create({
      data: {
        ticketCode,
        title,
        requestor: "System User",
        status: "OPEN",
        priority: priority.toUpperCase() as "LOW" | "MEDIUM" | "HIGH",
        category,
        assignTo: "Unassigned",
        description,
        attachment: attachmentPath,
      },
    });

    revalidatePath("/ticket/list");

    return Response.json({ ticketCode }, { status: 201 });
  } catch (error) {
    console.error("Create ticket failed:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}


