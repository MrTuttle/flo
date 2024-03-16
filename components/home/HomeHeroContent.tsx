"use client";
import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import WindowsSizeDetector, {
  useWindowSize,
} from "../utlis/WindowsSizeDetector";

const HomeHeroContent = () => {
  // const sticky = "sticky";
  const notSticky = "";
  const { scrollY } = useScroll();
  const [sticky, setSticky] = useState(0);
  const windowSize = useWindowSize();

  // const latestScrollY = useMotionValueEvent(scrollY, "change", (latest)=> {
  //     return latest
  //   });

  // };
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    setSticky(latest);
  });

  return (
    <div
      className={`home-hero-content gap-[1.6rem] ${
        sticky <= windowSize.height - 50 // -50px to calm rapid scrolls
          ? `sticky top-0`
          : `relative mt-[100svh]`
      }`}
    >
      <div className="flex gap-4 text-white ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt nam eaque debitis commodi est
          unde voluptatum aspernatur, molestiae illum aliquid natus. Qui dicta,
          provident aliquam quas laudantium dolorum. Vitae, neque.
          <br />
          <br />
          <strong>
            sticky value :<br />
            {sticky}
          </strong>
          <br />
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt nam eaque debitis commodi est
          unde voluptatum aspernatur, molestiae illum aliquid natus. Qui dicta,
          provident aliquam quas laudantium dolorum. Vitae, neque.
          <br />
          <br />
          <strong>
            window height <br />
            value (-50) :<br /> {windowSize.height - 50}
          </strong>
        </p>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt nam eaque debitis commodi est
          unde voluptatum aspernatur, molestiae illum aliquid natus. Qui dicta,
          provident aliquam quas laudantium dolorum. Vitae, neque.
        </p>
      </div>
    </div>
  );
};

export default HomeHeroContent;
