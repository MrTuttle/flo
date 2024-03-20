import React from "react";
import Image from "next/image";
import flo from "@/public/avatar/Florent-Vincerot-avatar.jpg";

const HeroUnderFrame = () => {
  return (
    <>
      <div className="flex gap-4 text-white">
        <Image
          src={flo}
          alt="Portrait illustration de Florent Vincerot"
          sizes="500"
          className="transition-all sm:w-2/3"
          style={{ objectFit: "cover" }} // important to preserve ratio on mobile devices
        />
      </div>
      <div className="h-svh border absolute flex justify-end text-4xl sm:text-5xl md:text-7xl px-10">
        <div className="border w-2/3 h-1/3">
          <h1>Développeur Front End</h1>
          <h1>Designer UX/UI</h1>
        </div>
      </div>
    </>
  );
};

export default HeroUnderFrame;
