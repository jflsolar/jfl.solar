import React from "react";
import PackageCard from "../Cards/PackageCard";
import { GridTiedDIYPackages } from "@/constants/cardData";

const GridTiedPackages = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 py-14 tracking-[0.0652em]">
      <h2 className="text-center text-2xl font-bold uppercase text-brand-blue md:text-3xl lg:text-4xl xl:text-5xl">
        Grid-Tied <span className="text-brand-yellow">DIY</span> Packages
      </h2>
      <div className="flex flex-wrap justify-evenly gap-12">
        {GridTiedDIYPackages.map((item, index) => {
          return <PackageCard key={`package-${index}`} data={item} />;
        })}
      </div>
    </div>
  );
};

export default GridTiedPackages;
