import { getProducts } from "@prisma/prisma-db";
import { ProductsDetail } from "./product-detail";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string | null;
}

export default async function ProductsDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  const products: IProduct[] = await getProducts(query);

  return <ProductsDetail products={products} />;
}
