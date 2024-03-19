"use client";
import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import WindowsSizeDetector, {
  useWindowSize,
} from "../utlis/WindowsSizeDetector";
import Image from "next/image";
// import flo from "@/public/avatar/Florent-Vincerot-avatar-circle.png";
import flo from "@/public/avatar/Florent-Vincerot-avatar.jpg";
import HomeHeroContentLayout from "./HomeHeroContentLayout";
const HomeHeroContent = () => {
  // const sticky = "sticky";
  const notSticky = "";
  const { scrollY } = useScroll();
  const [sticky, setSticky] = useState(0);
  const windowSize = useWindowSize();

  // const latestScrollY = useMotionValueEvent(scrollY, "change", (latest)=> {
  //     return latest
  //   });

  // };
  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    setSticky(latest);
  });

  return (
    <div
      className={`home-hero-content gap-[1.6rem] ${
        sticky <= windowSize.height - 50 // -50px to calm rapid scrolls
          ? `sticky top-0`
          : `relative mt-[100svh]`
      }`}
    >
      <HomeHeroContentLayout
        sticky={sticky}
        width={windowSize.width}
        height={windowSize.height - 50}
      />
    </div>
  );
};

export default HomeHeroContent;
