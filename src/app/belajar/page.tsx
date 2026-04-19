//import { prisma } from "@/lib/prisma";
import UserForm from './FormCreateBelajar'
import UserList from './ListUsers'
import List from './List'
import getUsers from './actions'


export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Daftar User</h1>

      {/* Client Component form disisipkan di dalam Server Component */}
      <UserForm />

      <UserList users={users} />

      <p>Total</p>
      <List users={users} />

    </main>
  )
}