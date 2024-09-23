"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";

interface Props {
  data: {
    imageUrl?: string;
    title?: string;
    description?: string;
    price?: string;
    buttonText?: string;
    redirectLink?: string;
  };
}
const PackageCard = ({ data }: Props) => {
  const router = useRouter();
  const { imageUrl, title, description, price, buttonText, redirectLink } =
    data;
  return (
    <div className="flex max-w-[320px] flex-col items-center gap-4 p-4">
      {imageUrl && (
        <Image
          src={imageUrl}
          height={160}
          width={195}
          alt={title || "package photo"}
          className="object-contain"
        />
      )}
      {title && (
        <h4 className="text-xl font-bold text-brand-blue max-sm:text-lg lg:text-2xl">
          {title}
        </h4>
      )}
      {description && (
        <p className="text-center max-sm:text-sm">{description}</p>
      )}
      {price && (
        <span className="text-center text-lg font-bold text-brand-blue max-sm:text-base 2xl:text-xl">
          {price}
        </span>
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

export default PackageCard;
