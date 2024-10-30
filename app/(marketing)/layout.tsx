import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import React from "react";
import Head from "next/head";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JFL Solar",
              url: "https://www.jflsolar.com",
              logo: "https://www.jflsolar.com/logo-circle.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+63 956 935 2427",
                contactType: "Customer Service",
              },
              sameAs: ["https://www.facebook.com/jflsolar"],
            }),
          }}
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
