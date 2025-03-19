"use client";

import { useTheme } from "@/contexts/theme-provider";

import { serverSideFunction } from "@utils/server-utils";

import { clientSideFunction } from "@utils/client-utils";

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();

  return (
    <>
      <h1
        style={{
          color: theme.colors.secondary,
        }}
      >
        Client router page
      </h1>
      <p>{result}</p>
    </>
  );

  // const settings = {
  //   dots: true,
  // };

  // return (
  //   <div className="image-slider-container">
  //     <Slider {...settings}>
  //       <div>
  //         <img src="http://picsum.photos/g/400/200" />
  //       </div>
  //       <div>
  //         <img src="http://picsum.photos/g/400/200" />
  //       </div>
  //       <div>
  //         <img src="http://picsum.photos/g/400/200" />
  //       </div>
  //       <div>
  //         <img src="http://picsum.photos/g/400/200" />
  //       </div>
  //     </Slider>
  //   </div>
  // );

  // const result = serverSideFunction();

  // return <h1>Client Route {result}</h1>;
}
