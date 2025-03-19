"use client";

import { useOptimistic } from "react";
import Form from "next/form";
import Link from "next/link";
import { removeProduct } from "@actions/products";
import { Trash } from "@components/trash";
import { currencyBRL } from "@utils/currency";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string | null;
}

export function ProductsDetail({ products }: { products: IProduct[] }) {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) =>
      currentProducts.filter((product) => product.id !== productId),
  );

  async function removeProductById(productId: number) {
    setOptimisticProducts(productId);

    await removeProduct(productId);
  }

  return (
    <ul className="space-y-4 p-4">
      {optimisticProducts.map((product) => (
        <li
          key={product.id}
          className="rounded-lg border-2 border-neutral-900 bg-black p-4 shadow-md"
        >
          <h2 className="text-xl font-semibold">
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
          </h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">{currencyBRL(product.price)}</p>
          <Form action={removeProductById.bind(null, product.id)}>
            <button
              type="submit"
              className="group relative me-2 mt-4 mb-2 flex cursor-pointer gap-2 overflow-hidden rounded-md bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <Trash />
              Delete
            </button>
          </Form>
        </li>
      ))}
    </ul>
  );
}
