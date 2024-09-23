import { JFLTeamMembers } from "@/constants/cardData";
import React from "react";
import TeamMember from "./TeamMember";

const CoreTeam = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl w-full py-40 max-sm:py-20 mx-auto flex flex-col items-center gap-32 max-sm:gap-16 max-lg:px-8">
        <h2 className="text-center title-bold-light">
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
