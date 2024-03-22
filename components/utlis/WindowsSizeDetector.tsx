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
      message = "before sm";
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
      style={{ position: "fixed", top: 20, right: 20, zIndex: 100 }}
      className="text-white p-4 text-xs mix-blend-difference"
    >
      <ScrollPositionDetector />
      <p>
        <br />
      </p>
      <p>WINDOW SIZE</p>
      <p>
        <span>Width: </span>
        {windowSize.width}
      </p>
      <p>
        <span>Height: </span>
        {windowSize.height}
      </p>

      <p>Tailwind screen : {screenTWcond(windowSize.width)}</p>
    </div>
  );
}
