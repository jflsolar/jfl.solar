import LoadingDots from "@/components/LoadingDots";
import Link from "next/link";
import { BrandFacebook, Mail, Phone } from "tabler-icons-react";

export default function Home() {

  return (
  <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white bg-top bg-cover"
      style={{backgroundImage: `url('/bg.jpg')`}}
    >
      <h1 className="text-3xl font-bold min-w-[330px]">Site Launching Soon<LoadingDots interval={1000}/></h1>
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
