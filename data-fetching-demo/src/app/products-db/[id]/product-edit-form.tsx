"use client";

import { useActionState } from "react";
import { ErrorMessage } from "@components/error-message";
import { Loading } from "@components/loading";
import { editProduct, IFormState } from "@actions/products";
import { IProduct } from "../page";

export default function EditProductForm({
  product: { description, id, price, title },
}: {
  product: IProduct;
}) {
  const initialState: IFormState = {
    errors: {},
    // id: String(id),
  };

  const editProductWithId = editProduct.bind(null, id);

  const [state, formAction, isPending] = useActionState(
    // editProduct,
    editProductWithId,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="mx-auto flex h-screen max-w-96 flex-col justify-center gap-4 p-4"
    >
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-4 focus:ring-gray-500 dark:border-gray-600 dark:bg-black dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500"
            name="title"
            defaultValue={title}
          />
        </label>
        {state.errors.title && (
          <ErrorMessage>{state.errors.title}</ErrorMessage>
        )}
      </div>
      <div>
        <label className="text-white">
          Price
          <input
            type="number"
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-4 focus:ring-gray-500 dark:border-gray-600 dark:bg-black dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500"
            name="price"
            defaultValue={price}
          />
        </label>
        {state.errors.price && (
          <ErrorMessage>{state.errors.price}</ErrorMessage>
        )}
      </div>
      <div>
        <label className="text-white">
          Description
          <textarea
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-4 focus:ring-gray-500 dark:border-gray-600 dark:bg-black dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500"
            name="description"
            defaultValue={description ?? ""}
          />
        </label>
        {state.errors.description && (
          <ErrorMessage>{state.errors.description}</ErrorMessage>
        )}
      </div>

      <button
        type="submit"
        className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={isPending}
      >
        {isPending && <Loading />}
        Update Product
      </button>
    </form>
  );
}
