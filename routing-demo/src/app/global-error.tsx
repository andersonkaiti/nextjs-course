"use client";

import "./globals.css";

export default function GlobalError() {
  return (
    <html>
      <body className="bg-black dark:text-white">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h2 className="mb-4 text-2xl font-bold">Something went worng!</h2>
          <button
            onClick={() => window.location.reload()}
            className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-gray-600 dark:hover:bg-neutral-900 dark:focus:ring-neutral-800"
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
