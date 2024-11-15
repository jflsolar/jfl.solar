import GridTiedPackages from "@/components/Packages/GridTiedPackages";
import HybridPackages from "@/components/Packages/HybridPackages";
import React from "react";

const ResidentialPackages = () => {
  return (
    <div className="flex w-full flex-col gap-16 bg-white">
      <HybridPackages type="Installation" />
      <GridTiedPackages type="Installation" />
    </div>
  );
};

export default ResidentialPackages;
