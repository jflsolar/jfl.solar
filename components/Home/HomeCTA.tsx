import React from "react";
import CustomButton from "../CustomButton";

const HomeCTA = () => {
  return (
    <div className="w-full bg-brand-blue">
      <div className="mx-auto max-w-4xl px-8 py-40 max-sm:py-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold uppercase text-brand-yellow max-sm:text-xl md:text-3xl lg:text-4xl">
            READY TO GO SOLAR?
          </h2>
          <p className="text-base text-slate-50 max-sm:text-sm md:text-xl">
            {` Join the growing number of homeowners and businesses making the
            switch to clean, renewable energy. Whether you're interested in a
            residential, commercial, or industrial solar solution, we're here to
            help you take the next step.`}
          </p>
          <CustomButton
            className="w-fit px-8 py-4 text-base max-sm:text-sm lg:text-lg 3xl:text-2xl"
            text="Request Your Free Quote"
            variant="primary"
            type="link"
            href="/quotation"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCTA;
