import { setTimeout } from "timers/promises";

interface IAuthor {
  id: number;
  name: string;
}

export default async function Author({ userId }: { userId: number }) {
  await setTimeout(1_000);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  const user: IAuthor = await response.json();

  return (
    <div className="text-sm text-gray-500">
      Written by:{" "}
      <span className="font-semibold text-gray-700 transition-colors hover:text-gray-900">
        {user.name}
      </span>
    </div>
  );
}
