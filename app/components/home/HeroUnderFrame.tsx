import React from "react";
import Image from "next/image";
import flo from "@/public/avatar/Florent-Vincerot-avatar.jpg";

const HeroUnderFrame = () => {
  return (
    <>
      <div className="flex gap-4 bg-bluflo">
        <Image
          src={flo}
          alt="Portrait illustration de Florent Vincerot"
          sizes="100"
          className="transition-all sm:w-2/3 max-w-3xl xl:ml-[5%] 2xl:ml-[10%]"
          style={{ objectFit: "cover" }} // important to preserve ratio on mobile devices
        />
      </div>
      <div className=" dark:text-darkflo text-white h-svh w-full absolute flex justify-center sm:justify-end text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <div className="leading-[1.15] w-[18rem] mt-[7.1rem] sm:w-[20rem] sm:mt-[20.1rem] md:w-[20rem] md:mt-[15.1rem] sm:mr-[5%] md:mr-[15%] lg:w-[25rem] lg:mr-[10%] xl:mr-[18%]">
          <h1>Développeur Front End</h1>
          <h1>Designer UX/UI</h1>
        </div>
      </div>
    </>
  );
};

export default HeroUnderFrame;
