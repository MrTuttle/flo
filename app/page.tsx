"use client";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import flo from "@/public/avatar/Florent-Vincerot-avatar.jpg";

import HomeHeroContent from "@/components/home/HomeHeroContent";
import WindowsSizeDetector, {
  useWindowSize,
} from "@/components/utlis/WindowsSizeDetector";
import ParagrapheColones from "@/components/ui/ParagrapheColones";
import TitleRevealCut from "@/components/ui/TitleRevealCut";
import TitleCut from "@/components/ui/TitleCut";
import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import HeroContainer from "@/components/home/HeroContainer";
import HeroUnderFrame from "@/components/home/HeroUnderFrame";
import ScrollPositionDetector from "@/components/utlis/ScrollPositionDetector";
import HeroCurtainContent from "@/components/home/HeroCurtainContent";
import ScrollVideoCustom from "@/components/ui/ScrollVideoCustom";
import { Video } from "@/components/ui/Video";

export default function Home() {
  // const { scrollY } = useScroll();

  // const windowSize = useWindowSize();
  // const [windowHeight, setWindowHeight] = useState(900);
  // const [scrollYValue, setScrollYValue] = useState(0);
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  //   // setSticky(latest);
  //   setScrollYValue(latest);
  //   setWindowHeight(windowSize.height);
  // });
  // const giveHeight = useEffect(() => {
  //   setWindowHeight(windowSize.height);

  //   return () => {
  //     // second
  //     setWindowHeight(windowSize.height);
  //     // <div className={`bg-white-500 h-[${windowSize.height}px]`}></div>;
  //   };
  // }, [windowSize.height]);

  return (
    <>
      <WindowsSizeDetector />
      <div className="fixed z-50 top-0 right-0 p-4">
        <ModeToggle />
      </div>

      <HeroContainer classnameprops="flex flex-col justify-end bg-white dark:bg-darkflo w-full">
        <HeroCurtainContent />
      </HeroContainer>
      {/* Important div for HeroContainer working */}
      {/* a div element with svh height is required to correctly display following content */}

      <div className="h-screen"></div>
      <div className=" bg-darkflo text-white pt-20 px-10 py-10 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-screen">
        <p className=" underline underline-offset-4 w-auto text-xs p-1 mb-5">
          TitleCut : JS safari friendly
        </p>
        <div>
          <TitleCut>J’imagine & conçois,</TitleCut>
          <TitleCut>pour vous des sites</TitleCut>
          <TitleCut>agréables à consulter</TitleCut>
        </div>
        <div className="column-1 sm:columns-2 lg:columns-3 2xl:columns-4">
          <p className="text-white">
            xxxxx — Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae
            illum? Molestiae delectus assumenda reiciendis incidunt cum.
            Praesentium beatae quaerat dignissimos voluptas? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nesciunt pariatur quae sint.
            Eos sunt veritatis cum! Delectus, vitae illum? Molestiae delectus
            assumenda reiciendis incidunt cum. Praesentium beatae quaerat
            dignissimos voluptas?
          </p>
        </div>
      </div>
      <div className=" bg-gray-500 text-white pt-20 px-10 py-10 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-screen">
        <p className=" underline underline-offset-4 w-auto text-xs p-1 mb-5">
          TitleCut : JS safari friendly
        </p>
        <div>
          <TitleCut>Mobile first,</TitleCut>
          <TitleCut>l’accès direct au net,</TitleCut>
          <TitleCut>c’est dans la poche!</TitleCut>
        </div>
        <div className="column-1 sm:columns-2 lg:columns-3 2xl:columns-4">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
            Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
            beatae quaerat dignissimos voluptas? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nesciunt pariatur quae sint. Eos sunt
            veritatis cum! Delectus, vitae illum? Molestiae delectus assumenda
            reiciendis incidunt cum. Praesentium beatae quaerat dignissimos
            voluptas?
          </p>
        </div>
        <div className="py-20 flex gap-8 flex-wrap">
          <div className="max-w-md">
            {/* <Video videoUrl={"https://scrollyvideo.js.org/goldengate.mp4"} /> */}
            <Video
              videoUrl={
                "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/original-af2fee503aafeb0d84d5827e281ece79_w17ec3.mp4"
              }
            />
          </div>
          <div className="max-w-40">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              pariatur quae sint.
            </p>
          </div>
        </div>
        <div className="py-20 flex flex-row justify-end gap-8 flex-wrap">
          <div className="max-w-40">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              pariatur quae sint.
            </p>
          </div>
          <div className="w-[300px]">
            {/* <Video videoUrl={"https://scrollyvideo.js.org/goldengate.mp4"} /> */}
            <Video
              videoUrl={
                "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/La-Baraka-2024-03-22-part1_ijyl8g.mp4"
                // "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/goldengate_c8a72q.mp4"
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start p-36">
        <div className=" w-2/3">
          <Video
            videoUrl={
              "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/goldengate_c8a72q.mp4"
            }
          />
        </div>
      </div>
      {/* <ScrollVideoCustom /> */}
      {/* <ParagrapheColones>
        xLorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
        Molestiae delectus assumenda reiciendis incidunt cum. Praesentium beatae
        quaerat dignissimos voluptas? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nesciunt pariatur quae sint. Eos sunt veritatis cum!
        Delectus, vitae illum? Molestiae delectus assumenda reiciendis incidunt
        cum. Praesentium beatae quaerat dignissimos voluptas?
      </ParagrapheColones> */}

      <div className=" bg-gray-500 text-white pt-20 px-10 py-10 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-screen">
        <p className=" underline underline-offset-4 w-auto text-xs p-1 mb-5">
          TitleCut : JS safari friendly
        </p>
        <div>
          <TitleCut>Mobile first,</TitleCut>
          <TitleCut>l’accès direct au net,</TitleCut>
          <TitleCut>c’est dans la poche!</TitleCut>
        </div>
        <div className="column-1 sm:columns-2 lg:columns-3 2xl:columns-4">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
            Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
            beatae quaerat dignissimos voluptas? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nesciunt pariatur quae sint. Eos sunt
            veritatis cum! Delectus, vitae illum? Molestiae delectus assumenda
            reiciendis incidunt cum. Praesentium beatae quaerat dignissimos
            voluptas?
          </p>
        </div>
      </div>
      <div className="bg-greenflo text-emerald-900 pt-20 px-10 py-10 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-screen">
        <p className=" underline underline-offset-4 w-auto text-emerald-950 text-xs p-1 mb-5">
          TitleCut : JS safari friendly
        </p>
        <div>
          <TitleCut>Mobile first,</TitleCut>
          <TitleCut>l’accès direct au net,</TitleCut>
          <TitleCut>c’est dans la poche!</TitleCut>
        </div>
        <div className="column-1 sm:columns-2 lg:columns-3 2xl:columns-4">
          <p className="text-emerald-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
            Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
            beatae quaerat dignissimos voluptas? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nesciunt pariatur quae sint. Eos sunt
            veritatis cum! Delectus, vitae illum? Molestiae delectus assumenda
            reiciendis incidunt cum. Praesentium beatae quaerat dignissimos
            voluptas?
          </p>
        </div>
      </div>
      <div className=" bg-gray-500 text-white pt-20 px-10 py-10 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-screen">
        <p className=" underline underline-offset-4 w-auto text-xs p-1 mb-5">
          TitleCut : JS safari friendly
        </p>
        <div>
          <TitleCut>Mobile first,</TitleCut>
          <TitleCut>l’accès direct au net,</TitleCut>
          <TitleCut>c’est dans la poche!</TitleCut>
        </div>
        <div className="column-1 sm:columns-2 lg:columns-3 2xl:columns-4">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
            Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
            beatae quaerat dignissimos voluptas? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nesciunt pariatur quae sint. Eos sunt
            veritatis cum! Delectus, vitae illum? Molestiae delectus assumenda
            reiciendis incidunt cum. Praesentium beatae quaerat dignissimos
            voluptas?
          </p>
        </div>
      </div>
      <div className="bg-bluflo text-white pt-20 px-10 py-10 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-screen">
        {/* <div className="text-white text-4xl sm:text-6xl md:text-7xl sm:pb-20">
          <h1>Mobile first, l’accès direct au net, c’est dans la poche! </h1>
        </div> */}
        <p className=" underline underline-offset-4 w-auto text-xs p-1 mb-5">
          TitleCut : JS safari friendly
        </p>
        <div>
          <TitleCut>J’imagine & conçois</TitleCut>
          <TitleCut>pour vous des sites</TitleCut>
          <TitleCut>agréables à consulter</TitleCut>
        </div>

        <div className="column-1 sm:columns-2 lg:columns-3 2xl:columns-4">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
            Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
            beatae quaerat dignissimos voluptas? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nesciunt pariatur quae sint. Eos sunt
            veritatis cum! Delectus, vitae illum? Molestiae delectus assumenda
            reiciendis incidunt cum. Praesentium beatae quaerat dignissimos
            voluptas?
          </p>
        </div>
      </div>
      {/* <div className="z-50 absolute bg-slate-200 w-2/3 h-50 p-8">hjhjhjhjh</div>
      <main className=" flex min-h-screen flex-col items-center justify-between">
        <div className="h-[120vh] z-10 border border-green-500 w-2/3">
          <ModeToggle />
          <div className="text-9xl">Hello</div>
          <div>
            <Button>Click me</Button>
          </div>
        </div>

        <div className="border border-red-600 absolute h-svh z-1 w-1/2 m-auto">
          <Image
            src={flo}
            alt="Portrait illustration de Florent Vincerot"
            sizes="500"
            // style={{ objectFit: "cover" }}
          ></Image>
        </div>
      </main> */}
    </>
  );
}
