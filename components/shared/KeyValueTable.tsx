// KeyValueTable.tsx
import React from "react";
import KeyValuePair from "./KeyValuePair";
import { TableDetailProps } from "@/types";
import { formatDate } from "@/lib/utils";

interface KeyValueTableProps {
  input: TableDetailProps;
  className?: string;
  titleWidth?: number;
  keyClassName?: string;
  valueClassName?: string;
}

const KeyValueTable: React.FC<KeyValueTableProps> = ({
  input,
  className,
  keyClassName,
  titleWidth,
  valueClassName,
}) => {
  const { data, options } = input;
  return (
    <div className={`flex flex-col  ${className}`}>
      {Object.entries(data).map(
        ([
          key,
          { title, value, href, valueClassName: specficValueClassName },
        ]) => {
          let formattedValue = value;
          if (value instanceof Date) {
            // Apply date format if options are provided and value is a date
            formattedValue = formatDate(
              value,
              options?.dateFormat || "MM/DD/YYYY"
            );
          }
          return (
            <KeyValuePair
              key={key}
              title={title}
              value={formattedValue}
              href={href}
              titleWidth={titleWidth}
              keyClassName={keyClassName}
              valueClass={`${valueClassName} ${specficValueClassName}`}
            />
          );
        }
      )}
    </div>
  );
};

export default KeyValueTable;
