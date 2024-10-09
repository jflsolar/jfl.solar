import { DateFormat } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (value: string | number): string => {
  // Parse the input value to a number
  const numericValue =
    typeof value === "number"
      ? value
      : parseFloat(value.replace(/[^0-9.-]/g, ""));

  // Check if the parsed value is a valid number
  if (!isNaN(numericValue)) {
    // Format the number as currency
    return numericValue.toLocaleString("en-US", {
      style: "currency",
      currency: "PHP",
    });
  }
  // If the input is not a valid number, return the original value
  return value.toString();
};

export const formatDate = (date: Date | string, format: DateFormat): string => {
  try {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    switch (format) {
      case "MM/DD/YYYY":
        return dateObj.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
          timeZone: "Asia/Manila",
        });

      case "MM/DD/YY":
        return dateObj.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "2-digit",
          timeZone: "Asia/Manila",
        });
      case "MMM. DD, YYYY":
        return dateObj.toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
          timeZone: "Asia/Manila",
        });

      case "MMMM DD, YYYY":
        return dateObj.toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
          timeZone: "Asia/Manila",
        });

      case "MMM. YYYY":
        return dateObj.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
          timeZone: "Asia/Manila",
        });

      case "MMMM YYYY":
        return dateObj.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
          timeZone: "Asia/Manila",
        });

      case "MMM. DD":
        return dateObj.toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          timeZone: "Asia/Manila",
        });

      case "MMMM DD":
        return dateObj.toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          timeZone: "Asia/Manila",
        });

      case "YYYY-MM-DD":
        return dateObj.toISOString().split("T")[0];

      default:
        return ""; // Invalid format
    }
  } catch (error) {
    return date?.toString();
  }
};
