import React from "react";
import PackageCard from "../Cards/PackageCard";
import { HybridPackagesData } from "@/constants/cardData";

interface Props {
  type: "DIY" | "Installation";
}

const HybridPackages = ({ type }: Props) => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 py-14 tracking-[0.0652em]">
      <div className="flex w-full flex-col gap-2 text-center">
        <h2 className="text-2xl font-bold uppercase text-brand-blue md:text-3xl lg:text-4xl xl:text-5xl">
          Hybrid{" "}
          <span className="text-brand-yellow">
            {type === "DIY" ? "DIY" : "Complete"}
          </span>{" "}
          Packages
        </h2>
        <span className="text-xl text-slate-600 max-sm:text-lg md:text-2xl">
          {type === "DIY" ? "(Do It Yourself)" : "(With Installation)"}
        </span>{" "}
      </div>
      <div className="flex flex-wrap justify-evenly gap-12">
        {HybridPackagesData.map((item, index) => {
          return (
            <PackageCard key={`package-${index}`} type={type} data={item} />
          );
        })}
      </div>
    </div>
  );
};

export default HybridPackages;
