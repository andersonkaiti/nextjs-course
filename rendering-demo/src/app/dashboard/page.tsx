"use client";

import { useState } from "react";

export default function DashboardPage() {
  console.log("Dashboard client component");
  const [name, setName] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1>Dashboard</h1>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="focus:border-grey-500 focus:ring-grey-500 dark:focus:border-grey-500 dark:focus:ring-grey-500 block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-4 dark:border-gray-600 dark:bg-black dark:text-white dark:placeholder-gray-400"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
