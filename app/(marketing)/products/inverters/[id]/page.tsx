import KeyValueTable from "@/components/shared/KeyValueTable";
import {
  GridTiedInverterProducts,
  HybridInverterProducts,
} from "@/constants/cardData";
import { formatCurrency } from "@/lib/utils";
import { TableDetailProps, URLProps } from "@/types";
import Image from "next/image";
import React from "react";

const InverterDetails = ({ params }: URLProps) => {
  const data = [...HybridInverterProducts, ...GridTiedInverterProducts].find(
    (item) => item.id === params?.id
  );

  const inverterData: TableDetailProps = {
    data: {
      maxPower: {
        title: "Max. PV Input Power (W)",
        value: data?.maxPower,
      },
      maxVoltage: {
        title: "Max. PV Input Voltage (V)",
        value: data?.maxVoltage,
      },
      startUp: {
        title: "Start-up Voltage (V)",
        value: data?.startUp,
      },
      ratedVoltage: {
        title: "Rated PV Input Voltage (V)",
        value: data?.ratedVoltage,
      },
      maxCurrent: {
        title: "Max. Operating PV Input Current (A)",
        value: data?.maxCurrent,
      },
      maxIsc: {
        title: "Max. Input Short-Circuit Current (A)",
        value: data?.maxIsc,
      },
      mppt: {
        title: "No. of MPP Trackers/No. of Strings MPP Tracker",
        value: data?.mppt,
      },
      dimensions: {
        title: "Dimensions",
        value: data?.dimensions,
      },
      weight: {
        title: "Weight",
        value: data?.weight,
      },
      downloadLink: {
        title: "Inverter Datasheet",
        value: data?.model,
        href: data?.datasheet,
      },
    },
  };

  return (
    <div className="flex w-full flex-col gap-16 bg-white">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-8 py-14 tracking-[0.0652em] lg:px-0">
        <div className="flex flex-col gap-x-16 lg:flex-row">
          {data?.imageUrl && (
            <div className="flex overflow-hidden">
              <Image
                src={data?.imageUrl}
                height={3503}
                width={350}
                alt="Product Photo"
                className="size-full object-contain drop-shadow-xl max-lg:max-h-[360px] max-sm:max-h-[240px]"
              />
            </div>
          )}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold md:text-3xl">{data?.title}</h1>
              <h2 className="text-base text-slate-500 md:text-xl">
                {data?.model}
              </h2>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-brand-yellow max-sm:text-lg 2xl:text-2xl">
                {`SRP: ${formatCurrency(data?.srp || 0)}`}
              </h3>
              {data?.installer && (
                <h4 className="text-base font-medium text-brand-blue max-sm:text-base 2xl:text-lg">
                  {`Installer Price: ${formatCurrency(data?.installer)}`}
                </h4>
              )}
            </div>
            <div>
              <KeyValueTable
                input={inverterData}
                titleWidth={340}
                className="text-sm text-slate-700 md:text-base"
                keyClassName="font-semibold"
                valueClassName="min-w-[240px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InverterDetails;
