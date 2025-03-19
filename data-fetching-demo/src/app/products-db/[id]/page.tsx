import { notFound } from "next/navigation";
import { getProduct } from "@prisma/prisma-db";
import EditProductForm from "./product-edit-form";
import { IProduct } from "../page";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product: IProduct | null = await getProduct(+id);

  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
}
