import GirlsWear from "@/components/GirlsWear";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="w-full ">
      <Image
        alt="Banner"
        src="/banner.png"
        width={1200}
        height={600}
        layout="responsive"
        className="hidden md:block w-full h-auto"
        quality={100}
        draggable={false}
      />

       <Image
        alt="Banner"
        src="/banner2.png"
        width={1200}
        height={600}
        layout="responsive"
        className="block md:hidden  w-full h-auto mt-5"
        quality={100}
        draggable={false}
      />
    </div>
    <GirlsWear />
    </>
  );
}
