import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1>F1 page</h1>
      <div className="mt-4 flex gap-2">
        <Link
          href={"/f1/f2"}
          className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-gray-600 dark:hover:bg-neutral-900 dark:focus:ring-neutral-800"
        >
          F2
        </Link>
        <Link
          href={"/f3"}
          className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-gray-600 dark:hover:bg-neutral-900 dark:focus:ring-neutral-800"
        >
          F3
        </Link>
      </div>
    </>
  );
}
