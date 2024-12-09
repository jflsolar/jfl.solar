"use client";

import React from "react";
import { Gift, Snowflake } from "tabler-icons-react";

interface Props {
  name: string;
  description: string | React.ReactNode;
  variant?: "warning" | "danger" | "info" | "custom";
  customClassName?: string;
}

const MarketingBanner = ({
  description,
  customClassName,
  variant = "warning",
}: Props) => {
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
      className={`flex items-center justify-center ${customClassName}
relative px-12 py-2 transition-transform duration-500 ease-in-out ${getVariantClass(variant)}
   `}
    >
      <Gift
        className="absolute left-10 top-2 rotate-45 opacity-20 max-md:-left-4"
        size={56}
      />
      <div className=" !mb-0 text-pretty py-2 text-center text-base font-bold text-white max-sm:px-6 max-sm:text-sm max-[500px]:text-xs xl:text-lg ">
        {description}
      </div>
      <Snowflake
        className="absolute bottom-4 right-10 rotate-45 opacity-20 max-md:-right-4"
        size={56}
      />
    </div>
  );
};

export default MarketingBanner;
