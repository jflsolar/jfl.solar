"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";

const Packages = () => {
  const router = useRouter();
  return (
    <div className="relative size-full min-h-[95vh] overflow-hidden">
      <div className="absolute left-0 top-0 flex h-full w-1/2 items-center justify-center max-sm:hidden">
        <Image
          src={"/package-main.png"}
          width={500}
          height={500}
          alt="cover"
          className="object-contain"
        />
      </div>
      <div className="absolute right-0 top-0 z-0 size-full sm:w-1/2">
        <Image
          src={"/home-package-bg.png"}
          width={720}
          height={700}
          alt="cover"
          className="size-full object-cover"
        />
      </div>
      <div className="absolute inset-y-0 right-0 z-[5] w-full sm:w-1/2">
        <div className="size-full bg-brand-blue/90" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="ml-auto flex max-w-full flex-col gap-8 px-12 py-40 max-sm:items-center max-sm:py-20 max-sm:text-center max-[450px]:px-4 sm:max-w-[50%] lg:px-20 xl:max-w-screen-sm">
          <Image
            src={"/package-main.png"}
            width={250}
            height={250}
            alt="cover"
            className="hidden object-contain max-sm:flex"
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
          <p className="text-base text-slate-100 lg:text-lg 3xl:text-2xl">
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
