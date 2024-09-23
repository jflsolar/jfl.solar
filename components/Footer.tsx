import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BrandFacebook,
  BrandInstagram,
  BrandYoutube,
  Location,
  Mail,
  Phone,
  Pin,
} from "tabler-icons-react";

const Footer = () => {
  return (
    <div className="bg-brand-blue px-8">
      <div className="max-w-7xl mx-auto pt-14 pb-3 flex flex-col items-center w-full gap-12">
        <div className="flex lg:flex-row flex-col-reverse max-sm:flex-col items-center gap-8 w-full">
          <div className="max-w-[280px] flex flex-col items-center gap-6 text-center">
            <Image
              src="/logo-light.png"
              width={200}
              height={60}
              alt="jfl logo"
            />
            <span className="italic text-lg max-md:text-base font-thin text-slate-100/75">{`"Empowering the Philippines, one roof at a time."`}</span>
            <div className="flex items-center justify-center gap-2">
              <a href="https://www.facebook.com/jflsolar" target="_blank">
                <BrandFacebook
                  size={32}
                  fill="white"
                  stroke="none"
                  className="bg-[#445974] p-1 rounded-md"
                />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <BrandInstagram
                  size={32}
                  fill="white"
                  stroke="#445974"
                  className="bg-[#445974] p-1 rounded-md"
                />
              </a>
              <a href="https://www.youtube.com/@JFLegaspi" target="_blank">
                <BrandYoutube
                  size={32}
                  fill="white"
                  stroke="#445974"
                  className="bg-[#445974] p-1 rounded-md"
                />
              </a>
            </div>
          </div>
          <div className="flex-1 flex sm:flex-row flex-col gap-8 md:gap-12 gap-y-12 lg:gap-20 justify-end text-slate-200/90">
            <div className="flex gap-6 flex-col max-sm:items-center max-sm:text-center">
              <h4 className="font-bold text-lg max-md:text-base">Links</h4>
              <ul className="flex flex-col gap-3 max-md:text-sm">
                <li>
                  <Link href={"/packages"}>Our Packages</Link>
                </li>
                <li>
                  <Link href={"/services"}>Our Services</Link>
                </li>
                <li>
                  <Link href={"/about"}>About Us</Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-6 flex-col max-sm:items-center max-sm:text-center">
              <h4 className="font-bold text-lg max-md:text-base">
                PV Packages
              </h4>
              <ul className="flex flex-col gap-3 max-md:text-sm">
                <li>
                  <Link href={"/packages"}>Hybrid On/Off Grid</Link>
                </li>
                <li>
                  <Link href={"/services"}>Grid-tied / On-grid</Link>
                </li>
                <li>
                  <Link href={"/about"}>Residential PV Systems</Link>
                </li>
                <li>
                  <Link href={"/about"}>
                    Commercial & Industrial PV Systems
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-6 flex-col max-sm:items-center">
              <h4 className="font-bold text-lg max-md:text-base">
                Contact/Visit Us
              </h4>
              <ul className="flex flex-col gap-3 max-md:text-sm">
                <li className="flex items-center gap-2 max-w-[300px]">
                  <Phone
                    size={32}
                    fill="white"
                    stroke="#445974"
                    className="bg-[#445974] p-1 rounded-md shrink-0"
                  />
                  <span>09569352427</span>
                </li>
                <li className="flex items-center gap-2 max-w-[300px]">
                  <Mail
                    size={32}
                    fill="white"
                    stroke="#445974"
                    className="bg-[#445974] p-1 rounded-md shrink-0"
                  />
                  <span>info@jflsolar.com</span>
                </li>
                <li className="flex items-center gap-2 max-w-[300px]">
                  <Location
                    size={32}
                    fill="white"
                    stroke="#445974"
                    className="bg-[#445974] p-1 rounded-md shrink-0"
                  />
                  <span className="leading-none">
                    Blk 13 Lot 1, Pili St., Greenfield Heights, Sampaloc II,
                    Dasmarñas, Cavite
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 max-md:text-sm max-sm:text-xs max-sm:flex-wrap max-sm:justify-center text-slate-400">
          <span>Copyright @2024</span>
          <span>|</span>
          <span>JFL Solar</span>
          <span>|</span>
          <span>Terms and Conditions</span>
          <span>|</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
