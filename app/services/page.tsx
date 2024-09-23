import ServiceCard from "@/components/Cards/ServiceCard";
import ServiceForm from "@/components/Services/ServiceForm";
import { ServicesData } from "@/constants/cardData";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-16 bg-white px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 py-14 tracking-[0.0652em]">
          <h2 className="text-center text-2xl font-bold uppercase tracking-[0.0625em] text-brand-blue md:text-3xl lg:text-4xl 3xl:text-5xl">
            Our <span className="text-brand-yellow">Services</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {ServicesData.map((item, index) => {
              return <ServiceCard key={`service-${index}`} data={item} />;
            })}
          </div>
        </div>
      </div>
      <ServiceForm />
    </>
  );
};

export default page;
