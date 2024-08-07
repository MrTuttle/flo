"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { JSX } from "react";

interface Props {
  // children: string;
  // children: string | JSX.Element | JSX.Element[] | () => JSX.Element;
  children: string | JSX.Element;
}

const TitleCut = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden text-4xl h-[2.7rem] sm:text-6xl sm:h-[4.2rem] md:text-7xl md:h-[5rem]`}
    >
      <h1
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          // opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        {children}
      </h1>
    </div>
  );
};

export default TitleCut;
