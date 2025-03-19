import Link from "next/link";

export default function InnerF2() {
  return (
    <>
      <h1>Inner F2 page</h1>
      <div className="mt-4">
        <Link
          href="/f5"
          className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-gray-600 dark:hover:bg-neutral-900 dark:focus:ring-neutral-800"
        >
          F5
        </Link>
      </div>
    </>
  );
}
