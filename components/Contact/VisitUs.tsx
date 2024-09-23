import Image from "next/image";
import React from "react";
import { BrandWaze } from "tabler-icons-react";
import Map from "../Map";

const VisitUs = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 px-20 py-24 max-sm:px-8">
          <h2 className="title-bold-light text-center">
            <span className="text-brand-yellow">VISIT US</span> AT OUR LOCATION
          </h2>
          <p className="paragraph-base-light text-center">
            Find us on the map and stop by our office for any inquiries or
            consultations.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://waze.com/ul?ll=14.281802962787859,120.96894613958402&navigate=yes"
              target="_blank"
            >
              <BrandWaze
                size={40}
                fill="white"
                className="rounded-md bg-[#32CCFE]  p-1 text-slate-900"
              />
            </a>
            <a href="https://maps.app.goo.gl/JtYTGewAxeqeXrj36" target="_blank">
              <Image
                width={40}
                height={40}
                src={"/googlemap.png"}
                alt="google map"
                className="rounded-md border border-slate-200 p-1 text-white"
              />
            </a>
          </div>
          <div className="flex w-full flex-col items-center">
            <p className="paragraph-base-light text-center">
              Our Office/Warehouse Address:
            </p>
            <p className="paragraph-base-light text-center">
              Blk 13 Lot 1, Pili St., Greenfield Heights, Sampaloc II,
              Dasmarñas, Cavite
            </p>
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default VisitUs;
