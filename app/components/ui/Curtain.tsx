"use client";

import React from "react";
import HeroUnderFrame from "../home/HeroUnderFrame";

const Curtain = () => {
  return (
    <>
      <h1>container no width nor height - direct child 200svh</h1>

      <div
        // className={"scrolly-container"}
        style={{
          height: "200svh",
          border: "solid red 1px",
          position: "relative",
        }}
      >
        <div
          id="stayInPlaceContainer"
          className="bg-bluflo h-[100svh] sticky top-0"
        >
          <div className="border border-white flex flex-col justify-end h-[100svh] w-[100vw]">
            <HeroUnderFrame />
          </div>
        </div>
        <div className="bg-sky-400 p-4 h-[100svh]">background</div>
        <div
          id="maskStayInPlaceContainer"
          className="h-[200svh] absolute top-0"
        >
          <div className="bg-white/80 h-[100svh] w-[50vw]">ghjgj</div>
          <div className="border h-[100svh] w-[50vw]">Dev</div>
        </div>

        {/* <ScrollyVideo
          // play between height: "300vh" & frameThreshold to set time playing
          transitionSpeed={8} // Sets the maximum playbackRate for this video default 8
          frameThreshold={0.1} // When to stop the video animation, in seconds, default 0.1
          cover={true} // Forces the video to cover in it's container
          sticky={true} // Whether the video should have position: sticky
          full={true} // Whether the video should take up the entire viewport
          trackScroll={true} // Whether this object should automatically respond to scroll
          useWebCodecs={true}
          videoPercentage={0}
          debug={true}
          src="https://scrollyvideo.js.org/goldengate.mp4"
        /> */}
      </div>
    </>
  );
};

export default Curtain;
