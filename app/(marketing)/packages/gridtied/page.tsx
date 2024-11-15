import GridTiedPackages from "@/components/Packages/GridTiedPackages";
import React from "react";

const Packages = () => {
  return (
    <div className="flex w-full flex-col gap-16 bg-white">
      <GridTiedPackages type="DIY" />
    </div>
  );
};

export default Packages;
