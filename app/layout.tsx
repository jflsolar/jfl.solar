import type { Metadata } from "next";
// import { Inter } from "next/font/google";

import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JFL Solar",
  description: "PV System Solutions for Residential, Industrial & Commercial",
  openGraph: {
    title: 'PV System Solutions for Residential, Industrial & Commercial',
    description: 'Inquire now!',
    images: ['/bg1.jpg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
