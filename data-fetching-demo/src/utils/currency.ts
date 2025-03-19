import { IProduct } from "@/app/products-db/page";

export function currencyBRL(price: IProduct["price"]) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}
