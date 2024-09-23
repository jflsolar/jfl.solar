import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="relative w-full">
      <div className="max-w-7xl mx-auto py-40 max-sm:py-20 z-[20] bg-white/0 relative max-lg:px-8">
        <div className="max-w-[700px] ml-auto text-right flex flex-col items-end w-full gap-4">
          <h2 className="title-bold">
            OUR <span className="text-brand-yellow">MISSION</span>
          </h2>
          <p className="paragraph-base">
            To empower residential, commercial, and industrial sectors to thrive
            financially with sustainable, green energy solutions, leading the
            Philippines toward an energy-independent and environmentally
            conscious future.
          </p>
        </div>
      </div>
      <div className="absolute w-full h-full top-0">
        <div className="lg:bg-mission-gradient-50 absolute top-0 z-10 right-0 w-full h-full max-lg:bg-brand-blue/90" />
        <Image
          src={"/about-jfl.png"}
          width={720}
          height={700}
          alt="cover"
          className="absolute z-0 top-0 left-0 object-cover lg:w-[50%] w-full h-full"
        />
      </div>
    </div>
  );
};

export default Mission;
