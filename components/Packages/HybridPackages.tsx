import React from "react";
import PackageCard from "../Cards/PackageCard";
import { HybridDIYPackages } from "@/constants/cardData";

const HybridPackages = () => {
  return (
    <div className="max-w-7xl flex flex-col mx-auto w-full py-14 tracking-[0.0652em] gap-12">
      <h2 className="uppercase text-brand-blue font-bold lg:text-4xl md:text-3xl text-2xl xl:text-5xl text-center">
        Hybrid <span className="text-brand-yellow">DIY</span> Packages
      </h2>
      <div className="flex flex-wrap justify-evenly gap-12">
        {HybridDIYPackages.map((item, index) => {
          return <PackageCard key={`package-${index}`} data={item} />;
        })}
      </div>
    </div>
  );
};

export default HybridPackages;
