import Brand from "@/components/Home/Brand";
import Hero from "@/components/Home/Hero";
import HomeCTA from "@/components/Home/HomeCTA";
import Packages from "@/components/Home/Packages";
// import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          JFL Solar - Reliable Solar PV Solutions in the Philippines
        </title>
        <meta
          name="description"
          content="Tailored Solar PV packages for efficiency, reliability, and savings. JFL Solar serves residential, commercial, and industrial projects."
        />
        <meta
          name="keywords"
          content="Solar PV, Solar Energy, Solar Panels, Inverters, Batteries, Renewable Energy, JFL Solar, Solar Philippines, Solar DIY Installers"
        />
      </Head>
      <Hero />
      <Brand />
      <Packages />
      {/* <Services/> */}
      <WhyChooseUs />
      <HomeCTA />
    </>
  );
}
