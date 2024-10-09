"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/lib/utils";

interface Props {
  data: {
    imageUrl?: string;
    title?: string;
    brandUrl?: string;
    description?: string;
    srp?: string;
    installer?: string;
    buttonText?: string;
    size?: string;
    redirectLink?: string;
  };
}
const ProductCard = ({ data }: Props) => {
  const router = useRouter();
  const {
    imageUrl,
    title,
    brandUrl,
    description,
    srp,
    installer,
    size,
    buttonText,
    redirectLink,
  } = data;
  return (
    <div className="flex w-full max-w-[320px] flex-col items-center gap-4 p-4">
      {imageUrl && (
        <div className="relative min-h-[250px] w-full">
          <Image
            src={imageUrl}
            height={250}
            width={195}
            alt={title || "package photo"}
            className="mx-auto min-h-[250px] object-contain drop-shadow-xl"
          />
          {brandUrl && (
            <div className="absolute left-0 top-0 size-full overflow-hidden">
              <div className="absolute -left-5 -top-5 w-full ">
                <div className="relative h-[50px] w-full rotate-[-30deg] bg-vision-gradient-50  shadow-[0_10px_10px_-12px_rgba(0,0,0,0.25)]" />
              </div>
              <Image
                src={brandUrl}
                width={100}
                height={100}
                alt="brand logo"
                className="relative flex min-h-[50px] object-contain"
              />
            </div>
          )}
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
        <div className="flex flex-col items-center">
          <h4 className="text-center text-xl font-bold text-brand-blue max-sm:text-lg lg:text-2xl">
            {title}
          </h4>
        </div>
      )}
      {description && (
        <p className="text-center max-sm:text-sm">{description}</p>
      )}
      {srp && (
        <div className="flex flex-col text-center">
          <span className="text-center text-base font-bold text-brand-blue max-sm:text-base 2xl:text-lg">
            {`SRP: ${formatCurrency(srp)}`}
          </span>
          {installer && (
            <span className="text-center text-sm  text-brand-blue max-sm:text-base 2xl:text-base">
              {`Installer Price: ${formatCurrency(installer)}`}
            </span>
          )}
        </div>
      )}
      {buttonText && redirectLink && (
        <CustomButton
          variant="primary"
          text={buttonText}
          onClick={() => router.push(redirectLink)}
        />
      )}
    </div>
  );
};

export default ProductCard;
