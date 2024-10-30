import KeyValueTable from "@/components/shared/KeyValueTable";
import { PanelProducts } from "@/constants/cardData";
import { formatCurrency } from "@/lib/utils";
import { TableDetailProps, URLProps } from "@/types";
import Image from "next/image";
import React from "react";

const page = ({ params }: URLProps) => {
  const data = PanelProducts.find((item) => item.id === params?.id);

  const moduleData: TableDetailProps = {
    data: {
      solarCells: {
        title: "Cell Type",
        value: data?.solarCells,
      },
      dimensions: {
        title: "Dimensions",
        value: data?.dimensions,
      },
      weight: {
        title: "Weight",
        value: data?.weight,
      },
      vmp: {
        title: "Maximum Power Voltage -Vmp (V)",
        value: data?.vmp,
      },
      imp: {
        title: "Maximum Power Current -Imp (A)",
        value: data?.imp,
      },
      voc: {
        title: "Open Circuit Voltage -Voc (V)",
        value: data?.voc,
      },
      isc: {
        title: "Short Circuit Current -Isc (A)",
        value: data?.isc,
      },
      efficiency: {
        title: "Module Efficiency STC-ηm (%)",
        value: data?.efficiency,
      },
      downloadLink: {
        title: "PV Module Datasheet",
        value: data?.model,
        href: data?.datasheetLink,
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
                loading="lazy"
                alt={data?.title}
                className="size-full object-contain max-lg:max-h-[360px] max-sm:max-h-[240px] "
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
                input={moduleData}
                titleWidth={320}
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

export default page;
