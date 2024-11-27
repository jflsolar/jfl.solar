import React from "react";
import { Icon } from "tabler-icons-react";

export interface LoadProfile {
  name: string;
  quantity: number;
  hoursPerDay: number;
  powerRating: number;
}

export type URLProps = {
  params?: { id?: string };
  searchParams?: { [key: string]: string | undefined };
};

export type DateFormat =
  | "MM/DD/YYYY"
  | "MM/DD/YY"
  | "MMM. DD, YYYY"
  | "MMMM DD, YYYY"
  | "MMM. YYYY"
  | "MMMM YYYY"
  | "MMM. DD"
  | "MMMM DD"
  | "YYYY-MM-DD";

export type TableDetailProps = {
  data: Record<
    string,
    { title: string; value: any; href?: string | null; valueClassName?: string }
  >;
  options?: {
    dateFormat: DateFormat;
  };
};

export type Package = {
  id?: string;
  title: string;
  size: string;
  description: React.ReactNode | string;
  inverter?: string;
  battery?: string;
  panel?: string;
  mounting?: string;
  safetyDevices?: string;
  cables?: string;
  accessories?: string;
  annualProd?: string;
  estimatedROI?: string;
  priceDIY: string;
  priceWithInstallation: string;
  discountedPriceDIY: string;
  discountedPriceWithInstallation: string;
  imageUrl: string;
  buttonText: string;
  redirectLinkDIY: string;
  redirectLinkInstallation: string;
  quoteLink?: string;
};

export type SidebarNavItem = {
  title: string;
  icon?: Icon;
  href?: string;
  items?: SidebarNavItem[];
};
