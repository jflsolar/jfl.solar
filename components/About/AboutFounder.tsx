import Image from "next/image";
import React from "react";

const AboutFounder = () => {
  return (
    <div className="section-container-reverse">
      <div className="section-image-container-reverse">
        <Image
          src={"/about-founder.png"}
          width={720}
          height={700}
          alt="cover"
          className="section-image"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="section-text-container-reverse">
          <h2 className="title-bold">
            MEET THE <span className="text-brand-yellow">FOUNDER</span>
          </h2>
          <p className="paragraph-base">
            JF Legaspi founded JFL Solar in June 2024. With extensive experience
            as the CTO of a European Solar B2B company, he brings a wealth of
            knowledge to the Philippine market.
          </p>
          <p className="paragraph-base">
            His goal is to share his expertise in solar PV systems, helping to
            drive the adoption of clean energy across the country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
