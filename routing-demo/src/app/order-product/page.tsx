"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
    // router.replace("/");
  };

  return (
    <div className="flex flex-col gap-2">
      <h1>Order product</h1>
      <button
        onClick={handleClick}
        className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-gray-600 dark:hover:bg-neutral-900 dark:focus:ring-neutral-800"
      >
        Place order
      </button>
    </div>
  );
}
