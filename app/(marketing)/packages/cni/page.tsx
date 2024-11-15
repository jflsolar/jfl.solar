"use client";

import CustomButton from "@/components/shared/CustomButton";
import Image from "next/image";
import React from "react";

const CommercialAndIndustrial = () => {
  return (
    <div className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute right-0 top-0 z-0 size-full">
        <Image
          src="/cni.jpg"
          alt="cni project"
          width={1600}
          height={1600}
          className="size-full object-cover"
        />
      </div>

      <div className="absolute inset-y-0 right-0 z-[5] w-full">
        <div className="size-full bg-brand-blue/90" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex max-w-full flex-col items-center gap-12 px-12 py-32 text-center max-sm:py-20 max-sm:text-center max-[450px]:px-4 lg:px-20">
          <h2 className="title-bold max-w-5xl">
            Tailored Packages FOR{" "}
            <span className="text-brand-yellow">Commercial & Industrial</span>{" "}
            Projects
          </h2>
          <p className="paragraph-base max-w-3xl">
            Instead of standard packages, we offer customized solar solutions
            tailored to your specific requirements, whether you want to lower
            energy bills, reduce your carbon footprint, or rely less on the
            grid..
          </p>
          <p className="paragraph-base max-w-3xl">
            {`Book a call with our experts to start your custom solar package. We're here to help!`}
          </p>
          <div className="flex flex-col items-center gap-12">
            <CustomButton
              text="Schedule a Call"
              className="btn"
              type="link"
              variant="primary"
              href="https://calendly.com/jflsolarjay/30min"
            />
            <span className="paragraph-base mt-4">You may also</span>
            <div className="flex items-center gap-4">
              <CustomButton
                text="Message us on Facebook"
                type="link"
                variant="secondary"
                className="btn border-white text-white"
                href="https://www.messenger.com/t/100636625854724"
              />
              <span className="paragraph-base">or</span>
              <CustomButton
                text="Talk to our sales"
                type="link"
                variant="secondary"
                className="btn border-white text-white"
                href="tel:+63956935247"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialAndIndustrial;
