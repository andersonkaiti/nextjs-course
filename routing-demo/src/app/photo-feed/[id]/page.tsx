import Image from "next/image";
import wondersImages, { IWonderImage } from "../wonders";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const photo: IWonderImage = wondersImages.find((photo) => photo.id === id)!;

  return (
    <div className="container mx-auto my-10">
      <div className="mx-auto w-1/2">
        <div>
          <h1 className="my-4 text-center text-3xl font-bold"></h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="aspect-square w-full object-cover"
        />

        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
