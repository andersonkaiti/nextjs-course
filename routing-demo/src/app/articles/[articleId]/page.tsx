"use client";

import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div className="flex flex-col gap-2">
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>
      <div className="flex gap-2">
        <Link
          href={`/articles/${articleId}?lang=en`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          English
        </Link>
        <Link
          href={`/articles/${articleId}?lang=es`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Spanish
        </Link>
        <Link
          href={`/articles/${articleId}?lang=fr`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          French
        </Link>
      </div>
    </div>
  );
}
