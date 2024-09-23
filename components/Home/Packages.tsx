"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";

const Packages = () => {
  const router = useRouter();
  return (
    <div className="relative w-full min-h-[95vh] h-full overflow-hidden">
      <div className="absolute w-[50%] h-full left-0 top-0 flex items-center justify-center max-sm:hidden">
        <Image
          src={"/package-main.png"}
          width={500}
          height={500}
          alt="cover"
          className="object-contain"
        />
      </div>
      <div className="absolute w-full sm:w-[50%] h-full right-0 top-0 z-0">
        <Image
          src={"/home-package-bg.png"}
          width={720}
          height={700}
          alt="cover"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute w-full sm:w-[50%] right-0 top-0 bottom-0 z-[5]">
        <div className="w-full h-full bg-brand-blue/90" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-sm:text-center max-sm:items-center sm:max-w-[50%] max-w-full xl:max-w-[640px] ml-auto flex flex-col gap-8 py-40 lg:px-20 px-12 max-sm:py-20 max-[450px]:px-4">
          <Image
            src={"/package-main.png"}
            width={250}
            height={250}
            alt="cover"
            className="object-contain max-sm:flex hidden"
          />
          <h2 className="title-bold">
            Tailored{" "}
            <span className="text-brand-yellow">Solar PV Packages</span> for
            Every Need{" "}
          </h2>
          <p className="paragraph-base">
            At JFL Solar, we know every project is unique, whether it’s a home,
            business, or industrial site.
          </p>
          <p className="text-base lg:text-lg 3xl:text-2xl text-slate-100">
            That’s why we offer tailored Solar PV packages to meet the specific
            needs of our clients, ensuring efficiency, reliability, and savings
            for every project size.
          </p>
          <CustomButton
            text="View all packages"
            className="btn"
            type="button"
            variant="primary"
            onClick={() => router.push("/packages")}
          />
        </div>
      </div>
    </div>
  );
};

export default Packages;
