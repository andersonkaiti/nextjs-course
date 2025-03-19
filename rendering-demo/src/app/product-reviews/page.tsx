import { Suspense } from "react";
import { Product } from "@components/product";
import { Reviews } from "@components/reviews";

export default function ProductReviews() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Product reviews</h1>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
