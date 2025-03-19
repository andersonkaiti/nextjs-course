"use client";

import { useState } from "react";

interface IWrapperProps {
  children: React.ReactNode;
}

function ErrorSimulator({ message }: { message?: string }) {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an error"
      className="loading-one text-small rounded bg-red-950 px-2 py-1 font-semibold text-red-500"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
}

export default function ErrorWrapper({ children }: IWrapperProps) {
  return (
    <div className="relative my-8 flex min-w-40 flex-col rounded-lg border border-gray-300 p-4 pt-8">
      <div className="absolute left-4 top-0 -translate-y-1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  );
}
