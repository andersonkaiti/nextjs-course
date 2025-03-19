"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { addProduct, deleteProduct, updateProduct } from "@prisma/prisma-db";

export interface IErrors {
  title?: string;
  price?: string;
  description?: string;
}

export interface IFormState {
  errors: IErrors;
  // id?: string;
}

export async function createProduct(_: IFormState, formData: FormData) {
  // const title = formData.get("title") as string;
  // const price = formData.get("price") as string;
  // const description = formData.get("description") as string;

  const { title, price, description } = Object.fromEntries(formData);

  const errors: IErrors = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  await addProduct(String(title), +price, String(description));

  redirect("/products-db");
}

export async function editProduct(
  id: number,
  _: IFormState,
  formData: FormData,
) {
  const { title, price, description } = Object.fromEntries(formData);

  const errors: IErrors = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  await updateProduct(Number(id), String(title), +price, String(description));

  redirect("/products-db");
}

export async function removeProduct(id: number) {
  await deleteProduct(id);

  revalidatePath("/products-db");
}
