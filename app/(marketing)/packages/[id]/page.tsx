"use client";

import PackageCard from "@/components/Cards/PackageCard";
import CustomButton from "@/components/shared/CustomButton";
import KeyValueTable from "@/components/shared/KeyValueTable";
import { GridTiedDIYPackages, HybridDIYPackages } from "@/constants/cardData";
import { EMAIL_ADDRESS } from "@/constants/constant";
import { formatCurrency } from "@/lib/utils";
import { TableDetailProps, URLProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const HybridPackage = ({ params }: URLProps) => {
  const router = useRouter();
  const data = [...HybridDIYPackages, ...GridTiedDIYPackages].find(
    (item) => item.id === params?.id
  );

  const inverterData: TableDetailProps = {
    data: {
      inverter: {
        title: "Inverter",
        value: data?.inverter,
      },
      battery: {
        title: "Battery",
        value: data?.battery,
      },
      panel: {
        title: "Solar Panels",
        value: data?.panel,
      },
      mounting: {
        title: "Mounting",
        value: data?.mounting,
      },
      safetyDevices: {
        title: "Safety Devices",
        value: data?.safetyDevices,
      },
      cables: {
        title: "Cables",
        value: data?.cables,
      },
      accessories: {
        title: "Accessories",
        value: data?.accessories,
      },
      prod: {
        title: "Annual Production Forecast",
        value: data?.annualProd,
      },
      roi: {
        title: "Estimated ROI",
        value: data?.estimatedROI,
      },
    },
  };

  return (
    <div className="flex w-full flex-col bg-white">
      <div className="mx-auto flex w-full flex-col gap-8 px-8 py-14 tracking-[0.0652em] lg:px-0">
        <div className="mx-auto flex max-w-7xl flex-col gap-x-16 lg:flex-row">
          {data?.imageUrl && (
            <div className="flex overflow-hidden">
              <Image
                src={data?.imageUrl}
                height={3503}
                width={500}
                loading="lazy"
                alt={data?.title}
                className="size-full object-contain max-lg:max-h-[360px] max-sm:max-h-[240px]"
              />
            </div>
          )}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold md:text-3xl">{data?.title}</h1>
            </div>
            <div className="flex flex-row gap-2">
              <h3 className="text-3xl font-bold text-brand-yellow max-sm:text-lg 2xl:text-4xl ">
                {`${formatCurrency(data?.price || 0)}`}
              </h3>
              <span className="size-fit rounded-full border border-red-400 p-2 text-xs font-black uppercase text-red-400">
                Limited Offer!
              </span>
            </div>
            <div className="mt-8">
              <KeyValueTable
                input={inverterData}
                titleWidth={300}
                className="text-sm text-slate-700 md:text-base"
                keyClassName="font-semibold"
                valueClassName="min-w-[240px]"
              />
            </div>
            {data?.quoteLink && (
              <CustomButton
                variant="primary"
                text={"Get a Quote"}
                onClick={() => router.push(data.quoteLink || "")}
              />
            )}
            <span className="rounded-lg bg-yellow-100 p-4 text-lg font-bold italic text-yellow-900">
              {`"With Free Full Technical Support from installation, parameter
              settings of inverter and battery to troubleshooting" Sagot ka
              namin!`}
            </span>
          </div>
        </div>
        <div className="bg-brand-blue text-brand-yellow">
          <div className=" mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 px-4 py-8 text-center text-base font-bold max-sm:flex-col max-sm:gap-y-4">
            <div className=" flex items-center gap-2 max-sm:line-clamp-1">
              <h4 className="whitespace-nowrap max-sm:font-normal">
                Contact our Sales:{" "}
              </h4>
              <div className="flex items-center whitespace-nowrap max-sm:w-full max-sm:justify-center max-sm:whitespace-normal">
                <span>0976-135-9479 / 0917-153-5569</span>
              </div>
            </div>
            <span className="max-sm:hidden">|</span>
            <div className="flex flex-row items-center gap-2 max-sm:line-clamp-1 max-sm:flex-col">
              <h4 className="whitespace-nowrap max-sm:font-normal">
                Message us on Facebook:
              </h4>
              <div className="flex items-center whitespace-nowrap max-sm:w-full max-sm:justify-center">
                <a href="https://www.facebook.com/jflsolar">@jflsolar</a>
              </div>
            </div>
            <span className="max-sm:hidden">|</span>
            <div className="flex items-center gap-2 max-sm:line-clamp-1">
              <h4 className="whitespace-nowrap max-sm:font-normal">
                Send us an Email:{" "}
              </h4>
              <div className="flex items-center whitespace-nowrap max-sm:w-full max-sm:justify-center">
                <span>{EMAIL_ADDRESS}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 py-14 tracking-[0.0652em]">
        <h2 className="text-center text-2xl font-bold uppercase text-brand-blue md:text-3xl lg:text-3xl">
          View More Packages
        </h2>
        <div className="flex flex-wrap justify-evenly gap-12">
          {HybridDIYPackages.filter((item) => item.id !== params?.id).map(
            (item, index) => {
              return <PackageCard key={`package-${index}`} data={item} />;
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default HybridPackage;
