import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <div className="relative w-full">
      <div className="relative z-20 mx-auto max-w-7xl bg-white/0 py-40 max-lg:px-8 max-sm:py-20">
        <div className="flex max-w-[700px] flex-col gap-4">
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
      <div className="absolute top-0 size-full">
        <div className="absolute right-0 top-0 z-10 size-full max-lg:bg-white/90 lg:bg-vision-gradient-50" />
        <Image
          src={"/about-jfl.png"}
          width={720}
          height={700}
          alt="cover"
          className="absolute right-0 top-0 z-0 size-full object-cover lg:w-1/2"
        />
      </div>
    </div>
  );
};

export default Vision;
