import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link
        href="/blog"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Blog
      </Link>
      <Link
        href="/products"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Products
      </Link>
      <Link
        href="/articles/breaking-news-123?lang=en"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Read in English
      </Link>
      <Link
        href="/articles/breaking-news-123?lang=fr"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Read in French
      </Link>
    </>
  );
}
