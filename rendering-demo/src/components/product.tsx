import { setTimeout } from "timers/promises";

export async function Product() {
  await setTimeout(2_000);

  return <div>Product</div>;
}
