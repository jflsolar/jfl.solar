import { FeaturesData } from "@/constants/cardData";
import React from "react";
import FeatureCard from "../Cards/FeatureCard";

const OurWorks = () => {
  return (
    <div className="flex w-full flex-col gap-16 bg-white py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 py-14 tracking-[0.0652em]">
        <h2 className="text-center text-5xl font-bold uppercase text-brand-blue">
          Our <span className="text-brand-yellow">Works</span>
        </h2>
        <div className="flex flex-wrap justify-evenly gap-10">
          {FeaturesData.map((item, index) => {
            return <FeatureCard key={`service-${index}`} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
