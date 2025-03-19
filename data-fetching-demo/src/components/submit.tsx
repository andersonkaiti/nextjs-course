"use client";

import { useFormStatus } from "react-dom";
import { Loading } from "./loading";

export function Submit() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      disabled={pending}
    >
      {pending && <Loading />}
      Add Product
    </button>
  );
}
