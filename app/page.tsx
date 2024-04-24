// "use client";
import { ModeToggle } from "@/app/components/ui/ModeToggle";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import flo from "@/public/avatar/Florent-Vincerot-avatar.jpg";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import FloShadow from "@/public/avatar/FloShadow.svg";
const inter = Inter({ subsets: ["latin"], display: "swap" });
const outfit = Outfit({ subsets: ["latin"], display: "swap" });
const space_grotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

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

import { TbBrandNextjs } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import SpanLogo from "./components/ui/SpanLogo";
import { TbBrandTypescript } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { CardPokemon } from "./components/ui/CardPokemon";
import Link from "next/link";

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
      <div // this div is just to define darkmode colors without touch tailwins shadcn variables
        className="bg-grayflo dark:bg-grayflo dark:text-grayflo"
      >
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
        <section className="pb-52 rounded-3xl p-6 sm:m-6  text-darkflo  flex flex-col items-center text-lg leading-[2.4rem]">
          <div className="flex">
            <div className="basis-3/12"></div>
            <div className="pl-10 sm:pl-0 sm:basis-8/12">
              <TitleCut>
                <>
                  <span className="text-greenflo"># </span>Dev.
                </>
              </TitleCut>

              <div className=" font-mono mt-5 relative ">
                <div className="text-xs absolute -translate-x-[100%] sm:-left-14 translate-y-3 -rotate-90 sm:rotate-0 -left-0 top-9 sm:top-0">
                  2022 | TODAY
                </div>
                Développeur spécialisé{" "}
                <SpanLogo>
                  <span className="pr-2 text-greenflo dark:text-grayflo">
                    <SiJavascript />
                  </span>
                  <div className="text-white">Javascript</div>
                </SpanLogo>{" "}
                je conçois et développe des composants d’interface réutilisable
                en m’appuyant sur{" "}
                <SpanLogo>
                  <span className="pr-2 text-greenflo dark:text-grayflo">
                    <SiTypescript />
                  </span>
                  <span className="text-white">typescript</span>
                </SpanLogo>{" "}
                et{" "}
                <SpanLogo>
                  <span className="pr-2 text-greenflo dark:text-grayflo">
                    <SiReact />
                  </span>
                  <span className="text-white">React</span>
                </SpanLogo>{" "}
                accompagné de{" "}
                <SpanLogo>
                  <span className="pr-2 text-greenflo dark:text-grayflo">
                    <SiTailwindcss />
                  </span>
                  <span className="text-white">Tailwind</span>
                </SpanLogo>{" "}
                pour gérer l’affichage et les animations de bases.
                <br />
                Ces connaissances javascript / Typescript me permettent
                également m’adapter rapidement à d’autres frameworks comme
                Angular ou Vue JS. <br />
                Pour le backend, j’ai été formé dans les règles de l’art à
                l’environnement{" "}
                <SpanLogo>
                  <span className="pr-2 text-greenflo dark:text-grayflo">
                    <SiRubyonrails />
                  </span>
                  <span className="text-white">Ruby on Rails</span>
                </SpanLogo>{" "}
                au Wagon à Lyon. J’utilise également{" "}
                <SpanLogo>
                  <span className="pr-2 text-greenflo dark:text-grayflo">
                    <SiNextdotjs />
                  </span>
                  <span className="text-white">Next JS</span>
                </SpanLogo>{" "}
                qui progresse à toute vitesse et me permet de développer un
                backend pour React très rapidement.
              </div>
            </div>
            <div className="basis-2/12"></div>
          </div>
        </section>
        <section className="pb-52 rounded-3xl p-6 sm:m-6  text-darkflo  flex flex-col items-center text-lg leading-[2.4rem]">
          <div className="flex">
            <div className="basis-3/12"></div>
            <div className="pl-10 sm:pl-0 sm:basis-8/12">
              <TitleCut>
                <>
                  <span className="text-greenflo"># </span>Designer
                </>
              </TitleCut>
              <TitleCut>
                <>
                  <span className="pl-[1.8rem]">UI / UX</span>
                </>
              </TitleCut>
              <div className=" font-mono mt-5 relative ">
                <div className="text-xs absolute -translate-x-[100%] sm:-left-14 translate-y-3 -rotate-90 sm:rotate-0 -left-0 top-9 sm:top-0">
                  2009 | TODAY
                </div>
                Initialement formé aux arts graphiques j’ai été en charge des
                interfaces et de l’expérience utilisateur d’une cinquantaine de
                sites web. En veille constante pour ne rien rater des nouvelles
                tendances en design d’interface, je peux concevoir des maquettes
                pour vos projets numériques avec Figma, sketch ou Adobe XD, de
                plus, je parle couramment le CSS. Pour les contenus, je maîtrise
                les outils graphiques de la suite Adobe dont After effect pour
                le motion design.
              </div>
            </div>
            <div className="basis-2/12"></div>
          </div>
        </section>
        <section className="pb-52 rounded-3xl p-6 sm:m-6  text-darkflo  flex flex-col items-center text-lg leading-[2.4rem]">
          <div className="flex">
            <div className="basis-3/12"></div>
            <div className="pl-10 sm:pl-0 sm:basis-8/12">
              <TitleCut>
                <>
                  <span className="text-greenflo"># </span>Art
                </>
              </TitleCut>
              <TitleCut>
                <>
                  <span className="pl-[1.8rem]">director </span>
                </>
              </TitleCut>
              <div className=" font-mono mt-5 relative ">
                <div className="text-xs absolute -translate-x-[100%] sm:-left-14 translate-y-3 -rotate-90 sm:rotate-0 -left-0 top-9 sm:top-0">
                  2009 | 2022
                </div>
                Directeur Artistique chez Album, mon travail à consisté à
                développer l’image de PME/PMI, développer des concepts
                publicitaires, créer ou adapter des illustrations et les
                décliner en animations Motion Design, créer des expérience
                digitales et des interfaces utilisateurs. C’est au cours de ces
                projets et des collaborations avec les développeurs que j’ai pu
                acquérir les bases du développement javascript, HTML et CSS.
              </div>
            </div>
            <div className="basis-2/12"></div>
          </div>
        </section>

        {/* <section className="section-loud rounded-3xl p-6 sm:m-6 min-h-svh bg-greenflo text-neutral-500 dark:bg-darkflo dark:text-grayflo  flex flex-col items-center text-xl font-light leading-10">
          <div
            id="therow"
            className=" my-auto gap-6 flex flex-wrap justify-between mx-auto max-w-none w-full "
          >
            <div id="colone1" className="ml-[10%]">
              <div className="">
                <TitleCut>Tu cherches</TitleCut>
                <TitleCut>un dev front ?</TitleCut>
              </div>

              <CardPokemon />
            </div>
            <div
              id="colone2"
              className="flex  grow-0 shrink-0 basis-full lg:basis-5/12"
            >
              <div className=" ">
                Coucou ! c’est moi qu’il te faut !<br />
                Développeur spécialisé{" "}
                <SpanLogo>
                  <span className="pr-2 text-greenflo dark:text-grayflo">
                    <SiJavascript />
                  </span>
                  <div className="text-white">Javascript</div>
                </SpanLogo>{" "}
                je conçois et développe des composants d’interface réutilisable
                en m’appuyant sur{" "}
                <SpanLogo>
                  <span className="pr-2 text-greenflo dark:text-grayflo">
                    <SiTypescript />
                  </span>
                  <span className="text-white">typescript</span>
                </SpanLogo>{" "}
                et{" "}
                <SpanLogo>
                  <span className="pr-2 text-greenflo dark:text-grayflo">
                    <SiReact />
                  </span>
                  <span className="text-white">React</span>
                </SpanLogo>{" "}
                accompagné de{" "}
                <SpanLogo>
                  <span className="pr-2 text-greenflo dark:text-grayflo">
                    <SiTailwindcss />
                  </span>
                  <span className="text-white">Tailwind</span>
                </SpanLogo>{" "}
                pour gérer l’affichage et les animations de bases.
                <br />
                Pour le backend, j’ai été formé dans les règles de l’art à
                l’environnement{" "}
                <SpanLogo>
                  <span className="pr-2 text-greenflo dark:text-grayflo">
                    <SiRubyonrails />
                  </span>
                  <span className="text-white">Ruby on Rails</span>
                </SpanLogo>{" "}
                au Wagon à Lyon, je saurais donc trouver facilement mon chemin
                dans vos applications Ruby.
                <br /> J’utilise également{" "}
                <SpanLogo>
                  <span className="pr-2 text-greenflo dark:text-grayflo">
                    <SiNextdotjs />
                  </span>
                  <span className="text-white">Next JS</span>
                </SpanLogo>{" "}
                qui progresse à toute vitesse et permet de développer un backend
                pour React très rapidement.
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="section-light rounded-3xl p-6 sm:m-6 min-h-svh text-neutral-500 dark:bg-greenflo dark:text-darkflo  flex flex-col items-center text-xl font-light leading-10">
          <div id="therow" className="flex justify-between border *:border  ">
            <div
              id="colone2"
              className="flex flex-col gap-4 w-[25%] h-[10%] mx-10 sticky"
            >
              <div className="h-auto">
                After few years in Album Agency, I grow as artistic director. My
                work involves developing brands, advertising concepts,
                illustrations, creating digital customer experiences and
                animating motion design. At this time, I discover basics of
                javascript coding and use it to optimise complex motion design
                animation.
              </div>
            </div>
            <div id="colone1" className="w-[50%]">
              <div className="">
                <ScrollVideoCustom />
              </div>
            </div>
          </div>
        </section> */}

        <section className="section-accent rounded-3xl p-6 sm:m-6 min-h-svh bg-neutral-300 text-darkflo dark:bg-neutral-500 dark:text-greenflo  flex flex-col items-center text-xl font-light leading-10">
          <div
            id="therow"
            className=" my-auto flex flex-wrap justify-between mx-auto max-w-none w-full "
          >
            <div id="colone1" className="w-full sm:w-2/4 flex justify-center">
              <CardPokemon />
              {/* <div className="">
                <TitleCut>Graphic</TitleCut>
                <TitleCut>designer</TitleCut>
              </div> */}
            </div>
            <div
              id="colone2"
              className=" flex flex-col justify-center w-full px-4 xl:pr-[10%]   sm:w-2/4"
            >
              <div className=" font-medium pt-10 pb-5">
                <TitleCut>
                  <>
                    <span className="text-white"># </span>
                    work
                  </>
                </TitleCut>
                <TitleCut>
                  <span className="pl-[1.8rem]">in progress</span>
                </TitleCut>
              </div>

              <div className="relative">
                <div className="z-50 w-[50%] absolute bottom-0 right-0 translate-x-[50%]">
                  <Image
                    src={FloShadow}
                    alt="flo"
                    sizes="100vw"
                    className=" w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <p className="relative indent-[2rem]">
                    <span className="absolute origin-bottom-right animate-coucou inline-block -left-[2rem] translate-x-full">
                      👋
                    </span>
                    <span className="">Merci d’avoir scrollé jusqu’ici.</span>
                    <br />
                    Ce site est une première approche pour présenter mes
                    compétences.
                    <br />A venir une section pour présenter mes travaux…
                    <br />
                    Vous pouvez me contacter en suivant un des liens Linkedin,
                    ou Github, ci-dessous…
                  </p>
                </div>
              </div>
              <hr className="mt-8 mb-1 border-darkflo" />
              <div className=" flex gap-2  *:rounded-xl *:flex *:justify-center *:items-center ">
                <Link href="https://github.com/MrTuttle">
                  <div className=" transition-transform hover:scale-125">
                    <SiGithub />
                  </div>
                </Link>
                <Link href="https://linkedin.com/in/florent-vincerot/">
                  <div className=" text-[1.3rem] transition-transform hover:scale-125">
                    <SiLinkedin />
                  </div>
                </Link>
                <div className="text-xs py-4 ml-4">
                  Ce site utilise Tailwind, React et Next JS. Il est hébergé
                  chez Vercel en déploiement continu et peut être mis à jour à
                  tout moment de la journée.
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" h-[5vh]"></div>
        {/* <section className="section-accent rounded-3xl p-6 sm:m-6 min-h-svh bg-neutral-300 text-darkflo dark:bg-neutral-500 dark:text-greenflo  flex flex-col items-center text-xl font-light leading-10">
          <div
            id="therow"
            className="my-auto gap-6 flex flex-wrap justify-between mx-auto max-w-none w-full "
          >
            <div id="colone1" className="lg:ml-[10%]">
              <div className="">
                <TitleCut>Graphic</TitleCut>
                <TitleCut>designer</TitleCut>
              </div>
            </div>
            <div
              id="colone2"
              className="flex  grow-0 shrink-0 basis-full lg:basis-5/12"
            >
              Graphic Designer at Album Agency, My role encompassed high-end
              image retouching, print design and creating brand and marketing
              concepts for hard-to-explain B2B products. This is where I learned
              to pay attention to detail and how to execute flawless print
              designs. I evolves with UI /UX design responsibilities and learn
              CSS code with the developing team.
            </div>
          </div>
        </section> */}
        {/* <section className="section-loud p-6 sm:mx-6 min-h-svh bg-neutral-500 text-greenflo dark:bg-neutral-500 dark:text-grayflo  flex flex-col items-center text-xl font-light leading-10">
          <div
            id="therow"
            className=" my-auto gap-6 flex flex-wrap justify-between mx-auto max-w-none w-full "
          >
            <div id="colone1" className="">
              <div className="">
                <TitleCut>Designer UI/UX</TitleCut>
                <TitleCut>ou product</TitleCut>
                <TitleCut>designer ?</TitleCut>
              </div>
            </div>
            <div
              id="colone2"
              className="flex  grow-0 shrink-0 basis-full lg:basis-5/12"
            >
              Designer graphique de formation, passé par les écoles d’Art, je
              suis monté en compétences au fil de ma carrière en me spécialisant
              dans le design numérique et dans le développement d’interfaces
              web. Si j’ai les compétences pour marquer émotionnellement le
              public avec une identité d’entreprise. Ce qui m’anime, au
              quotidien c’est de trouver la meilleur façon de donner vie à vos
              données, dans des interfaces fluides, épurées et facile à
              comprendre. L’ergonomie avant tout !.
            </div>
          </div>
        </section>
        <section className="section-light p-6 sm:mx-6 min-h-svh bg-white text-neutral-500 dark:bg-grayflo dark:text-violet-800  flex flex-col items-center text-xl font-light leading-10">
          <div
            id="therow"
            className="my-auto gap-6 flex flex-wrap justify-between mx-auto max-w-none w-full "
          >
            <div id="colone1" className="">
              <div className="">
                <TitleCut>Designer UI/UX</TitleCut>
                <TitleCut>ou product</TitleCut>
                <TitleCut>designer ?</TitleCut>
              </div>
            </div>
            <div
              id="colone2"
              className="flex  grow-0 shrink-0 basis-full lg:basis-5/12"
            >
              Designer graphique de formation, passé par les écoles d’Art, je
              suis monté en compétences au fil de ma carrière en me spécialisant
              dans le design numérique et dans le développement d’interfaces
              web. Si j’ai les compétences pour marquer émotionnellement le
              public avec une identité d’entreprise. Ce qui m’anime, au
              quotidien c’est de trouver la meilleur façon de donner vie à vos
              données, dans des interfaces fluides, épurées et facile à
              comprendre. L’ergonomie avant tout !.
            </div>
          </div>
        </section>
        <section className="section-accent p-6 sm:mx-6 min-h-svh bg-greenflo text-neutral-500 dark:bg-violet-800 dark:text-grayflo  flex flex-col items-center text-xl font-light leading-10">
          <div
            id="therow"
            className="my-auto gap-6 flex flex-wrap justify-between mx-auto max-w-none w-full "
          >
            <div id="colone1" className="">
              <div className="">
                <TitleCut>Designer UI/UX</TitleCut>
                <TitleCut>ou product</TitleCut>
                <TitleCut>designer ?</TitleCut>
              </div>
            </div>
            <div
              id="colone2"
              className="flex  grow-0 shrink-0 basis-full lg:basis-5/12"
            >
              Designer graphique de formation, passé par les écoles d’Art, je
              suis monté en compétences au fil de ma carrière en me spécialisant
              dans le design numérique et dans le développement d’interfaces
              web. Si j’ai les compétences pour marquer émotionnellement le
              public avec une identité d’entreprise. Ce qui m’anime, au
              quotidien c’est de trouver la meilleur façon de donner vie à vos
              données, dans des interfaces fluides, épurées et facile à
              comprendre. L’ergonomie avant tout !.
            </div>
          </div>
        </section> */}

        {/* <section className=" bg-grayflo text-white dark:text-darkflo px-6 flex flex-col justify-center items-center gap-4 min-h-screen">
          <div className=" bg-greenflo w-full">
            <div className=" xl:ml-[25%] py-20">
              <p className="underline-offset-4 w-auto text-xs p-1 mb-5">
                Developper & creator
              </p>
              <div style={{ gridColumn: "2/5" }} className="">
                <TitleCut>J’imagine & conçois,</TitleCut>
                <TitleCut>pour vous des interfaces</TitleCut>
                <TitleCut>agréables à consulter</TitleCut>
              </div>
            </div>
            <div className="mb-40 xl:ml-[25%] xl:mr-[25%] text-xl font-light leading-10">
              <p className=" ">
                Développeur spécialisé{" "}
                <SpanLogo>
                  <span className="pr-2">
                    <SiJavascript />
                  </span>
                  <span className="text-white">Javascript</span>
                </SpanLogo>{" "}
                je construis et déploie vos applications en m’appuyant sur{" "}
                <SpanLogo>
                  <span className="pr-2">
                    <SiReact />
                  </span>
                  <span className="text-white">React</span>
                </SpanLogo>{" "}
                &{" "}
                <SpanLogo>
                  <span className="pr-2">
                    <SiTypescript />
                  </span>
                  <span className="text-white">typescript.</span>
                </SpanLogo>{" "}
                Pour la partie SCSS, je me sers de{" "}
                <SpanLogo>
                  <span className="pr-2">
                    <SiTailwindcss />
                  </span>
                  <span className="text-white">Tailwind</span>
                </SpanLogo>{" "}
                comme base de production.
              </p>
              <p>
                <br />
                Pour le backend, après avoir initialement été formé dans les
                règles de l’art à l’environnement
                <SpanLogo>
                  <span className="pr-2">
                    <SiRubyonrails />
                  </span>
                  <span className="text-white">Ruby on Rails</span>
                </SpanLogo>
                , je me suis converti depuis un an à la souplesse et la rapidité
                de développement de{" "}
                <SpanLogo>
                  <span className="pr-2">
                    <SiNextdotjs />
                  </span>
                  <span className="text-white">Next JS.</span>
                </SpanLogo>
              </p>{" "}
            </div>
          </div>
        </section>
        <section className=" bg-grayflo text-darkflo dark:text-grayflo px-6 flex flex-col justify-center items-center gap-4 min-h-screen">
          <div className=" bg-white dark:bg-violet-800 w-full">
            <div className=" xl:ml-[25%] py-20">
              <p className="underline-offset-4 w-auto text-xs p-1 mb-5">
                Developper & creator
              </p>
              <div
                style={{ gridColumn: "2/5" }}
                className="text-violet-800 dark:text-grayflo"
              >
                <TitleCut>Designer UI/UX</TitleCut>
                <TitleCut>ou product designer</TitleCut>
                <TitleCut> ?</TitleCut>
              </div>
            </div>
            <div className="mb-40 xl:ml-[25%] xl:mr-[25%] text-xl font-light leading-10">
              <p>

                Designer graphique de formation, passé par les écoles d’Art, je
                suis monté en compétences au fil de ma carrière en me
                spécialisant dans le design numérique et dans le développement
                d’interfaces web. Si j’ai les compétences pour marquer
                émotionnellement le public avec une identité d’entreprise. Ce
                qui m’anime, au quotidien c’est de trouver la meilleur façon de
                donner vie à vos données, dans des interfaces fluides, épurées
                et facile à comprendre. L’ergonomie avant tout !.
              </p>{" "}
            </div>
          </div>
        </section> */}

        {/* <section className=" bg-grayflo text-white dark:text-darkflo px-6 flex flex-col justify-center items-center gap-4 min-h-screen">
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

          <div className="pb-60 mt-10 w-full flex justify-end text-md font-light gap-6 flex-wrap lg:flex-nowrap">
            <div className=" min-h-[55.vh] max-h-[95vh] rounded-3xl overflow-hidden">
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
              </p>
            </div>
          </div>
        </div>
      </section> */}
        {/* <section className=" bg-violet-800 text-grayflo dark:text-grayflo px-6 py-6 flex flex-col justify-center items-center gap-4 min-h-screen">
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
      </section> */}

        {/* <div className="bg-greenflo text-emerald-900 pt-20 px-10 py-10 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-screen">
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
      </div> */}

        {/* <div className=" bg-darkflo text-white pt-20 px-10 py-10 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-screen">
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
      </div> */}
        {/* <div className=" bg-gray-500 text-white pt-20 px-10 py-10 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-screen">
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
            <Video
              videoUrl={
                "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/Square_eagevr.mp4"
              }
            />
          </div>
          <div className="w-[300px]">
            <Video
              videoUrl={
                "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/La-Baraka-2024-03-22-part1_ijyl8g.mp4"
              }
            />
          </div>
        </div>
      </div> */}
        {/* <div className="flex flex-col justify-start items-start p-36">
        <div className=" w-2/3">
          <Video
            videoUrl={
              "https://res.cloudinary.com/dc8rzbrbr/video/upload/v1711397442/goldengate_c8a72q.mp4"
            }
          />
        </div>
      </div> */}
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

        {/* <div className="bg-bluflo text-white pt-20 px-10 py-10 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-screen">

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
      </div> */}
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
      </div>
    </>
  );
};
export default Home;
