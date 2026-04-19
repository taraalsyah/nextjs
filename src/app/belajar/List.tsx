"use client";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function List({ users }: { users: User[] }) {
  return (<div>
    <p>Msuk</p>
    {users.length}
    </div>
    
)
}