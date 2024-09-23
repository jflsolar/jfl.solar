"use client";

import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  return (
    <div className="section-container-reverse">
      <div className="section-image-container-reverse">
        <Image
          src={"/home-package-bg.png"}
          width={720}
          height={700}
          alt="cover"
          className="section-image"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="section-text-container-reverse">
          <h2 className="title-bold">
            Comprehensive{" "}
            <span className="text-brand-yellow">Solar Services</span>
          </h2>
          <p className="paragraph-base">
            At JFL Solar, we provide a full range of services to support every
            stage of your solar energy journey:
          </p>
          <ul className="paragraph-base">
            <li>✓ Solar PV System Installation</li>
            <li>✓ Solar PV System Designing</li>
            <li>✓ Solar Equipment Procurement</li>
            <li>✓ Solar PV System Maintenance</li>
            <li>✓ Project Management & Consultation</li>
            <li>✓ Troubleshooting & Technical Support</li>
            <li>✓ Exclusive Mentoring</li>
            <li>✓ Training & Seminars</li>
          </ul>
          <CustomButton
            text="View all services"
            className="btn"
            type="button"
            variant="primary"
            onClick={() => router.push("/services")}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
