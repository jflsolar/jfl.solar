import Link from "next/link";
import React from "react";

interface KeyValuePairProps {
  title: string;
  href?: string | null;
  value: string | React.ReactNode; // You can use React.ReactNode for flexibility
  titleWidth?: number; // You can use React.ReactNode for flexibility
  keyClassName?: string;
  valueClass?: string;
}

const KeyValuePair: React.FC<KeyValuePairProps> = ({
  title,
  href,
  value,
  titleWidth,
  keyClassName,
  valueClass,
}) => {
  console.log("titleWidth", titleWidth);
  return (
    <div className="mb-2 flex flex-row max-sm:flex-col">
      <span
        className={`shrink-0 ${keyClassName} max-sm:max-w-fit`}
        style={{ width: titleWidth || 180 }}
      >
        {title}:
      </span>
      {href ? (
        <Link
          href={href}
          target="_blank"
          className={` line-clamp-1 w-full  max-w-full truncate text-blue-400 ${valueClass}`}
        >
          {value}
        </Link>
      ) : (
        <p
          className={` w-full max-sm:min-w-full max-sm:max-w-fit ${valueClass}`}
        >
          {value}
        </p>
      )}
    </div>
  );
};

export default KeyValuePair;
