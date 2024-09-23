"use client";

import {
  CONTACT_NUMBER,
  EMAIL_ADDRESS,
  OFFICE_ADDRESS,
} from "@/constants/constant";
import Image from "next/image";
import React, { useState } from "react";
import {
  BrandFacebook,
  BrandInstagram,
  BrandYoutube,
  Check,
  Copy,
  Location,
  Mail,
  Phone,
} from "tabler-icons-react";

interface IconState {
  phone: boolean;
  mail: boolean;
  location: boolean;
}

const ContactUs = () => {
  const [copied, setCopied] = useState<IconState>({
    phone: false,
    mail: false,
    location: false,
  });
  const [hovered, setHovered] = useState<IconState>({
    phone: false,
    mail: false,
    location: false,
  });

  const copyToClipboard = (text: string, type: keyof IconState) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied((prev) => ({ ...prev, [type]: true }));
        setTimeout(
          () => setCopied((prev) => ({ ...prev, [type]: false })),
          1000
        ); // Reset to original icon after 1 second
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  // Handle hover state
  const handleMouseEnter = (type: keyof IconState) => {
    setHovered((prev) => ({ ...prev, [type]: true }));
  };

  const handleMouseLeave = (type: keyof IconState) => {
    setHovered((prev) => ({ ...prev, [type]: false }));
  };

  return (
    <div className="section-container">
      <div className="section-image-container">
        <Image
          src={"/about-jfl.png"}
          width={720}
          height={700}
          alt="cover"
          className="section-image"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="section-text-container ml-auto">
          <h2 className="title-bold-light">
            GET IN <span className="text-brand-yellow">TOUCH</span>
          </h2>
          <ul className="flex flex-col gap-3">
            {/* Phone */}
            <li className="flex items-center gap-2">
              <div
                className={`p-1 size-10 flex items-center justify-center rounded-md shrink-0 cursor-pointer ${copied.phone ? "bg-[#1abc9c]" : hovered.phone ? "bg-[#576e8d]" : "bg-[#445974]"}`}
                onClick={() => copyToClipboard(CONTACT_NUMBER, "phone")}
                onMouseEnter={() => handleMouseEnter("phone")}
                onMouseLeave={() => handleMouseLeave("phone")}
              >
                {copied.phone ? (
                  <Check size={20} stroke="white" />
                ) : hovered.phone ? (
                  <Copy size={20} stroke="white" />
                ) : (
                  <Phone size={32} fill="white" stroke="#445974" />
                )}
              </div>
              <span>{CONTACT_NUMBER}</span>
            </li>
            {/* Mail */}
            <li className="flex items-center gap-2">
              <div
                className={`p-1 size-10 flex items-center justify-center rounded-md shrink-0 cursor-pointer ${copied.mail ? "bg-[#1abc9c]" : hovered.mail ? "bg-[#576e8d]" : "bg-[#445974]"}`}
                onClick={() => copyToClipboard(EMAIL_ADDRESS, "mail")}
                onMouseEnter={() => handleMouseEnter("mail")}
                onMouseLeave={() => handleMouseLeave("mail")}
              >
                {copied.mail ? (
                  <Check size={20} stroke="white" />
                ) : hovered.mail ? (
                  <Copy size={20} stroke="white" />
                ) : (
                  <Mail size={32} fill="white" stroke="#445974" />
                )}
              </div>
              <span>{EMAIL_ADDRESS}</span>
            </li>
            {/* Location */}

            <li className="flex items-center gap-2">
              <div
                className={`p-1 size-10 flex items-center justify-center rounded-md shrink-0 cursor-pointer ${copied.location ? "bg-[#1abc9c]" : hovered.location ? "bg-[#576e8d]" : "bg-[#445974]"}`}
                onClick={() => copyToClipboard(OFFICE_ADDRESS, "location")}
                onMouseEnter={() => handleMouseEnter("location")}
                onMouseLeave={() => handleMouseLeave("location")}
              >
                {copied.location ? (
                  <Check size={20} stroke="white" />
                ) : hovered.location ? (
                  <Copy size={20} stroke="white" />
                ) : (
                  <Location size={32} fill="white" stroke="#445974" />
                )}
              </div>
              <span>{OFFICE_ADDRESS}</span>
            </li>
          </ul>
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-brand-blue">OUR SOCIALS</h4>
            <div className="flex gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
