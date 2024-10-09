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
  return (
    <div className="mb-2 flex flex-row max-sm:flex-col">
      <span
        className={`paragraph-semibold text-dark400_light800 shrink-0 ${keyClassName}`}
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
        <p className={` text-dark300_light700 w-full ${valueClass}`}>{value}</p>
      )}
    </div>
  );
};

export default KeyValuePair;
