import React from "react";
import Image from "next/image";
import flo from "@/public/avatar/Florent-Vincerot-avatar.jpg";
import WindowsSizeDetector from "../utlis/WindowsSizeDetector";
import { Video } from "../ui/Video";
import delay from "delay";

import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import Link from "next/link";
import FloShadow from "@/public/avatar/floShadow.png";

import { Skeleton } from "@/components/ui/skeleton";

type HeroUnderFrameVidProps = {
  // src: string;
  // alt: string;
  width?: string;
  height?: string;
};

const darkurl =
  "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1720106984/Square-stone_cvs9hu.mov"; // -> old dark vid
const lighturl =
  "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1720106966/Square-light_o5nb9y.mov"; // -> old light vid

const darkurl4 =
  "https://res.cloudinary.com/dc8rzbrbr/image/upload/v1733589907/Front-end-bg_oulzof.gif"; // -> replace .movs, one file for dark and light mode

const transparent2025 =
  "https://res.cloudinary.com/dc8rzbrbr/image/upload/v1749980829/Square-frond-2025-1_qeeozl.gif"; // -> replace haircut illustration, one file for dark and light

const HeroUnderFrameVid = () => {
  const darkmodeSrc = transparent2025;
  const lightmodeSrc = transparent2025;

  // put async in front of the function and uncoment the await delay(2000) to test the skeleton
  // await delay(2000);

  return (
    <>
      {/* <Skeleton className="w-[320px] h-[320px] rounded-full" /> */}
      <div className=" dark:hidden bg-grayflo flex items-center justify-center">
        <div>
          <Image
            src={darkmodeSrc}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        {/* <video
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
        </video> */}
      </div>
      <div className="hidden dark:flex dark:items-center dark:justify-center">
        <Image
          src={lightmodeSrc}
          width={500}
          height={500}
          alt="Picture of the author"
          // className="transition-all w-full sm:w-2/4 md:w-2/3"
          style={{ objectFit: "cover" }} // important to preserve ratio on mobile devices
        />
        {/* <video
          width="800"
          height="800"
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
        </video> */}
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
