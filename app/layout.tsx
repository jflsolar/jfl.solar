import type { Metadata } from "next";
// import { Inter } from "next/font/google";

import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
import Script from "next/script";

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
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "oeq5l3ycv0");
            `,
          }}
        />
        <Script
          id="google-analytics"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QPZY92ZYYR"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QPZY92ZYYR');
            `,
          }}
        />
      </body>
    </html>
  );
}
