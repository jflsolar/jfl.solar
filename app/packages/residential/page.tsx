import GridTiedPackages from "@/components/Packages/GridTiedPackages";
import HybridPackages from "@/components/Packages/HybridPackages";
import console from "console";
import React from "react";

const ResidentialPackages = () => {
  return (
    <div className="flex w-full flex-col gap-16 bg-white">
      <HybridPackages />
      <GridTiedPackages />
    </div>
  );
};

export default ResidentialPackages;
