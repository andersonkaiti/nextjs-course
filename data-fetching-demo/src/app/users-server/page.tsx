import { setTimeout } from "timers/promises";

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default async function UsersServer() {
  await setTimeout(2_000);

  const response = await fetch("https://jsonplaceholder.typicode.com/users123");

  const users: IUser[] = await response.json();

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="rounded-lg border-2 border-neutral-900 bg-black p-4 shadow-md"
        >
          <div className="font-bold">{user.name}</div>
          <div className="text-sm">
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
