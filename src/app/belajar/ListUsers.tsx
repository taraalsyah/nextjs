
import getUsers from './actions'

type User = {
  id: string;
  name: string;
  email: string;
};



export default async function UserList() {
      const users: User[] = await getUsers()

  return (
    <div>
        <p>Pembatas</p>
        <hr className="my-8" />
        <h2 className="text-lg font-medium mb-4">User terdaftar</h2>
        <ul className="flex flex-col gap-2">
            {users.map((u) => (
            <li key={u.id} className="border rounded-md px-4 py-2 text-sm">
                <span className="font-medium">{u.name}</span>{' '}
                <span className="text-gray-500">&lt;{u.email}&gt;</span>
            </li>
            ))}
        </ul>
    </div>
  )
}