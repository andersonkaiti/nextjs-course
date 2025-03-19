import { setTimeout } from "timers/promises";

export async function Reviews() {
  await setTimeout(4_000);

  return <div>Reviews</div>;
}
