export default function Loading() {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, index: number) => (
        <div
          key={index}
          role="status"
          className="m-4 animate-pulse rounded-lg border-2 border-neutral-900 p-4"
        >
          <div className="mb-4 h-5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-3 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-5 max-w-[100px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mt-6 h-10 max-w-[100px] rounded-lg bg-gray-200 dark:bg-gray-700"></div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
}
