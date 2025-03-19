import { ServerComponentOne } from "@components/server-component-one";
import { ClientComponentOne } from "@components/client-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving page</h1>
      {/* <ServerComponentOne /> */}

      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
