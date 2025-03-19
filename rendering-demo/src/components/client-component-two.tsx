"use client";

import { useState } from "react";

export function ClientComponentTwo() {
  const [name, setName] = useState("Batman");

  return <h1>Client component two</h1>;
}
