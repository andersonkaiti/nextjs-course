export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div role="status" className="w-96 animate-pulse p-4">
        <div className="mb-2 h-4.5 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="max-96 mb-4.5 h-10 rounded-lg bg-gray-200 dark:bg-gray-700"></div>

        <div className="mb-2 h-4.5 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="max-96 mb-4.5 h-10 rounded-lg bg-gray-200 dark:bg-gray-700"></div>

        <div className="mb-2 h-4.5 w-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="max-96 mb-4.5 h-12 rounded-lg bg-gray-200 dark:bg-gray-700"></div>

        <div className="h-10 max-w-96 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
