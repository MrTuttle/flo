"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
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

  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <>
      {/* <div className=" text-5xl">
        {text.map((el, i) => (
          <span key={i}>{el} </span>
        ))}
      </div> */}
      {splitText.map((el, i) => (
        <motion.span
          initial={{ opacity: 0.15 }}
          // animate={{ opacity: 1 }}
          animate={{ opacity: isInView ? 1 : 0.15 }}
          transition={{ duration: 0.25, delay: i / 10 }}
          key={i}
          ref={ref}
        >
          {el}{" "}
        </motion.span>
      ))}
      {splitText.map((el, i) => (
        <motion.span
          initial={{ opacity: 0.15 }}
          // animate={{ opacity: 1 }}
          // animate={{ opacity: isInView ? 1 : 0.15 }}
          style={{ opacity: scrollYProgress }}
          transition={{ duration: 0.25, delay: i / 10 }}
          key={i}
          ref={ref}
        >
          {el}{" "}
        </motion.span>
      ))}
    </>
  );
};

export default RevealText;
