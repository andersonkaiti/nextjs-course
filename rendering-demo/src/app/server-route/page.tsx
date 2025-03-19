import { ImageSlider } from "@components/image-carousel";

import { serverSideFunction } from "@utils/server-utils";

import { clientSideFunction } from "@utils/client-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  // const clientResult = clientSideFunction();

  return (
    <>
      <h1>
        Server Route {result}
        {/* {clientResult} */}
      </h1>
      <ImageSlider />
    </>
  );
}
