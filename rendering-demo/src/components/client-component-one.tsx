"use client";

import { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";
import { ServerComponentOne } from "./server-component-one";

export function ClientComponentOne({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState("Batman");

  return (
    <>
      <h1>Client component one</h1>
      {/* <ClientComponentTwo /> */}
      {/* <ServerComponentOne /> */}
      {children}
    </>
  );
}
