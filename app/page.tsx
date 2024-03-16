import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import flo from "@/public/avatar/Florent-Vincerot-avatar-circle.png";
import HomeHeroContent from "@/components/home/HomeHeroContent";
import WindowsSizeDetector from "@/components/utlis/WindowsSizeDetector";

export default function Home() {
  return (
    <>
      {/* <WindowsSizeDetector /> */}
      {/* <div className="home-hero-curtain gutters bgwhite-fontblack">ghghghg</div> */}
      {/* <div className="home-hero-visible"> */}
      <div className="home-hero-curtain text-black bg-white h-[100svh]">
        <div className="px-8">
          <h1 className=" text-9xl">Welcome</h1>
        </div>
      </div>
      <HomeHeroContent />
      {/* </div> */}

      <div className="bg-slate-600 h-svh z-10">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nesciunt pariatur quae sint. Eos sunt
          veritatis cum! Delectus, vitae illum? Molestiae delectus assumenda
          reiciendis incidunt cum. Praesentium beatae quaerat dignissimos
          voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nesciunt pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae
          illum? Molestiae delectus assumenda reiciendis incidunt cum.
          Praesentium beatae quaerat dignissimos voluptas? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nesciunt pariatur quae sint. Eos
          sunt veritatis cum! Delectus, vitae illum? Molestiae delectus
          assumenda reiciendis incidunt cum. Praesentium beatae quaerat
          dignissimos voluptas?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt pariatur quae sint. Eos sunt veritatis cum!
          Delectus, vitae illum? Molestiae delectus assumenda reiciendis
          incidunt cum. Praesentium beatae quaerat dignissimos voluptas? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur
          quae sint. Eos sunt veritatis cum! Delectus, vitae illum? Molestiae
          delectus assumenda reiciendis incidunt cum. Praesentium beatae quaerat
          dignissimos voluptas?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt pariatur quae sint. Eos sunt veritatis cum!
          Delectus, vitae illum? Molestiae delectus assumenda reiciendis
          incidunt cum. Praesentium beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
      </div>
      <div className="bg-slate-800 h-svh z-10">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nesciunt pariatur quae sint. Eos sunt
          veritatis cum! Delectus, vitae illum? Molestiae delectus assumenda
          reiciendis incidunt cum. Praesentium beatae quaerat dignissimos
          voluptas? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nesciunt pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae
          illum? Molestiae delectus assumenda reiciendis incidunt cum.
          Praesentium beatae quaerat dignissimos voluptas? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nesciunt pariatur quae sint. Eos
          sunt veritatis cum! Delectus, vitae illum? Molestiae delectus
          assumenda reiciendis incidunt cum. Praesentium beatae quaerat
          dignissimos voluptas?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt pariatur quae sint. Eos sunt veritatis cum!
          Delectus, vitae illum? Molestiae delectus assumenda reiciendis
          incidunt cum. Praesentium beatae quaerat dignissimos voluptas? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur
          quae sint. Eos sunt veritatis cum! Delectus, vitae illum? Molestiae
          delectus assumenda reiciendis incidunt cum. Praesentium beatae quaerat
          dignissimos voluptas?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nesciunt pariatur quae sint. Eos sunt veritatis cum!
          Delectus, vitae illum? Molestiae delectus assumenda reiciendis
          incidunt cum. Praesentium beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          pariatur quae sint. Eos sunt veritatis cum! Delectus, vitae illum?
          Molestiae delectus assumenda reiciendis incidunt cum. Praesentium
          beatae quaerat dignissimos voluptas?
        </p>
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
