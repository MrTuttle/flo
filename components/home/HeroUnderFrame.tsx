import React from "react";
import Image from "next/image";
import flo from "@/public/avatar/Florent-Vincerot-avatar.jpg";

const HeroUnderFrame = () => {
  return (
    <>
      <div className="flex gap-4 bg-bluflo text-white">
        <Image
          src={flo}
          alt="Portrait illustration de Florent Vincerot"
          sizes="500"
          className="transition-all sm:w-2/3"
          style={{ objectFit: "cover" }} // important to preserve ratio on mobile devices
        />
      </div>
      <div className="h-svh w-full absolute flex justify-center sm:justify-end text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-10 text-white">
        <div className="w-[16rem] mt-[15rem] sm:w-[20rem] sm:mt-[20rem] md:w-[24rem] md:mt-[15rem] h-1/3 lg:w-[30rem] xl:w-[40rem]">
          <h1>Développeur Front End</h1>
          <h1>Designer UX/UI</h1>
        </div>
      </div>
    </>
  );
};

export default HeroUnderFrame;
