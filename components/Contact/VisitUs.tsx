import Image from "next/image";
import React from "react";
import { BrandWaze } from "tabler-icons-react";
import Map from "../Map";

const VisitUs = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8 py-24 px-20 max-sm:px-8">
          <h2 className="title-bold-light text-center">
            <span className="text-brand-yellow">VISIT US</span> AT OUR LOCATION
          </h2>
          <p className="paragraph-base-light text-center">
            Find us on the map and stop by our office for any inquiries or
            consultations.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://waze.com/ul?ll=14.281802962787859,120.96894613958402&navigate=yes"
              target="_blank"
            >
              <BrandWaze
                size={40}
                fill="white"
                className="bg-[#32CCFE] text-slate-900  p-1 rounded-md"
              />
            </a>
            <a href="https://maps.app.goo.gl/JtYTGewAxeqeXrj36" target="_blank">
              <Image
                width={40}
                height={40}
                src={"/googlemap.png"}
                alt="google map"
                className="border border-slate-200 text-white p-1 rounded-md"
              />
            </a>
          </div>
          <div className="items-center flex w-full flex-col">
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
