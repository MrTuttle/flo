"use client";
import { useLayoutEffect, useState } from "react";

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

  return (
    // <div>
    //   <p>Window Width: {width}</p>
    //   <p>Window Height: {height}</p>
    // </div>
    <div className=" z-50 fixed bottom-0 right-0  bg-red-500 my-border-red w-auto p-4">
      <p>WINDOW SIZE</p>
      <p>
        <span>Width: </span>
        {windowSize.width}
      </p>
      <p>
        <span>Height: </span>
        {windowSize.height}
      </p>
      <p>
        {windowSize.width < 768
          ? "TW width < md (768px)"
          : "TW width < lg (1024px)"}
      </p>
    </div>
  );
}
