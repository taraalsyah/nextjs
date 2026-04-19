'use server'
import { prisma } from "@/lib/prisma";
import { revalidatePath } from 'next/cache'

export type FormState = {
  success: boolean
  message: string
}

export async function createUser(
  prevState: FormState,
  formData: FormData
):Promise<FormState> {
  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()

  if (!name || !email) {
    return { success: false, message: 'Nama dan email wajib diisi.' }
  }

  if (!email.includes('@')) {
    return { success: false, message: 'Format email tidak valid.' }
  }

  try {
    await prisma.user.create({
      data: { name, email },
    })

    revalidatePath('/belajar')
    return { success: true, message: 'User berhasil ditambahkan!' }
  } catch (err: unknown) {
  if (
    typeof err === "object" &&
    err !== null &&
    "code" in err
  ) {
    const e = err as { code?: string };

    if (e.code === "P2002") {
      return { success: false, message: "Email sudah terdaftar." };
    }
  }

  return { success: false, message: "Terjadi kesalahan server." };
}
}




// Server Component: ambil data langsung dari DB, tanpa API route
export default async function getUsers() {
  const users = await prisma.user.findMany({
    select: {id: true,name: true,email: true,},orderBy: {id: "desc",},});

  return users
}
