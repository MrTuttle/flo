"use client";

import React from "react";
import WindowsSizeDetector, {
  useWindowSize,
} from "@/components/utlis/WindowsSizeDetector";
import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import HeroUnderFrame from "./HeroUnderFrame";

interface Props {
  // containerHeight: number;
  // children: string;
  children: React.ReactNode;
  classnameprops: string;
}

const HeroContainer = ({ children, classnameprops }: Props) => {
  const { scrollY } = useScroll();
  const windowSize = useWindowSize();
  const [windowHeight, setWindowHeight] = useState(900);
  const [scrollYValue, setScrollYValue] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    setScrollYValue(latest);
    setWindowHeight(windowSize.height);
  });
  // const giveHeight = useEffect(() => {
  //   setWindowHeight(windowSize.height);

  //   return () => {
  //     // second
  //     setWindowHeight(windowSize.height);
  //     // <div className={`bg-white-500 h-[${windowSize.height}px]`}></div>;
  //   };
  // }, [windowSize.height]);
  const contentContainer = () => {
    return (
      <>
        <div className="h-svh">
          <div
            // style={{ height: `90svh` }}
            style={
              // when scrollValue exeed windowHeight
              // whe define this h-svh div as absolute position
              // with top as windowHeight value
              scrollYValue <= windowHeight
                ? { position: `fixed` }
                : { top: `${windowHeight}px`, position: `absolute` }
            }
            className="h-svh flex flex-col justify-end w-full bg-bluflo"
          >
            <HeroUnderFrame />
          </div>
          <div
            style={{
              // height: `${windowHeight - scrollYValue}px`,
              height: `${windowHeight}px`,
              // top: `-${scrollYValue}px`,
              position: "absolute",
            }}
            className={classnameprops}
          >
            {children}
          </div>
        </div>
      </>
    );
  };

  return <>{contentContainer()}</>;
  // <div>
  //   <div className={`bg-gray-500 h-[900px]`}>
  //     <p>containerHeight : {windowSize.height}</p>
  //     <p>{windowHeight}</p>
  //     <p>scroll value : {scrollYValue}</p>
  //     {contentContainer()}
  //   </div>
  //   <div className={`bg-orange-500 h-[${scrollYValue}px]`}>
  //     <p>containerHeight : {windowSize.height}</p>
  //     <p>{windowHeight}</p>
  //     <p>scroll value : {scrollYValue}</p>
  //   </div>
  // </div>
};

export default HeroContainer;
