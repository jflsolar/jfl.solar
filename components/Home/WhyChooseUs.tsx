import { FeaturesData } from "@/constants/cardData";
import React from "react";
import FeatureCard from "../Cards/FeatureCard";

const WhyChooseUs = () => {
  return (
    <div className="flex w-full flex-col gap-16 bg-white py-40 max-sm:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 tracking-[0.0652em] max-sm:px-8 max-sm:text-center">
        <h2 className="text-2xl font-bold uppercase tracking-[0.0625em] text-brand-blue md:text-3xl lg:text-4xl 3xl:text-5xl">
          <span className="text-brand-yellow">Why</span> Choose Us?
        </h2>
        <p className="text-base text-brand-blue lg:text-lg 3xl:text-2xl">
          Your Trusted Partner in Solar Energy Excellence
        </p>
        <div className="flex flex-wrap justify-center gap-5 lg:gap-10">
          {FeaturesData.map((item, index) => {
            return <FeatureCard key={`service-${index}`} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
