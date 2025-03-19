import Link from "next/link";

export default function ProductList() {
  const productId = 100;

  return (
    <>
      <Link
        href="/"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        Home
      </Link>
      <h1>Product List</h1>
      <h2>
        <Link
          href="/products/1"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Product 1
        </Link>
      </h2>
      <h2>
        <Link
          href="/products/2"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Product 2
        </Link>
      </h2>
      <h2>
        <Link
          href="/products/3"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          replace
        >
          Product 3
        </Link>
      </h2>
      <h2>
        <Link
          href={`/products/${productId}`}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Product {productId}
        </Link>
      </h2>
    </>
  );
}
