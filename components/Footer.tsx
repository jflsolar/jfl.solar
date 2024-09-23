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
} from "tabler-icons-react";

const Footer = () => {
  return (
    <div className="bg-brand-blue px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 pb-3 pt-14">
        <div className="flex w-full flex-col-reverse items-center gap-8 max-sm:flex-col lg:flex-row">
          <div className="flex max-w-[280px] flex-col items-center gap-6 text-center">
            <Image
              src="/logo-light.png"
              width={200}
              height={60}
              alt="jfl logo"
            />
            <span className="text-lg font-thin italic text-slate-100/75 max-md:text-base">{`"Empowering the Philippines, one roof at a time."`}</span>
            <div className="flex items-center justify-center gap-2">
              <a href="https://www.facebook.com/jflsolar" target="_blank">
                <BrandFacebook
                  size={32}
                  fill="white"
                  stroke="none"
                  className="rounded-md bg-[#445974] p-1"
                />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <BrandInstagram
                  size={32}
                  fill="white"
                  stroke="#445974"
                  className="rounded-md bg-[#445974] p-1"
                />
              </a>
              <a href="https://www.youtube.com/@JFLegaspi" target="_blank">
                <BrandYoutube
                  size={32}
                  fill="white"
                  stroke="#445974"
                  className="rounded-md bg-[#445974] p-1"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-8 gap-y-12 text-slate-200/90 sm:flex-row md:gap-12 lg:gap-20">
            <div className="flex flex-col gap-6 max-sm:items-center max-sm:text-center">
              <h4 className="text-lg font-bold max-md:text-base">Links</h4>
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
            <div className="flex flex-col gap-6 max-sm:items-center max-sm:text-center">
              <h4 className="text-lg font-bold max-md:text-base">
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
            <div className="flex flex-col gap-6 max-sm:items-center">
              <h4 className="text-lg font-bold max-md:text-base">
                Contact/Visit Us
              </h4>
              <ul className="flex flex-col gap-3 max-md:text-sm">
                <li className="flex max-w-[300px] items-center gap-2">
                  <Phone
                    size={32}
                    fill="white"
                    stroke="#445974"
                    className="shrink-0 rounded-md bg-[#445974] p-1"
                  />
                  <span>09569352427</span>
                </li>
                <li className="flex max-w-[300px] items-center gap-2">
                  <Mail
                    size={32}
                    fill="white"
                    stroke="#445974"
                    className="shrink-0 rounded-md bg-[#445974] p-1"
                  />
                  <span>info@jflsolar.com</span>
                </li>
                <li className="flex max-w-[300px] items-center gap-2">
                  <Location
                    size={32}
                    fill="white"
                    stroke="#445974"
                    className="shrink-0 rounded-md bg-[#445974] p-1"
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
        <div className="flex items-center gap-2 text-slate-400 max-md:text-sm max-sm:flex-wrap max-sm:justify-center max-sm:text-xs">
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
