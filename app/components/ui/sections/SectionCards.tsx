import React from "react";
import { IconCard } from "@/app/components/ui/cards/IconCard";

type Props = {
  children: React.ReactNode;
  id?: string;
};

const SectionCards = ({ children, id }: Props) => {
  return (
    <div className=" mt-8 2xl:mt-14 first:mt-0" id={id}>
      <ul className="flex flex-wrap gap-y-4 2xl:gap-y-6 -mx-2 2xl:-mx-3">
        {children}
      </ul>
    </div>
  );
};

export default SectionCards;
