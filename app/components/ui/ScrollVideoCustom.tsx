"use client";

import React from "react";
// import ScrollyVideo from "scrolly-video";
// pnpm install scrolly-video --save
// npm i --save-dev @types/scrolly-video
// or npm import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.esm.jsx';
// ≈ 14.59 mb
// import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.cjs.jsx";
import ScrollyVideo from "@/app/components/ui/ScrollyVideo/ScrollyVideo.jsx";

const ScrollVideoCustom = () => {
  return (
    <div className="p-10 h-2/3">
      <h1>My scroll video</h1>

      <div
        className={"scrolly-container"}
        style={{ height: "600vh", border: "solid red 1px" }}
      >
        <ScrollyVideo
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
        />
      </div>
      <p>gh</p>
    </div>
  );
};

export default ScrollVideoCustom;
