"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { JSX } from "react";

interface Props {
  // children: string;
  // children: string | JSX.Element | JSX.Element[] | () => JSX.Element;
  children: string | JSX.Element;
}

export const ScrollReveal = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        // opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
    >
      {children}
    </div>
  );
};
