import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import React from "react";
import Head from "next/head";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Link from "next/link";
import { PRICE_INCREASE } from "@/constants/constant";
import MarketingBanner from "@/components/shared/MarketingBanner";

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
                telephone: "+63 976 135 9479",
                contactType: "Customer Service",
              },
              sameAs: ["https://www.facebook.com/jflsolar"],
            }),
          }}
        />
      </Head>
      {/* <MarketingBanner
        name="promo-banner"
        variant="custom"
        customClassName="bg-[#c0392b] text-white"
        description={
          <div className="flex flex-wrap items-center justify-center gap-1 whitespace-nowrap text-pretty text-center text-sm font-medium max-sm:text-xs lg:text-base">
            <span className="font-bold ">HOLIDAY SALE</span> is back until{" "}
            <span>
              {dayjs(PRICE_INCREASE).tz("Asia/Manila").format("MMM DD, YYYY")}
            </span>
            <span className="flex font-bold text-brand-blue">
              <CountdownTimer
                targetDate={dayjs(PRICE_INCREASE)
                  .tz("Asia/Manila")
                  .endOf("day")
                  .toDate()}
              />
              !
            </span>
            Get up to
            <span className="font-bold uppercase">₱50,000 discount</span>
            on our packages
            <Link
              href="/packages"
              className="font-bold uppercase text-[#f1c40f] underline"
            >
              here!
            </Link>{" "}
            <span className="animate-bounce-left">👈</span>
          </div>
        }
      /> */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
