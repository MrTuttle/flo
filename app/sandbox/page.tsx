import React from "react";
import { Chart } from "../components/charts/Chart";
import { AreaChartGradient } from "../components/charts/AreaChartGradient";
import { Area } from "recharts";

import { GoArrowRight } from "react-icons/go";
import { PictureCard } from "../components/ui/cards/PictureCard";

import { PictureCardProps } from "../components/ui/cards/PictureCard";
import {
  SectionBorder,
  SectionWide,
} from "../components/ui/containers/SectionBorder";
import SectionFlo from "../components/ui/containers/SectionFlo";
import CarouselTW from "../components/ui/carousels/CarouselTW";
import Link from "next/link";
import Image from "next/image";
import LesCousines from "@/public/les-cousines.png";
import LesOphelies from "@/public/les-ophelies.png";
import LeNuageNoir from "@/public/le-nuage-noir.png";
import Minipill from "../components/ui/pills/Minipill";
import TsTest from "../components/ui/tests/TsTest";

import { Cat, Dog } from "../components/ui/tests/TsTest";

import RevealText from "../components/text/revealtext";
const cats: Cat[] = [
  {
    name: "Felix",
    age: 2,
    color: "black",
  },
  {
    name: "Garfield",
    age: 3,
    color: "orange",
  },
];
const dogs: Dog[] = [
  {
    name: "Rex",
    age: 5,
    color: "brown",
  },
  {
    name: "Rexy",
    age: 4,
    color: "black",
  },
];

const Page = () => {
  const bgimg = `w-full relative bg-slate-500 p-10 bg-[url('/les-ophelies.png')] bg-cover bg-center`;
  return (
    <>
      <SectionFlo className="  p-10 flex flex-wrap gap-2">
        Experimentation : Typescript calls
      </SectionFlo>
      {/* <SectionBorder>
        <TsTest />
        {cats.map((cat) => (
          <TsTest key={cat.name} cat={cat} />
        ))}
      </SectionBorder> */}

      <SectionFlo className="  p-10 flex flex-wrap gap-2">
        Experimentation : a dark mode glass pill on a tailwind background image
        cover -
      </SectionFlo>
      <SectionBorder>
        <div className={bgimg}>
          {" "}
          <Minipill>glass minipill</Minipill>
          <div className=" absolute top-4 right-10">
            <Minipill />
          </div>
        </div>
      </SectionBorder>

      <SectionFlo className="p-10 flex flex-wrap gap-2">
        <div className="font-bold">Experimentation :</div>
        <div>Flex wide component</div>
        <div className="font-bold">Usage :</div>
        <div>need to change last child order in mobile</div>
        <div className="font-bold">Carreful :</div>
        <div>
          must add a div container if we wrapped in SectionBorder component
        </div>
      </SectionFlo>
      <SectionBorder>
        <div className="py-20" /* div container*/>
          <div className="flex flex-wrap">
            <div className="border basis-full sm:basis-1/2 flex flex-col justify-center gap-4 p-20  w-full   border-cyan-500">
              <h1 className="text-slate-950 text-4xl font-bold">Allure</h1>
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci quidem ipsam sequi blanditiis inventore consequuntur
                fugiat fugit corrupti mollitia, facilis doloremque eius, ut,
                laudantium provident autem ad ipsa nobis commodi.
              </p>
            </div>
            {/* <div className="basis-full sm:basis-1/2 flex flex-col gap-4 p-20 w-full   bg-cyan-500"> */}

            <Image
              src={LeNuageNoir}
              alt="les cousines"
              width={300}
              height={300}
              className="basis-full sm:basis-1/2 object-cover"
            />
          </div>
          {/* </div> */}
          {/* <div className="basis-full sm:basis-1/2 flex flex-col gap-4 p-20 w-full   bg-cyan-500"> */}
          <div className="flex flex-wrap-reverse">
            <Image
              src={LesOphelies}
              alt="les cousines"
              width={300}
              height={300}
              className="basis-full sm:basis-1/2 object-cover"
            />
            {/* </div> */}

            <div className="basis-full sm:basis-1/2 flex flex-col justify-center gap-4 p-20  w-full border   border-cyan-500">
              <h1 className="text-slate-950 text-4xl font-bold">Wander</h1>
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci quidem ipsam sequi blanditiis inventore consequuntur
                fugiat fugit corrupti mollitia, facilis doloremque eius, ut,
                laudantium provident autem ad ipsa nobis commodi.
              </p>
            </div>
          </div>
        </div>
      </SectionBorder>
      <SectionFlo className="  p-10 flex flex-wrap gap-2 border border-red-300 h-80">
        <div className="text-4xl p-8">
          <RevealText>
            Mon super texte à révéler (composant RevealText) change l’opacité
            quand il est “inview” pour framer motion
          </RevealText>
        </div>
      </SectionFlo>
      <SectionFlo className="p-10 flex flex-wrap gap-2">
        <div className="font-bold">Experimentation :</div>
        <div>Flex wide component</div>
        <div className="font-bold">Usage :</div>
        <div>need to change last child order in mobile</div>
      </SectionFlo>
      <div className="flex flex-wrap">
        <div className="border basis-full sm:basis-1/2 flex flex-col justify-center gap-4 p-20  w-full   border-cyan-500">
          <h1 className="text-slate-950 text-4xl font-bold">Allure</h1>
          <p className="text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quidem ipsam sequi blanditiis inventore consequuntur fugiat fugit
            corrupti mollitia, facilis doloremque eius, ut, laudantium provident
            autem ad ipsa nobis commodi.
          </p>
        </div>
        {/* <div className="basis-full sm:basis-1/2 flex flex-col gap-4 p-20 w-full   bg-cyan-500"> */}
        <Image
          src={LeNuageNoir}
          alt="les cousines"
          width={300}
          height={300}
          className="basis-full sm:basis-1/2 object-cover"
        />
      </div>
      {/* </div> */}
      {/* <div className="basis-full sm:basis-1/2 flex flex-col gap-4 p-20 w-full   bg-cyan-500"> */}
      <div className="flex flex-wrap-reverse">
        <Image
          src={LesOphelies}
          alt="les cousines"
          width={300}
          height={300}
          className="basis-full sm:basis-1/2 object-cover"
        />
        {/* </div> */}

        <div className="basis-full sm:basis-1/2 flex flex-col justify-center gap-4 p-20  w-full border   border-cyan-500">
          <h1 className="text-slate-950 text-4xl font-bold">Wander</h1>
          <p className="text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quidem ipsam sequi blanditiis inventore consequuntur fugiat fugit
            corrupti mollitia, facilis doloremque eius, ut, laudantium provident
            autem ad ipsa nobis commodi.
          </p>
        </div>
      </div>
      <SectionFlo className="p-10 flex gap-2 flex-wrap">
        <div className="font-bold">Experimentation :</div>
        <div>
          Flex wide component, fit well in SectioBorder, but doesn’t switch
          order in mobile
        </div>
      </SectionFlo>
      <SectionBorder>
        <div className="flex flex-wrap">
          <div className="border basis-full md:basis-1/2 flex flex-col justify-center gap-4 p-20  w-full   border-cyan-500">
            <h1 className="text-slate-950 text-4xl font-bold">Allure</h1>
            <p className="text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quidem ipsam sequi blanditiis inventore consequuntur fugiat fugit
              corrupti mollitia, facilis doloremque eius, ut, laudantium
              provident autem ad ipsa nobis commodi.
            </p>
          </div>
          {/* <div className="basis-full md:basis-1/2 flex flex-col gap-4 p-20 w-full   bg-cyan-500"> */}
          <Image
            src={LeNuageNoir}
            alt="les cousines"
            width={300}
            height={300}
            className="basis-full md:basis-1/2 object-cover"
          />
          {/* </div> */}
          {/* <div className="basis-full md:basis-1/2 flex flex-col gap-4 p-20 w-full   bg-cyan-500"> */}
          <Image
            src={LesOphelies}
            alt="les cousines"
            width={300}
            height={300}
            className="basis-full md:basis-1/2 object-cover"
          />
          {/* </div> */}

          <div className="basis-full md:basis-1/2 flex flex-col justify-center gap-4 p-20  w-full border   border-cyan-500">
            <h1 className="text-slate-950 text-4xl font-bold">Wander</h1>
            <p className="text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quidem ipsam sequi blanditiis inventore consequuntur fugiat fugit
              corrupti mollitia, facilis doloremque eius, ut, laudantium
              provident autem ad ipsa nobis commodi.
            </p>
          </div>
        </div>
      </SectionBorder>
      <SectionFlo className="border p-10 *:p-2 *:rounded-xl flex gap-2 text-white">
        <div className="bg-teal-600">
          This section is allowed to take children
        </div>
        <div className="bg-sky-600">It can takes TW classes</div>
        <div className="bg-orange-600">
          It wrap children (these DIVs) in a span block relative
        </div>
      </SectionFlo>
      <SectionFlo className="p-10 flex gap-2">
        <div className="font-bold">Experimentation :</div>
        <div>A tailwind carousel component CarouselTW</div>
      </SectionFlo>
      {/* <div className="mt-4 mx-auto px-8 border"> */}
      <SectionWide>
        <CarouselTW className=" scroll-pl-20 border bg-slate-700 *:rounded-xl *:bg-slate-800 *:w-[45vw] md:*:w-[75v] *:overflow-hidden">
          <div className="relative bg-rose-800 w-full h-full ">
            <div className="absolute w-full h-full border border-white flex justify-center items-center">
              <p>Allo</p>
            </div>
            <Image
              src={LeNuageNoir}
              alt="les cousines"
              width={400}
              height={400}
              className=" object-cover p-2"
            />
          </div>
          <div className="border border-red-500 bg-slate-200 ">
            <Image
              src={LesOphelies}
              alt="les cousines"
              width={400}
              height={400}
              className="rounded-lg h-full w-auto"
            />
          </div>
          <div className="border border-red-500 bg-slate-200 ">
            <Image
              src={LesCousines}
              alt="les cousines"
              width={400}
              height={400}
              className="rounded-lg h-full w-auto"
            />
          </div>
        </CarouselTW>
      </SectionWide>
      <SectionFlo className="p-10 flex gap-2">
        <div className="font-bold">Experimentation :</div>
        <div>Manuel setting of Tailwind carousel</div>
      </SectionFlo>
      <div className="relative w-[100%] overflow-hidden ">
        <div className=" bg-slate-200 dark:bg-slate-800/25 text-white">
          <div className="snap-x flex gap-4  snap-mandatory scroll-pl-12 overflow-x-auto py-14">
            <div className=" snap-center shrink-0 ">
              <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-violet-600 via-violet-900 to-violet-950 flex items-center justify-center">
                A
              </div>
            </div>
            <div className=" snap-center shrink-0 ">
              <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-purple-600 via-purple-900 to-purple-950 flex items-center justify-center">
                B
              </div>
            </div>
            <div className=" snap-center shrink-0 ">
              <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-fuchsia-600 via-fuchsia-900 to-fuchsia-950 flex items-center justify-center">
                C
              </div>
            </div>
            <div className=" snap-center shrink-0 ">
              <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-rose-600 via-rose-900 to-rose-950 flex items-center justify-center">
                D
              </div>
            </div>
            <div className=" snap-center shrink-0 ">
              <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b bg from-red-600 via-red-900 to-red-950 flex items-center justify-center">
                E
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionFlo className="p-10 flex gap-2 flex-wrap">
        <div className="font-bold">Experimentation :</div>
        <div>my PictureCard wraped in my SectionBorder container</div>
      </SectionFlo>

      <SectionBorder>
        <PictureCard
          bgImage="les-cousines"
          title="Bang! you are red!"
          bgcolor="teal"
        >
          <p>Redrum! redrum! redrum!...</p>
        </PictureCard>
        <PictureCard
          bgImage="les-cousines"
          title="Bang! you are red!"
          bgcolor="teal"
        >
          <p>Redrum! redrum! redrum!...</p>
        </PictureCard>
      </SectionBorder>
      <SectionFlo className="p-10 flex gap-2 flex-wrap">
        <div className="font-bold">Experimentation :</div>
        <div>my PictureCard component with different contents</div>
      </SectionFlo>

      <div className="px-4 pt-4 sm:px-0 sm:max-w-7xl sm:mx-auto ">
        <div className="flex flex-col md:flex-row justify-between gap-4 ">
          <PictureCard
            bgImage="les-cousines"
            title="Bang! you are red!"
            bgcolor="teal"
          >
            <p>Redrum! redrum! redrum!...</p>
          </PictureCard>
          <AreaChartGradient />
          <Chart />
        </div>
      </div>
      <SectionFlo className="p-10 flex gap-2 flex-wrap">
        <div className="font-bold">Experimentation :</div>
        <div>first manual try of Tailwind carousel</div>
      </SectionFlo>
      <div className="px-4 pt-4 sm:px-0 sm:max-w-7xl sm:mx-auto ">
        <div className="relative bg-slate-200 rounded-xl overflow-hidden dark:bg-slate-800/25">
          <div className="snap-x w-full flex gap-8  scroll-pl-12 overflow-x-auto py-14">
            <div className=" snap-start shrink-0 first:pl-6 last:pr-[calc(100%-21.5rem)]">
              <div className="shrink-0 w-96 aspect-video rounded-lg shadow-xl bg-gradient-to-b from-violet-600 via-violet-900 to-violet-950 flex items-center justify-center">
                1
              </div>
            </div>
            <div className=" snap-start shrink-0 first:pl-6 last:pr-[calc(100%-21.5rem)]">
              <div className="shrink-0 w-96 aspect-video rounded-lg shadow-xl bg-gradient-to-b from-purple-600 via-purple-900 to-purple-950 flex items-center justify-center">
                2
              </div>
            </div>
            <div className=" snap-start shrink-0 first:pl-6 last:pr-[calc(100%-21.5rem)]">
              <div className="shrink-0 w-96 aspect-video rounded-lg shadow-xl bg-gradient-to-b from-fuchsia-600 via-fuchsia-900 to-fuchsia-950 flex items-center justify-center">
                3
              </div>
            </div>
            <div className=" snap-start shrink-0 first:pl-6 last:pr-[calc(100%-21.5rem)]">
              <div className="shrink-0 w-96 aspect-video rounded-lg shadow-xl bg-gradient-to-b from-rose-600 via-rose-900 to-rose-950 flex items-center justify-center">
                4
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionFlo className="p-10 flex gap-2 flex-wrap">
        <div className="font-bold">Experimentation :</div>
        <div>SectionBorder container</div>
      </SectionFlo>
      <SectionBorder>
        <div className="mt-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-4 snap-proximity snap-x *:w-160 ">
            <div className="snap-start rounded-xl p-4 flex flex-col gap-4 justify-end bg-gradient-to-b from-violet-600 via-violet-900 to-violet-950">
              <h3 className="text-4xl md:text-5xl">hjhj</h3>
              <p className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis facere optio nostrum adipisci .
              </p>
            </div>
            <div className="snap-start rounded-xl p-4 flex flex-col gap-4 justify-end bg-gradient-to-b from-purple-600 via-purple-900 to-purple-950">
              <h3 className="text-4xl md:text-5xl">hjhj</h3>
              <p className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis facere optio nostrum adipisci .
              </p>
            </div>
            <div className="snap-start text-white rounded-xl p-4 flex flex-col gap-4 justify-end bg-gradient-to-b bg from-fuchsia-600 via-fuchsia-900 to-fuchsia-950">
              <h3 className="text-4xl md:text-5xl">hjhj</h3>
              <p className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis facere optio nostrum adipisci .
              </p>
            </div>
            <div className="snap-start text-white rounded-xl p-4 flex flex-col gap-4 justify-end bg-gradient-to-b bg from-pink-600 via-pink-900 to-pink-950">
              <h3 className="text-4xl md:text-5xl">hjhj</h3>
              <p className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis facere optio nostrum adipisci .
              </p>
            </div>
            <div className="snap-start text-white rounded-xl p-4 flex flex-col gap-4 justify-end bg-gradient-to-b bg bg from-rose-600 via-rose-900 to-rose-950">
              <h3 className="text-4xl md:text-5xl">hjhj</h3>
              <p className="text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis facere optio nostrum adipisci .
              </p>
            </div>
          </div>
        </div>
      </SectionBorder>
      <SectionFlo className="p-10 flex gap-2 flex-wrap">
        <div className="font-bold">Experimentation :</div>
        <div>SectionBorder with one PictureCard and natural divs</div>
      </SectionFlo>

      <SectionBorder>
        <PictureCard
          bgImage="les-cousines"
          title="Bang! you are red!"
          bgcolor="teal"
        >
          <p>Redrum! redrum! redrum!...</p>
        </PictureCard>
        <div className="bg-slate-500 rounded-xl p-4 flex flex-col gap-4 justify-end">
          <h3 className="text-4xl md:text-5xl">hjhj</h3>
          <p className="text-xl md:text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            facere optio nostrum adipisci fuga mollitia perferendis voluptate
            ipsam explicabo cupiditate modi ut, culpa quisquam asperiores eum.
            Ipsam quo ratione quas.
          </p>
        </div>
        <div className=" rounded-xl p-4 flex flex-col gap-4 justify-end bg-gradient-to-b from-violet-700 via-violet-900 to-violet-950">
          <h3 className="text-4xl md:text-5xl">hjhj</h3>
          <p className="text-xl md:text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            facere optio nostrum adipisci fuga mollitia perferendis voluptate
            ipsam explicabo cupiditate modi ut, culpa quisquam asperiores eum.
            Ipsam quo ratione quas.
          </p>
        </div>
      </SectionBorder>
      <SectionFlo className="p-10 flex gap-2 flex-wrap">
        <div className="font-bold">Experimentation :</div>
        <div>Tailwind carousel in SectionBorder</div>
      </SectionFlo>
      <SectionBorder>
        <div className="relative w-[100%] overflow-hidden ">
          <div className=" bg-slate-200 dark:bg-slate-800/25 text-white">
            <div className="snap-x flex gap-4  snap-mandatory scroll-pl-12 overflow-x-auto py-14">
              <div className=" snap-center shrink-0 ">
                <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-violet-600 via-violet-900 to-violet-950 flex items-center justify-center">
                  A
                </div>
              </div>
              <div className=" snap-center shrink-0 ">
                <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-purple-600 via-purple-900 to-purple-950 flex items-center justify-center">
                  B
                </div>
              </div>
              <div className=" snap-center shrink-0 ">
                <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-fuchsia-600 via-fuchsia-900 to-fuchsia-950 flex items-center justify-center">
                  C
                </div>
              </div>
              <div className=" snap-center shrink-0 ">
                <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-rose-600 via-rose-900 to-rose-950 flex items-center justify-center">
                  D
                </div>
              </div>
              <div className=" snap-center shrink-0 ">
                <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b bg from-red-600 via-red-900 to-red-950 flex items-center justify-center">
                  E
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionBorder>
      <SectionFlo className="p-10 flex gap-2 flex-wrap">
        <div className="font-bold">Experimentation :</div>
        <div>Tailwind carousel in SectionWide</div>
      </SectionFlo>
      <SectionWide>
        <div className="relative w-[100%] overflow-hidden ">
          <div className=" bg-slate-200 dark:bg-slate-800/25 text-white">
            <div className="snap-x flex gap-4  snap-mandatory scroll-pl-12 overflow-x-auto py-14">
              <div className=" snap-center shrink-0 ">
                <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-violet-600 via-violet-900 to-violet-950 flex items-center justify-center">
                  A
                </div>
              </div>
              <div className=" snap-center shrink-0 ">
                <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-purple-600 via-purple-900 to-purple-950 flex items-center justify-center">
                  B
                </div>
              </div>
              <div className=" snap-center shrink-0 ">
                <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-fuchsia-600 via-fuchsia-900 to-fuchsia-950 flex items-center justify-center">
                  C
                </div>
              </div>
              <div className=" snap-center shrink-0 ">
                <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b from-rose-600 via-rose-900 to-rose-950 flex items-center justify-center">
                  D
                </div>
              </div>
              <div className=" snap-center shrink-0 ">
                <div className="shrink-0 w-[75vw] aspect-video rounded-lg shadow-xl bg-gradient-to-b bg from-red-600 via-red-900 to-red-950 flex items-center justify-center">
                  E
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWide>
    </>
  );
};

export default Page;
