import ListTicketPage from "@/app/ticket/list/ListTicketPage";
import { prisma } from "@/lib/prisma";

const statusLabelMap = {
  OPEN: "Open",
  IN_PROGRESS: "In Progress",
  CLOSED: "Closed",
} as const;

const priorityLabelMap = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
} as const;

type ListTicketPageSearchParams = {
  created?: string;
  ticketId?: string;
};

type ListTicketPageProps = {
  searchParams?: ListTicketPageSearchParams;
};

export default async function Page({ searchParams }: ListTicketPageProps) {
  const ticketsFromDb = await prisma.ticket.findMany({
    orderBy: { createdAt: "desc" },
  });

  const tickets = ticketsFromDb.map((ticket) => ({
    id: ticket.ticketCode,
    title: ticket.title,
    requestor: ticket.requestor,
    status: statusLabelMap[ticket.status],
    priority: priorityLabelMap[ticket.priority],
    category: ticket.category,
    assignTo: ticket.assignTo,
    createdAt: ticket.createdAt.toISOString().slice(0, 10),
    description: ticket.description,
    attachment: ticket.attachment,
  }));

  const showCreatedNotice = searchParams?.created === "1";
  const createdTicketId = searchParams?.ticketId;

  return (
    <ListTicketPage
      tickets={tickets}
      showCreatedNotice={showCreatedNotice}
      createdTicketId={createdTicketId}
    />
  );
}
