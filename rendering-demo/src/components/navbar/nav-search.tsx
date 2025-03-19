"use client";

import { useState } from "react";

export function NavSearch() {
  console.log(`NavSearch rendered`);

  const [search, setSearch] = useState("");

  return <div>Nav search input</div>;
}
