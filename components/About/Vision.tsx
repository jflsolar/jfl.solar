import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <div className="relative w-full">
      <div className="max-w-7xl mx-auto py-40 max-sm:py-20 z-[20] bg-white/0 relative max-lg:px-8">
        <div className="max-w-[700px] flex gap-4 flex-col">
          <h2 className="title-bold-light">
            OUR <span className="text-brand-yellow">VISION</span>
          </h2>
          <p className="paragraph-base-light">
            To empower residential, commercial, and industrial sectors to thrive
            financially with sustainable, green energy solutions, leading the
            Philippines toward an energy-independent and environmentally
            conscious future.
          </p>
        </div>
      </div>
      <div className="absolute w-full h-full top-0">
        <div className="lg:bg-vision-gradient-50 absolute top-0 z-10 right-0 w-full h-full max-lg:bg-white/90" />
        <Image
          src={"/about-jfl.png"}
          width={720}
          height={700}
          alt="cover"
          className="absolute z-0 top-0 right-0 object-cover lg:w-[50%] w-full h-full"
        />
      </div>
    </div>
  );
};

export default Vision;
