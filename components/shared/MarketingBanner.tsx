"use client";

import React from "react";

interface Props {
  name: string;
  description: string | React.ReactNode;
  variant?: "warning" | "danger" | "info";
}

const MarketingBanner = ({ description, variant = "warning" }: Props) => {
  const getVariantClass = (variant: string) => {
    switch (variant) {
      case "warning":
        return "bg-brand-yellow";
      case "danger":
        return "bg-[#f15959]";
      case "info":
        return "bg-brand-teal-button";
      default:
        break;
    }
  };

  return (
    <div
      className={`flex items-center justify-center
py-2 transition-transform duration-500  ease-in-out ${getVariantClass(variant)}
   `}
    >
      <div className=" !mb-0 px-12 py-2 text-center text-base font-bold text-white max-sm:px-6 max-sm:text-sm max-[500px]:text-xs xl:text-lg ">
        {description}
      </div>
    </div>
  );
};

export default MarketingBanner;
