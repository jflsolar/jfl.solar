import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import React from "react";
import Head from "next/head";
// import MarketingBanner from "@/components/shared/MarketingBanner";
// import CountdownTimer from "@/components/shared/CountdownTimer";
// import { PRICE_INCREASE } from "@/constants/constant";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
// import Link from "next/link";

dayjs.extend(utc);
dayjs.extend(timezone);
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
      {/* <MarketingBanner
        name="promo-banner"
        variant="warning"
        description={
          <div className="flex flex-wrap items-center justify-center gap-1 whitespace-nowrap text-center text-sm font-medium text-brand-blue max-sm:text-xs lg:text-base">
            Limited offer ends in
            <span className="flex font-bold text-brand-blue">
              <CountdownTimer
                targetDate={dayjs(PRICE_INCREASE)
                  .tz("Asia/Manila")
                  .endOf("day")
                  .toDate()}
              />
              !
            </span>
            Get
            <span className="font-bold text-brand-blue">₱50,000 discount</span>
            on our packages
            <Link
              href="/packages"
              className="font-bold text-brand-blue underline"
            >
              here
            </Link>{" "}
          </div>
        }
      /> */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
