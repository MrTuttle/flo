import React from "react";
import Image from "next/image";
import flo from "@/public/avatar/Florent-Vincerot-avatar.jpg";
import WindowsSizeDetector from "../utlis/WindowsSizeDetector";
import { Video } from "../ui/Video";

import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import Link from "next/link";
import FloShadow from "@/public/avatar/floShadow.png";

type HeroUnderFrameVidProps = {
  // src: string;
  // alt: string;
  width?: string;
  height?: string;
};

const HeroUnderFrameVid = () => {
  const darkmodeSrc =
    "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1720106984/Square-stone_cvs9hu.mov";
  const lightmodeSrc =
    "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1720106966/Square-light_o5nb9y.mov";

  return (
    <>
      <div className=" dark:hidden bg-grayflo flex items-center justify-center">
        <video
          width="320"
          height="240"
          // controls
          autoPlay
          loop
          muted
          preload="auto" // none, metadata, auto
          playsInline
          className=" transition-all w-full sm:w-2/4 md:w-2/3"
          style={{ objectFit: "cover" }} // important to preserve ratio on mobile devices
        >
          <source src={lightmodeSrc} type="video/mp4" />
          <track
          // src="/path/to/captions.vtt"
          // kind="subtitles"
          // srcLang="en"
          // label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hidden dark:flex dark:items-center dark:justify-center">
        <video
          width="320"
          height="240"
          // controls
          autoPlay
          loop
          muted
          preload="auto" // none, metadata, auto
          playsInline
          className="transition-all w-full sm:w-2/4 md:w-2/3"
          style={{ objectFit: "cover" }} // important to preserve ratio on mobile devices
        >
          <source src={darkmodeSrc} type="video/mp4" />
          <track
          // src="/path/to/captions.vtt"
          // kind="subtitles"
          // srcLang="en"
          // label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div className=" dark:text-darkflo text-white h-svh w-full absolute flex justify-center items-start sm:items-center sm:justify-end text-5xl md:text-6xl lg:text-7xl">
        <div className="leading-[1.15] mt-[4rem] sm:w-[20rem] md:w-[20rem] sm:mr-[5%] md:mr-[11%] lg:w-[25rem] lg:mr-[10%] xl:mr-[18%] 2xl:mr-[25%]">
          <h1 className="w-[18rem] sm:w-full">Développeur Front End</h1>
          <h1>Designer UX/UI</h1>
          <WindowsSizeDetector />
          <div className="border text-2xl text-darkflo font-mono">
            <div className="flex gap-2 *:w-9 *:h-9 *:border *:flex *:justify-center *:items-center ">
              <Link href="https://github.com/MrTuttle">
                <div className="">
                  <SiGithub />
                </div>
              </Link>
              <div>
                <SiLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HeroUnderFrameVid;
