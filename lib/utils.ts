import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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

