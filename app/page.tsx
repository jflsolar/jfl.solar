import Brand from "@/components/Home/Brand";
import Hero from "@/components/Home/Hero";
import HomeCTA from "@/components/Home/HomeCTA";
import Packages from "@/components/Home/Packages";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {

  return (
  <>
    <Hero/>
    <Brand/>
    <Packages/>
    <Services/>
    <WhyChooseUs/>
    <HomeCTA/>
  </>
  );
}
