"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/react-form/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, price, description }),
      });

      if (response.ok) {
        router.push("/products-db");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-96 space-y-4 p-4">
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full rounded border p-2"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label className="text-white">
        Price
        <input
          type="number"
          className="block w-full rounded border p-2"
          name="price"
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <label className="text-white">
        Description
        <textarea
          className="block w-full rounded border p-2"
          name="description"
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <button
        className="disabled-bg-gray-500 block w-full rounded bg-blue-500 p-2 text-white"
        disabled={loading}
      >
        {loading ? "Submtting..." : "Submit"}
      </button>
    </form>
  );
}
