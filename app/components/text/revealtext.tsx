"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { scrollInfo, useMotionValue } from "framer-motion";
// import * as motion from "motion/client";

type Props = {
  // children?: React.ReactNode;
  // children: string | JSX.Element;
  children?: string;
};

const RevealText = ({ children }: Props) => {
  const text = "Experimentation with text reveal and framer motion";
  const text2 = children;
  const splitText = text2 ? text2.split(" ") : text.split(" ");
  let opacityStart = 0.15;

  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  const { scrollY } = useScroll();
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });
  let tOpacity = 0;
  const { scrollYProgress } = useScroll({
    target: ref, // target the ref element
    offset: ["end end", "start start"], //
  });
  const ggg = useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll element: ", latest + opacityStart);
    return latest + opacityStart;
  });
  const yy = useMotionValue(useScroll());

  console.log("scrollY: ", scrollY.get());

  return (
    <>
      {/* <div className=" text-5xl">
        {text.map((el, i) => (
          <span key={i}>{el} </span>
        ))}
      </div> */}
      <div
        className="border-2 border-black dark:border-white text-5xl"
        ref={ref}
      >
        {splitText.map((el, i) => (
          <motion.span
            initial={{ opacity: opacityStart }}
            // animate={{ opacity: 1 }}
            animate={{ opacity: isInView ? 1 : opacityStart }}
            transition={{ duration: 0.25, delay: i / 10 }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
        {splitText.map((el, i) => (
          <motion.span
            initial={{ opacity: opacityStart }}
            // animate={{ opacity: 1 }}
            // animate={{ opacity: isInView ? 1 : 0.15 }}
            style={{ opacity: tOpacity }}
            transition={{ duration: 0.25, delay: i / 10 }}
            key={i}
            ref={ref}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
    </>
  );
};

export default RevealText;
