import { NextRequest, NextResponse } from "next/server";
import { addProduct } from "@prisma/prisma-db";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { title, price, description } = body;

  const product = await addProduct(title, +price, description);

  return NextResponse.json(JSON.stringify(product), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
