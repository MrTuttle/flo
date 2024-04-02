import React from "react";
import HeroUnderFrame from "../home/HeroUnderFrame";
import HeroCurtainContent from "../home/HeroCurtainContent";
import TitleCut from "./TitleCut";
import WindowsSizeDetector from "../utlis/WindowsSizeDetector";
import WindowsSizeDetectorFixed from "../utlis/WindowsSizeDetectorFixed";

const Curtain = () => {
  return (
    <>
      <div
        // global container to define global behavior
        style={{
          height: "200svh", // 200svh height to allow internal scroll, increase it for a longer scroll time
          position: "relative", // to allow sticky for first child
          overflow: "clip", // forced default value
        }}
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
              justifyContent: "end", // to fix content at the bottom
              height: "100svh",
              width: "100svw",
            }}
            className="bg-bluflo"
          >
            <HeroUnderFrame />
          </div>
        </div>
        <div
          // SECOND CONTAINER, height is defined by its childs
          id="maskStayInPlaceContainer"
          style={{
            position: "absolute", // absolute positionning to mask first container
            top: "-10rem", // -100px to let see a small portion of illustration
          }}
        >
          <div
            // first child
            className="bg-white h-[100svh] w-[100vw]"
          >
            <div className="flex flex-col justify-end items-center h-[100svh] ">
              <HeroCurtainContent />
            </div>
          </div>

          <div // second child
            className="h-[150svh] w-full absolute flex justify-center sm:justify-end text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white dark:text-darkflo"
          >
            <div className=" leading-[1.15] w-[18rem] mt-[9rem] sm:w-[20rem] sm:mt-[20rem] md:w-[20rem] md:mt-[15rem] sm:mr-[5%] md:mr-[15%] lg:w-[25rem] lg:mr-[10%] xl:mr-[18%]">
              {/* <TitleCut>Développeur</TitleCut>
              <TitleCut>Front End</TitleCut>
              <TitleCut>Designer</TitleCut>
              <TitleCut>UX/UI</TitleCut> */}
              <h1 className=" opacity-0">Développeur Front End</h1>
              <h1 className="opacity-0">Designer UX/UI</h1>
              <WindowsSizeDetector />
              {/* <WindowsSizeDetectorFixed /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curtain;
