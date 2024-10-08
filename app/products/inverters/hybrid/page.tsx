import ProductCard from "@/components/Cards/ProductCard";
import { HybridInverterProducts } from "@/constants/cardData";
import React from "react";

const Inverters = () => {
  return (
    <div className="flex w-full flex-col gap-16 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 py-14 tracking-[0.0652em]">
        <h2 className="text-center text-2xl font-bold uppercase text-brand-blue md:text-3xl lg:text-4xl xl:text-5xl">
          <span className="text-brand-yellow">
            Hybrid On/Off Grid Inverters
          </span>
        </h2>
        <div className="flex flex-wrap justify-evenly gap-12">
          {HybridInverterProducts.map((item, index) => {
            return <ProductCard key={`product-${index}`} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Inverters;
