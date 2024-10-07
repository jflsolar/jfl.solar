import React from "react";
import { Icon } from "tabler-icons-react";

interface Props {
  data: {
    icon?: Icon;
    title?: string;
    description?: string;
  };
}
const FeatureCard = ({ data }: Props) => {
  const { icon: IconComponent, title, description } = data;
  return (
    <div className="flex min-w-[320px] max-w-[320px] flex-col items-center gap-4 p-4 text-center max-sm:min-w-full max-sm:max-w-full max-[350px]:p-2 lg:max-w-[400px]">
      {IconComponent && (
        <IconComponent
          size={60}
          strokeWidth={1}
          className="rounded-sm bg-[#FFF7F4] object-contain p-2 text-brand-yellow"
        />
      )}
      {title && (
        <h4 className="text-xl font-bold text-brand-blue max-sm:text-base md:text-2xl">
          {title}
        </h4>
      )}
      {description && (
        <p className="text-center text-brand-blue max-sm:text-sm">
          {description}
        </p>
      )}
    </div>
  );
};

export default FeatureCard;
