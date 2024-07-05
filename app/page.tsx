import LoadingDots from "@/components/LoadingDots";
import Image from "next/image";
import Link from "next/link";
import { BrandFacebook, Mail, Phone } from "tabler-icons-react";

export default function Home() {

  return (
  <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-sm:px-0 px-10 bg-white bg-top bg-cover"
      style={{backgroundImage: `url('/bg.png')`}}
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <Image src='/logo.png' width={100} height={100} alt="jfl logo" className="max-sm:w-16"/>
        <h1 className="sm:text-5xl text-4xl md:text-6xl lg:text-7xl font-semibold drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">PV System Solutions</h1>
        <p className="sm:text-2xl text-xl md:text-3xl lg:text-4xl tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.55)]">For Residential, Industrial & Commercial</p>
      </div>
      <h4 className="md:text-2xl sm:text-xl text-lg lg:text-3xl md:min-w-[250px] font-bold max-sm:min-w-[170px] min-w-[200px] lg:min-w-[300px]">Site Launching Soon<LoadingDots interval={1000}/></h4>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <div className="flex items-center gap-1 hover:underline">
          <BrandFacebook/>
          <Link href="https://www.facebook.com/jflsolar">JFL Solar</Link>
        </div>
        <div className="flex items-center gap-1">
          <Phone/> 
          <span>+63 906 595 8757</span>
        </div>
        <div className="flex items-center gap-1">
          <Mail/>
          <span>jflegaspisolar@gmail.com</span>
        </div>  
          
      </div>
    </main>
    </>
  );
}
