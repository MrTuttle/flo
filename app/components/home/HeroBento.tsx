// "use client";
import React, { Suspense, useState } from "react";
import HeroUnderFrameVid from "./HeroUnderFrameVid";
import { Skeleton } from "@/components/ui/skeleton";

const HeroBento = async () => {
  // const [loading, setLoading] = useState<boolean>(false);
  // const showSkeleton = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // };
  const Skeletonn = () => {
    return (
      <div className="min-h-[90svh] w-full p-4 bg-stone-50 max-w-7xl dark:bg-stone-600 rounded-2xl flex flex-col flex-wrap gap-y-4 2xl:gap-y-6  2xl:-mx-3 justify-center text-center">
        <Skeleton className="h-[255px] w-[250px] rounded-full mx-auto" />
        <div className="flex flex-col space-y-3">
          <div className="space-y-2">
            <Skeleton className="h-12 w-[580px] mx-auto" />
          </div>
          <div className="space-y-2 mt-20">
            <Skeleton className="h-8 w-[250px] mx-auto" />
            <Skeleton className="h-8 w-[380px] mx-auto" />
            <Skeleton className="h-8 w-[200px] mx-auto" />
          </div>
          <div className="space-y-2 mt-20">
            <Skeleton className="h-4 w-[550px] mx-auto" />
            <Skeleton className="h-4 w-[480px] mx-auto" />
            <Skeleton className="h-4 w-[600px] mx-auto" />
            <Skeleton className="h-4 w-[750px] mx-auto" />
            <Skeleton className="h-4 w-[380px] mx-auto" />
            <Skeleton className="h-4 w-[600px] mx-auto" />
          </div>
        </div>
      </div>
    );
  };
  return (
    <Suspense fallback={Skeletonn()}>
      <div className="min-h-[90svh] w-full p-4 bg-stone-50 max-w-7xl dark:bg-stone-600 rounded-2xl flex flex-col flex-wrap gap-y-4 2xl:gap-y-6  2xl:-mx-3 justify-center text-center">
        <div className=" w-9/12 md:w-4/12 mx-auto">
          <HeroUnderFrameVid />
        </div>

        <h1 className="text-stone-400 text-4xl md:text-6xl">
          Hey ! my name is Flo
          <br />
        </h1>

        <p className=" md:text-4xl text-lg">
          I am a web designer <br />
          and a front end developper <br />
          based in France
        </p>
        <p className="md:text-xl text-base text-gray-700 dark:text-gray-300 max-w-prose text-pretty mx-auto">
          {/* <p className=""> */} I have been working as a UI/UX designer and
          front-end developer since 2009. I’ve always been someone who has both
          a creative and a logical side. When I discovered web design, I
          realized it would be the perfect fit. I could use my creative side to
          design and my logical side to code. As a bonus, being both designer
          and developer allows me to make sure no detail is lost in translation.
        </p>
      </div>
    </Suspense>
  );
};

export default HeroBento;
