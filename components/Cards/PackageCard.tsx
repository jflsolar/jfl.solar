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
    <div className="flex flex-col items-center max-w-[320px] p-4 gap-4">
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
        <h4 className="text-brand-blue text-xl max-sm:text-lg lg:text-2xl font-bold">
          {title}
        </h4>
      )}
      {description && (
        <p className="text-center max-sm:text-sm">{description}</p>
      )}
      {price && (
        <span className="text-center font-bold text-brand-blue max-sm:text-base text-lg 2xl:text-xl">
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
