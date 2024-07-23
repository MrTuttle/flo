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

const Page = () => {
  return (
    <>
      <SectionFlo className="border p-10 *:p-2 *:rounded-xl flex gap-2 text-white">
        <div className="bg-teal-600">
          This section is allowed to take children
        </div>
        <div className="bg-sky-600">It can takes TW classes</div>
        <div className="bg-orange-600">
          It wrap children (these DIVs) in a span block relative
        </div>
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
    </>
  );
};

export default Page;
