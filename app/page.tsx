// "use client";
import { ModeToggle } from "@/app/components/ui/ModeToggle";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import flo from "@/public/avatar/Florent-Vincerot-avatar.jpg";

import HomeHeroContent from "@/app/components/home/HomeHeroContent";
import WindowsSizeDetector, {
  useWindowSize,
} from "@/app/components/utlis/WindowsSizeDetector";
import ParagrapheColones from "@/app/components/ui/ParagrapheColones";
import TitleRevealCut from "@/app/components/ui/TitleRevealCut";
import TitleCut from "@/app/components/ui/TitleCut";
import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import HeroContainer from "@/app/components/home/HeroContainer";
import HeroUnderFrame from "@/app/components/home/HeroUnderFrame";
import ScrollPositionDetector from "@/app/components/utlis/ScrollPositionDetector";
import HeroCurtainContent from "@/app/components/home/HeroCurtainContent";
import ScrollVideoCustom from "@/app/components/ui/ScrollVideoCustom";
import { Video } from "@/app/components/ui/Video";
import ListPost from "@/app/components/ui/ListPost";
import prisma from "@/prisma/client";
import Curtain from "./components/ui/Curtain";

// export default Home = async () {

const Home = async () => {
  const postis = await prisma.post.findFirst({
    where: { published: true },
    // clube179p0000jo56hhi7ccvu
  });
  const posts = await prisma.post.findMany();

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
      {/* <WindowsSizeDetector /> */}
      <div className="fixed z-50 top-0 right-0 p-4">
        <ModeToggle />
      </div>

      {/* <HeroContainer classnameprops="flex flex-col justify-end bg-white dark:bg-darkflo w-full">
        <HeroCurtainContent />
      </HeroContainer> */}
      {/* Important div for HeroContainer working */}
      {/* a div element with svh height is required to correctly display following content */}

      {/* <div className="h-screen"></div> */}
      <Curtain />
      <section className=" bg-grayflo text-white dark:text-darkflo px-6 py-60 flex flex-col justify-center items-center gap-4 min-h-screen">
        <div className="">
          <div className=" xl:ml-[25%] py-20">
            <p className=" underline underline-offset-4 w-auto text-xs p-1 mb-5">
              TitleCut : JS safari friendly
            </p>
            <div style={{ gridColumn: "2/5" }}>
              <TitleCut>J’imagine & conçois,</TitleCut>
              <TitleCut>pour vous des interfaces</TitleCut>
              <TitleCut>agréables à consulter</TitleCut>
            </div>
          </div>

          <div className=" mt-10 w-full flex justify-end text-md font-light gap-6 flex-wrap lg:flex-nowrap">
            <div className=" min-h-[55.vh] max-h-[95vh] rounded-3xl overflow-hidden">
              {/* <Video videoUrl={"https://scrollyvideo.js.org/goldengate.mp4"} /> */}

              <video
                // width="320"
                // height="240"
                // controls
                autoPlay
                loop
                muted
                preload="auto" // none, metadata, auto
                playsInline
                // className="w-full"
                style={{
                  // position: "absolute",
                  // top: "0",
                  // left: "0",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              >
                <source
                  src={
                    "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/original-af2fee503aafeb0d84d5827e281ece79_w17ec3.mp4"
                  }
                  type="video/mp4"
                />
                <track
                // src="/path/to/captions.vtt"
                // kind="subtitles"
                // srcLang="en"
                // label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="w-[65%] sm:w-[33.3%] lg:w-[25%] xl:w-[16.3%]">
              <p>
                En ligne de mire… <br />
                toujours simplifier et rendre l’expérience utilisateur la plus
                agréable possible.
              </p>
              <p>
                Ce qui m’anime, au quotidien c’est de trouver la meilleur façon
                de donner vie à vos données.
                {/* Passé par les écoles d’Art, les Agences de publicité, et geek depuis
            le berceau, je suis un codeur graphiste, ou un graphiste qui code.
            Besoins des derniers rafinemments d’interfaces pour votre site
            mobile ? J’ai les bonnes réponses pour vous. Besoin de marquer votre
            public avec une identité produit innovante ? J’ai l’expérience qu’il
          vous faut. */}
                {/* Designer graphique de formation, passé par les écoles d’Art, je suis
            monté en compétences au fil de ma carrière en me spécialisant dans
          le design numérique et dans le développement d’interfaces web. */}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-violet-800 text-grayflo dark:text-grayflo px-6 py-6 flex flex-col justify-center items-center gap-4 min-h-screen">
        <div className=" w-full xl:w-[75%]">
          <div className=" xl:ml-[34.5%] py-20">
            <p className=" underline underline-offset-4 w-auto text-xs p-1 mb-5">
              TitleCut : JS safari friendly
            </p>
            <div style={{ gridColumn: "2/5" }}>
              <TitleCut>Des composants</TitleCut>
              <TitleCut>modulaires</TitleCut>
              <TitleCut>pour vos interfaces</TitleCut>
            </div>
          </div>
          <div className=" text-xl h-[88.33vw] sm:h-[62vw]">
            <ul className=" h-[100%] xl:h-[75%] grid grid-cols-2 sm:grid-cols-3 md:grid-col-3 gap-6 text-violet-800 *:border *:border-grayflo *:rounded-3xl *:p-6 *:bg-grayflo">
              <li className="">React</li>
              <li>Tailwind</li>
              <li>Next JS</li>
              <li>R&R</li>
            </ul>
          </div>
        </div>
      </section>

      <div className=" bg-grayflo text-white dark:text-darkflo pt-20 px-10 py-10 md:px-30 lg:px-40 flex flex-col justify-center items-center gap-4 min-h-screen">
        <div className="max-w-screen-xl">
          <p className=" underline underline-offset-4 w-auto text-xs p-1 mb-5">
            TitleCut : JS safari friendly
          </p>
          <div>
            <TitleCut>J’imagine & conçois,</TitleCut>
            <TitleCut>pour vous des interfaces</TitleCut>
            <TitleCut>agréables à consulter</TitleCut>
          </div>

          <div className="mt-10 flex items-center text-2xl gap-8 flex-wrap lg:flex-nowrap">
            <div className="lg:w-9/12">
              {/* <Video videoUrl={"https://scrollyvideo.js.org/goldengate.mp4"} /> */}
              <Video
                videoUrl={
                  "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/original-af2fee503aafeb0d84d5827e281ece79_w17ec3.mp4"
                }
              />
            </div>
            <p className="w-4/12 2xl:w-2/12">
              En ligne de mire… toujours simplifier et rendre l’expérience
              utilisateur la plus agréable possible. <br />
              <br />
              Ce qui m’anime, au quotidien c’est de trouver la meilleur façon de
              donner vie à vos données.
              {/* Passé par les écoles d’Art, les Agences de publicité, et geek depuis
            le berceau, je suis un codeur graphiste, ou un graphiste qui code.
            Besoins des derniers rafinemments d’interfaces pour votre site
            mobile ? J’ai les bonnes réponses pour vous. Besoin de marquer votre
            public avec une identité produit innovante ? J’ai l’expérience qu’il
            vous faut. */}
              {/* Designer graphique de formation, passé par les écoles d’Art, je suis
            monté en compétences au fil de ma carrière en me spécialisant dans
            le design numérique et dans le développement d’interfaces web. */}
            </p>
          </div>
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
          <p className="text-white text-lg">
            Développeur Front End et UX designer, on rôle consiste à répondre
            aux besoins fonctionnels et techniques pour vos projets
            d’application, pour cela j’assure le développement des outils à
            partir des maquettes. L’objectif étant de simplifier et rendre
            agréable l’expérience utilisateur sur les outils demandés. Ce qui
            m’anime au quotidien c’est de concevoir des outils utiles, et donner
            vie à vos données,
          </p>
        </div>
        <div className="bg-gray-800 p-10">
          <ListPost posts={posts} />
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
          <div className="w-[600px]">
            {/* <Video videoUrl={"https://scrollyvideo.js.org/goldengate.mp4"} /> */}
            <Video
              videoUrl={
                "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/Square_eagevr.mp4"
                // "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/goldengate_c8a72q.mp4"
              }
            />
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
      <Curtain />
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
};
export default Home;
