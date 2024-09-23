"use client";

import Image from "next/image";
import React from "react";

interface Props {
  data: {
    imageUrl?: string;
    title?: string;
    description?: string;
  };
}
const ServiceCard = ({ data }: Props) => {
  const { imageUrl, title, description } = data;
  return (
    <div className="flex min-w-[320px] max-w-[400px] flex-col items-center gap-4 rounded-xl border border-black/5 p-4 text-center shadow-lg">
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
        <p className="text-center text-brand-blue max-sm:text-sm">
          {description}
        </p>
      )}
    </div>
  );
};

export default ServiceCard;
