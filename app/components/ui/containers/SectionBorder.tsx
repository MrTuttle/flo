import React from "react";

type SectionBorderProps = {
  children?: React.ReactNode;
};

/**
 * container for PictureCard.tsx component
 * container with 1rem / 16px x padding, max width 1280px, centered
 * flex column on mobile, flex row on desktop
 * @returns children props wraped in a flex container
 * @example <SectionBorder>children</SectionBorder>
 */
export const SectionBorder = ({ children }: SectionBorderProps) => {
  return (
    <div className="px-4 xl:px-0 sm:max-w-7xl sm:mx-auto ">
      <div className="flex flex-col md:flex-row justify-between gap-4 flex-1 ">
        {children}
      </div>
    </div>
  );
};

export const SectionWide = ({ children }: SectionBorderProps) => {
  /**
    container fullwide overflow hidden, usefull for my tailwind carousel
    or to wrap something which add margin or padding and decay the mobile global page layout
    flex column on mobile, flex row on desktop
    @returns children props wraped in a flex container
   */
  return (
    <div className="relative w-[100%] overflow-hidden">
      {" "}
      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        {children}
      </div>
    </div>
  );
};
