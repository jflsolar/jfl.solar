import type { Metadata } from "next";
// import { Inter } from "next/font/google";

import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

export const metadata: Metadata = {
  title: "JFL Solar",
  description: "PV System Solutions for Residential, Industrial & Commercial",
  openGraph: {
    title: "PV System Solutions for Residential, Industrial & Commercial",
    description: "Inquire now!",
    images: ["/bg-1.jpg"],
  },
};

// Import Inter font
const inter = Inter({
  subsets: ["latin"], // Optional: use subsets based on your need
  weight: ["400", "700"], // Optional: choose weights you want
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Optional: choose weights you want
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`relative ${inter.className}`}>
          <Navbar />
          {children}
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
