import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HomeHeroContent from "@/components/home/HomeHeroContent";
import WindowsSizeDetector from "@/components/utlis/WindowsSizeDetector";
import ParagrapheColones from "@/components/ui/ParagrapheColones";
import TitleRevealCut from "@/components/ui/TitleRevealCut";
import TitleCut from "@/components/ui/TitleCut";

export default function Home() {
  return (
    <>
      {/* <WindowsSizeDetector /> */}
      {/* <div className="home-hero-curtain gutters bgwhite-fontblack">ghghghg</div> */}
      {/* <div className="home-hero-visible"> */}{" "}
      <div className="fixed z-50 top-0 right-0 p-4">
        <ModeToggle />
      </div>
      <div className="home-hero-curtain bg-white dark:bg-darkflo h-[100svh]">
        <div className="px-8">
          {" "}
          <h1 className=" text-4xl text-darkflo dark:text-white">My name is</h1>
          <h1 className="text-9xl text-darkflo dark:text-white font-black tracking-[-0.3rem]">
            FLO
          </h1>
        </div>
      </div>
      <HomeHeroContent />
      {/* </div> */}
      <ParagrapheColones>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
        Molestiae delectus assumenda reiciendis incidunt cum. Praesentium beatae
        quaerat dignissimos voluptas? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nesciunt pariatur quae sint. Eos sunt veritatis cum!
        Delectus, vitae illum? Molestiae delectus assumenda reiciendis incidunt
        cum. Praesentium beatae quaerat dignissimos voluptas?
      </ParagrapheColones>
      <div className="bg-bluflo pt-20 px-20 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-svh">
        {/* <div className="text-white text-4xl sm:text-6xl md:text-7xl sm:pb-20">
          <h1>Mobile first, l’accès direct au net, c’est dans la poche! </h1>
        </div> */}
        <p className=" underline underline-offset-4 w-auto  text-white text-xs p-1 mb-5">
          TitleCut : Xperimental animation-timeline css
        </p>
        <div className="sm:mb-5">
          <TitleRevealCut>Mobile first,</TitleRevealCut>
          <TitleRevealCut>l’accès direct au net,</TitleRevealCut>
          <TitleRevealCut>c’est dans la poche!</TitleRevealCut>
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
      <ParagrapheColones>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
        Molestiae delectus assumenda reiciendis incidunt cum. Praesentium beatae
        quaerat dignissimos voluptas? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nesciunt pariatur quae sint. Eos sunt veritatis cum!
        Delectus, vitae illum? Molestiae delectus assumenda reiciendis incidunt
        cum. Praesentium beatae quaerat dignissimos voluptas?
      </ParagrapheColones>
      <div className="bg-bluflo pt-20 px-20 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-svh">
        {/* <div className="text-white text-4xl sm:text-6xl md:text-7xl sm:pb-20">
          <h1>Mobile first, l’accès direct au net, c’est dans la poche! </h1>
        </div> */}
        <p className=" underline underline-offset-4 w-auto  text-white text-xs p-1 mb-5">
          TitleCut : JS safari friendly
        </p>
        <div>
          <TitleCut>J’imagine & conçois</TitleCut>
          <TitleCut>pour vous des sites</TitleCut>
          <TitleCut>agréables à consulter</TitleCut>
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
      <div className="bg-bluflo pt-20 px-20 md:px-30 lg:px-40 xl:px-80 flex flex-col justify-center gap-4 min-h-svh">
        {/* <div className="text-white text-4xl sm:text-6xl md:text-7xl sm:pb-20">
          <h1>Mobile first, l’accès direct au net, c’est dans la poche! </h1>
        </div> */}
        <p className=" underline underline-offset-4 w-auto  text-white text-xs p-1 mb-5">
          TitleCut : JS safari friendly
        </p>
        <div>
          <TitleCut>J’imagine & conçois</TitleCut>
          <TitleCut>pour vous des sites</TitleCut>
          <TitleCut>agréables à consulter</TitleCut>
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
