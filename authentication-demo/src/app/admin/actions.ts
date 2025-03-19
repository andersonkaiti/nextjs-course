"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface IRole {
  id: string;
  role?: string | null;
}

async function verifyRole() {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata.role !== "admin") {
    throw new Error("Not Authorized");
  }

  return;
}

async function updateRole({ id, role = null }: IRole) {
  const client = await clerkClient();

  try {
    await client.users.updateUser(id, {
      publicMetadata: {
        role,
      },
    });
  } catch {
    throw new Error("Failed to set role");
  }
}

export async function setRole(id: string, role: string | null = null) {
  await verifyRole();

  await updateRole({ id, role });

  revalidatePath("/admin");
}

export async function removeRole(id: string) {
  await verifyRole();

  await updateRole({ id });

  revalidatePath("/admin");
}
