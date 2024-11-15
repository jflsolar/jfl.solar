import GridTiedPackages from "@/components/Packages/GridTiedPackages";
import HybridPackages from "@/components/Packages/HybridPackages";
import React from "react";

const Packages = () => {
  return (
    <div className="flex w-full flex-col gap-16 bg-white">
      <HybridPackages type="DIY" />
      <GridTiedPackages type="DIY" />
    </div>
  );
};

export default Packages;
