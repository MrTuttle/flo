import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const ScrollPositionDetector = () => {
  const { scrollY } = useScroll();
  const [latestScrollY, setLatestScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    //  setSticky(latest);
    setLatestScrollY(latest);
    return latest;
  });

  return <p>Scroll : {latestScrollY}</p>;
};

export default ScrollPositionDetector;
