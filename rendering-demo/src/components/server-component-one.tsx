import fs from "node:fs";
import { ServerComponentTwo } from "./server-component-two";
import { ClientComponentOne } from "./client-component-one";

export function ServerComponentOne() {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");

  return (
    <>
      <h1>Server component one</h1>
      {/* <ServerComponentTwo /> */}
      <ClientComponentOne />
    </>
  );
}
