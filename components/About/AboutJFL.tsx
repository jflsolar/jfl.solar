import Image from "next/image";
import React from "react";

const AboutJFL = () => {
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
            WHO IS <span className="text-brand-yellow">JFL SOLAR</span>?
          </h2>
          <p className="paragraph-base-light">
            JFL Solar is a new, dynamic company founded in June 2024.
          </p>
          <p className="paragraph-base-light">
            Our focus is on bringing top-quality solar PV equipment and services
            to the Philippines. We aim to empower homes and businesses by
            providing reliable and efficient solar energy solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutJFL;
