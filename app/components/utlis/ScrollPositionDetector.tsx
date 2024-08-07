import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const ScrollPositionDetector = () => {
  const { scrollY } = useScroll();
  const [latestScrollY, setLatestScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    setLatestScrollY(latest);
    return latest;
  });

  return (
    <>
      <span>Scroll</span>
      <span className="line-clamp-1">{latestScrollY}</span>
    </>
  );
};

export default ScrollPositionDetector;
