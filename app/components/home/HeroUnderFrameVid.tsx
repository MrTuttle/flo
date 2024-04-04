import React from "react";
import Image from "next/image";
import flo from "@/public/avatar/Florent-Vincerot-avatar.jpg";
import WindowsSizeDetector from "../utlis/WindowsSizeDetector";
import { Video } from "../ui/Video";

const HeroUnderFrameVid = () => {
  return (
    <>
      <div className=" bg-grayflo">
        {/* <Image
          src={flo}
          alt="Portrait illustration de Florent Vincerot"
          sizes="100"
          className="transition-all sm:w-2/3 max-w-3xl xl:ml-[5%] 2xl:ml-[10%]"
          style={{ objectFit: "cover" }} // important to preserve ratio on mobile devices
        /> */}

        <video
          width="320"
          height="240"
          // controls
          autoPlay
          loop
          muted
          preload="auto" // none, metadata, auto
          playsInline
          className=" transition-all w-full sm:w-2/4 md:w-2/3 xl:ml-[5%] 2xl:ml-[20%]"
          style={{ objectFit: "cover" }} // important to preserve ratio on mobile devices
        >
          <source
            src={
              // "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/Square_eagevr.mp4"
              "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/Square_2_q7oi21.mp4"
            }
            type="video/mp4"
          />
          <track
          // src="/path/to/captions.vtt"
          // kind="subtitles"
          // srcLang="en"
          // label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" dark:text-darkflo text-white h-svh w-full absolute flex justify-center items-start sm:items-center sm:justify-end text-5xl md:text-6xl lg:text-7xl">
        <div className="leading-[1.15] mt-[4rem] sm:w-[20rem] md:w-[20rem] sm:mr-[5%] md:mr-[11%] lg:w-[25rem] lg:mr-[10%] xl:mr-[18%] 2xl:mr-[25%]">
          <h1 className="w-[18rem] sm:w-full">Développeur Front End</h1>
          <h1>Designer UX/UI</h1>
          <WindowsSizeDetector />
        </div>
      </div>
    </>
  );
};

export default HeroUnderFrameVid;
