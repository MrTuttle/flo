"use client";
import { useLayoutEffect, useState } from "react";
import ScrollPositionDetector from "./ScrollPositionDetector";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};

// export default useWindowSize;

export default function WindowsSizeDetector() {
  // const { width, height } = useWindowSize();
  const windowSize = useWindowSize();

  const screenTWcond = (width: number) => {
    let message;
    const twscreens = {
      sm: 640,
      md: 728,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    };
    if (width < 640) {
      message = "before sm (<640px)";
    }
    if (width > 640 && width < 768) {
      message = `sm: ${twscreens.sm}`;
    }
    if (width > 768 && width < 1024) {
      message = `md: ${twscreens.md}`;
    }
    if (width > 1024 && width < 1280) {
      message = `lg: ${twscreens.lg}`;
    }
    if (width > 1280 && width < 1536) {
      message = `xl: ${twscreens.xl}`;
    }
    if (width > 1536) {
      message = `2xl: ${twscreens.xxl}`;
    }
    return message;
  };

  return (
    // <div>
    //   <p>Window Width: {width}</p>
    //   <p>Window Height: {height}</p>
    // </div>
    <div
      style={
        {
          // position: "fixed",
          // top: 100,
          // right: 100,
          // zIndex: 100,
          // mixBlendMode: "difference",
          // backdropFilter: "blur(16px)",
        }
      }
      className="font-mono mt-4 sm:mt-5 sm:pb-10 text-xs mix-blend-difference sm:mix-blend-normal sm:text-darkflo"
    >
      <div className="border dark:border-white dark:text-white sm:dark:text-darkflo sm:dark:border-darkflo sm:border-darkflo p-2 ">
        <p>WINDOW SIZES</p>
        <hr className=" my-1 dark:border-white sm:dark:border-darkflo sm:border-darkflo" />
        <div className=" flex gap-4 *:flex *:flex-col ">
          <div className=" flex-1/4">
            <span>Width </span>
            <span>{windowSize.width}</span>
          </div>
          <div className="flex-1/4">
            <span>Height </span>
            <span>{windowSize.height}</span>
          </div>
          <div className="flex-1/4">
            <span>Breakpoint </span>
            <span>{screenTWcond(windowSize.width)}</span>
          </div>
          <div className="w-[11ch]">
            <ScrollPositionDetector />
          </div>
        </div>
      </div>
    </div>
  );
}
