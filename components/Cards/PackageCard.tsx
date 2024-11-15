"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "../shared/CustomButton";
import { useRouter } from "next/navigation";
import { Package } from "@/types";

interface Props {
  type: "DIY" | "Installation";
  data: Package;
}
const PackageCard = ({ type, data }: Props) => {
  const router = useRouter();
  const {
    imageUrl,
    title,
    description,
    priceDIY,
    priceWithInstallation,
    annualProd,
    estimatedROI,
    buttonText,
    redirectLinkDIY,
    redirectLinkInstallation,
    size,
  } = data;
  return (
    <div className="flex max-w-[320px] flex-col items-center gap-4 p-4">
      {imageUrl && (
        <div className="relative min-h-[250px] w-full">
          <Image
            src={imageUrl}
            height={160}
            width={195}
            alt={title || "package photo"}
            loading="lazy"
            className="mx-auto object-contain"
          />
          {size && (
            <div className="absolute bottom-0 right-0 h-[50px] w-full overflow-hidden">
              <div className="absolute left-5 top-2 w-full">
                <div className="relative h-[110px] w-full rotate-[-30deg] bg-mission-gradient-50 shadow-[0_15px_10px_-10px_rgba(0,0,0,0.6)]" />
              </div>
              <span className="absolute bottom-0 right-0 object-contain p-2 text-3xl font-black text-brand-yellow">
                <span>{size}</span>
              </span>
            </div>
          )}
        </div>
      )}
      {title && (
        <h4 className="text-center text-xl font-bold text-brand-blue max-sm:text-lg lg:text-2xl">
          {title}
        </h4>
      )}
      {description && (
        <div className="text-center max-sm:text-sm">{description}</div>
      )}
      <div>
        <p className="text-center max-sm:text-sm">
          {`Annual Production Forecast: `}
          <span className="font-bold">{annualProd}</span>
        </p>
        <p className="text-center max-sm:text-sm">
          {`Estimated ROI: `}
          <span className="font-bold">{estimatedROI}</span>
        </p>
        {type === "Installation" && (
          <p className="mt-2 text-center font-bold uppercase text-brand-yellow max-sm:text-sm">
            Complete w/ Installation
          </p>
        )}
      </div>
      {type === "Installation" ? (
        <>
          {priceWithInstallation && (
            <span className="text-center text-xl font-bold text-brand-blue max-sm:text-base 2xl:text-2xl">
              {priceWithInstallation}
            </span>
          )}
          {buttonText && redirectLinkInstallation && (
            <CustomButton
              variant="primary"
              text={buttonText}
              onClick={() => router.push(redirectLinkInstallation)}
            />
          )}
        </>
      ) : (
        <>
          {priceDIY && (
            <span className="text-center text-xl font-bold text-brand-blue max-sm:text-base 2xl:text-2xl">
              {priceDIY}
            </span>
          )}
          {buttonText && redirectLinkDIY && (
            <CustomButton
              variant="primary"
              text={buttonText}
              onClick={() => router.push(redirectLinkDIY)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PackageCard;
