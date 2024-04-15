import React from "react";
import HeroUnderFrame from "../home/HeroUnderFrame";
import HeroCurtainContent from "../home/HeroCurtainContent";
import TitleCut from "./TitleCut";
import WindowsSizeDetector from "../utlis/WindowsSizeDetector";
import WindowsSizeDetectorFixed from "../utlis/WindowsSizeDetectorFixed";
import HeroUnderFrameVid from "../home/HeroUnderFrameVid";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import Link from "next/link";

const Curtain = () => {
  return (
    <>
      <div
        // global container to define global behavior
        style={{
          height: "250vh", // 200vh height to allow internal scroll, increase it for a longer scroll time
          position: "relative", // to allow sticky for first child
          overflow: "clip", // forced default value
        }}
        className="bg-darkflo" // prevent white space on IOS due to vh when adress bar goes back
      >
        <div
          // FIRST CONTAINER, height is defined by its childs
          id="stayInPlaceContainer"
          style={{
            position: "sticky", // fix in place during second container scrolling
            top: "0", // fix in top of parent and allow sticky behavior
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "end", // end to fix content at the bottom
              height: "100vh",
              width: "100svw",
            }}
            className="bg-grayflo justify-end items-center sm:justify-center sm:items-start"
          >
            {/* <HeroUnderFrame /> */}
            <HeroUnderFrameVid />
          </div>
        </div>
        <div
          // SECOND CONTAINER, height is defined by its childs
          id="maskStayInPlaceContainer"
          style={{
            position: "absolute", // absolute positionning to mask first container
            top: "0rem", // -100px to let see a small portion of illustration
          }}
        >
          <div
            // first child
            className=" bg-white/70 backdrop-blur-2xl h-[100vh] w-[100vw]"
          >
            <div className=" flex flex-col justify-end items-center h-[100vh] ">
              <HeroCurtainContent />
            </div>
          </div>

          <div // second child
            className="  h-[150vh] w-full absolute flex justify-center sm:justify-end text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white dark:text-darkflo"
          >
            {/* <div className="leading-[1.15] w-[18rem] mt-[4rem] sm:w-[20rem] sm:mt-[20rem] md:w-[20rem] md:mt-[12rem] sm:mr-[5%] md:mr-[15%] lg:w-[25rem] lg:mr-[10%] xl:mr-[18%]"> */}
            {/* <TitleCut>Développeur</TitleCut>
              <TitleCut>Front End</TitleCut>
              <TitleCut>Designer</TitleCut>
              <TitleCut>UX/UI</TitleCut> */}
            {/* <h1 className=" opacity-0">Développeur Front End</h1> */}
            {/* <h1 className="opacity-0">Designer UX/UI</h1> */}
            {/* <WindowsSizeDetector /> */}
            {/* <WindowsSizeDetectorFixed /> */}
            {/* </div> */}
            <div className=" dark:text-darkflo text-white h-svh w-full absolute flex justify-center items-start sm:items-center sm:justify-end text-5xl md:text-6xl lg:text-7xl">
              <div className=" leading-[1.15] mt-[4rem] sm:w-[20rem] md:w-[20rem] sm:mr-[5%] md:mr-[11%] lg:w-[10ch] lg:mr-[10%] xl:mr-[18%] 2xl:mr-[20%]">
                {/* <h1>Designer UX/UI</h1> */}
                <TitleCut>Développeur</TitleCut>
                <TitleCut>Front End</TitleCut>
                <TitleCut>Designer</TitleCut>
                <TitleCut>UX/UI</TitleCut>
                <WindowsSizeDetector />
                <div className="border mt-1 sm:-mt-8 text-white border-white mix-blend-difference sm:mix-blend-normal sm:border-darkflo sm:text-darkflo p-2 text-2xl  font-mono">
                  <div className="flex gap-2  *:rounded-xl *:flex *:justify-center *:items-center ">
                    <Link href="https://github.com/MrTuttle">
                      <div className=" transition-transform hover:scale-125">
                        <SiGithub />
                      </div>
                    </Link>
                    <Link href="https://linkedin.com/in/florent-vincerot/">
                      <div className=" text-[1.3rem] transition-transform hover:scale-125">
                        <SiLinkedin />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curtain;
