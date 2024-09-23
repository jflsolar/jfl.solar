import Image from "next/image";
import React from "react";

interface Props {
  data: {
    imageUrl: string;
    name: string;
    position: string;
    description: string;
  };
}

const TeamMember = ({ data }: Props) => {
  const { imageUrl, name, position, description } = data;
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <Image
        height={150}
        width={150}
        alt="profile photo"
        src={imageUrl}
        className="rounded-full shadow-lg"
      />
      <div className="flex flex-col">
        <h4 className="text-2xl max-sm:text-xl">{name}</h4>
        <span className="text-base">{position}</span>
      </div>
      <div className="h-0.5 bg-brand-yellow w-[150px]" />
      <p className="text-sm max-w-[250px]">{description}</p>
    </div>
  );
};

export default TeamMember;
