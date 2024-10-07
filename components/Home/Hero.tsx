import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className="relative flex h-screen flex-col items-center justify-between bg-white px-10 max-sm:px-0  ">
      <Image
        src={"/bg.png"}
        layout="fill"
        objectFit="cover"
        alt="hero"
        priority
      />
      <div className="calibri flex min-h-[90vh] flex-col items-center justify-center gap-1 text-center font-bold text-slate-50">
        <h1 className="text-4xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl lg:text-7xl">
          PV System Solutions
        </h1>
        <h2 className="text-xl tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.55)] sm:text-2xl md:text-3xl lg:text-4xl">
          For Residential, Industrial & Commercial
        </h2>
      </div>
    </main>
  );
};

export default Hero;
