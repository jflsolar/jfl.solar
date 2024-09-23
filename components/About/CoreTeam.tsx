import { JFLTeamMembers } from "@/constants/cardData";
import React from "react";
import TeamMember from "./TeamMember";

const CoreTeam = () => {
  return (
    <div className="w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-32 py-40 max-lg:px-8 max-sm:gap-16 max-sm:py-20">
        <h2 className="title-bold-light text-center">
          CORE <span className="text-brand-yellow">TEAM</span>
        </h2>
        <div className="flex flex-wrap justify-evenly gap-24 max-sm:gap-16">
          {JFLTeamMembers.map((member, index) => {
            return <TeamMember key={`team-${index}`} data={member} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
