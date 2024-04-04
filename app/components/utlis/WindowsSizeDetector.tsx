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
      className="font-medium sm:bg-grayflo  sm:flex gap-4 mt-4 sm:mt-5 sm:p-4 sm:pb-20 text-xs dark:text-darkflo rounded-2xl"
    >
      <p>WINDOW SIZE</p>
      <ScrollPositionDetector />
      <p>
        <span>Width </span>
        {windowSize.width}
      </p>
      <p>
        <span>Height </span>
        {windowSize.height}
      </p>

      <p>Tailwind screen {screenTWcond(windowSize.width)}</p>
    </div>
  );
}
