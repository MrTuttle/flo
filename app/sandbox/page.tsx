import React from "react";
import { Chart } from "../components/charts/Chart";
import { AreaChartGradient } from "../components/charts/AreaChartGradient";
import { Area } from "recharts";

import { GoArrowRight } from "react-icons/go";
import { PictureCard } from "../components/ui/cards/PictureCard";

type PageProps = {
  children?: React.JSX.Element;
  // children?: React.ReactNode;
  bgImage?: string;
  title?: string;
  bgcolor?: "rose" | "teal" | "yellow" | "cyan" | "salmon";
};

const page = ({ children, bgImage, title, bgcolor }: PageProps) => {
  return (
    <>
      {/* <div className="mt-4 mx-auto px-8 border"> */}
      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        <PictureCard
          bgImage="les-cousines"
          title="Bang! you are red!"
          bgcolor="teal"
        >
          <p>Redrum! redrum! redrum!...</p>
        </PictureCard>
        <PictureCard bgImage="les-ophelies" bgcolor="yellow">
          <p className="text-slate-800">Content is optional</p>
        </PictureCard>
      </div>
      {/* </div> */}

      <div className="mt-4 mx-auto px-8 border">
        <div className="flex flex-col md:flex-row justify-between gap-4 ">
          <PictureCard
            bgImage="les-cousines"
            title="Bang! you are red!"
            bgcolor="teal"
          >
            <p>Redrum! redrum! redrum!...</p>
          </PictureCard>
          {/* <Chart /> */}
          <AreaChartGradient />
          {/* <div className="">
            <p className=" columns-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a
              tempora blanditiis voluptates at laboriosam, laudantium animi
              necessitatibus unde cupiditate quae voluptatem distinctio labore
              sequi aliquam nam quos quasi illum.
            </p>
          </div> */}
        </div>
      </div>

      <div className=" px-8 flex justify-center">
        <div className="mt-4 mx-auto px-8 border border-red-400 w-[1200px] overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between gap-4 ">
            <ul>
              <li className=" list-none group/item hover:cursor-pointer w-full md:hover:w-[160%] transition-all ease-in-out duration-300">
                <div
                  // style={{
                  //   backgroundImage: `url("/revolver.png")`,
                  // }}
                  className="md:relative overflow-hidden  rounded-xl h-full bg-stone-100 dark:bg-neutral-800/95 dark:text-white text-gray-800 transition-all ease-in-out duration-300"
                  // style={{ backgroundImage: `url(${Picture})` }}
                  style={{
                    backgroundColor: "rgb(244 63 94)",
                    // backgroundColor: `red`,
                  }}
                >
                  <div
                    className="aspect-video md:aspect-auto md:absolute w-auto   md:w-full md:h-full bg-center bg-cover md:group-hover/item:opacity-0 transition-all ease-in-out duration-300"
                    style={{
                      backgroundImage: `url("/${bgImage}.png")`,
                    }}
                  >
                    <Chart />
                    {/* <AreaChartGradient /> */}
                    {/* <div className="w-3/12">
                    <p className=" columns-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit a tempora blanditiis voluptates at laboriosam,
                      laudantium animi necessitatibus unde cupiditate quae
                      voluptatem distinctio labore sequi aliquam nam quos quasi
                      illum.
                    </p>
                  </div> */}
                  </div>

                  <div className="overflow-hidden h-full flex flex-col md:p-12 justify-between transition-all ease-in-out duration-300">
                    <div className="pt-4 px-4 md:px-0">
                      <div className="  flex flex-col justify-end  md:w-72 ">
                        <h3
                          className="md:translate-y-52 font-headings tracking-tight scroll-mt-[120px] text-4xl font-light md:text-5xl 2xl:2xl md:font-medium md:group-hover/item:-translate-y-1 ease-in-out duration-500 "
                          style={
                            bgImage ? { color: "white" } : { color: "black" }
                          }
                        >
                          {title}
                        </h3>
                        <div className="md:translate-y-52 flex flex-col gap-8 md:opacity-0 md:group-hover/item:opacity-100 text-xl md:text-2xl my-6 print:my-2 text-gray-500 dark:text-gray-400/80 md:group-hover/item:-translate-y-1 ease-in-out duration-700 ">
                          <div
                            className=""
                            style={
                              bgImage ? { color: "white" } : { color: "black" }
                            }
                          >
                            Text de survol
                          </div>
                          <div className="bg-white w-8 h-8 md:w-12 md:h-12 rounded-full text-black flex justify-center items-center">
                            <GoArrowRight className="" />
                          </div>
                        </div>
                      </div>
                      {/* <Image src={Picture} alt="image" /> */}
                      {/* <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify mt-4 max-w-[46em] group-hover/item:-translate-y-1 ease-in-out duration-300">
            <p className=" line-clamp-5 my-6 first:mt-0 last:mb-0 print:my-2 text-gray-500 dark:text-gray-400/80 group-hover/item:dark:text-gray-400">
            Meet the aero electric RV that will change how you travel
            </p>
            </div> */}
                    </div>
                  </div>
                </div>
              </li>
              <li className=" list-none group/item hover:cursor-pointer w-full md:hover:w-[160%] transition-all ease-in-out duration-300">
                <div
                  // style={{
                  //   backgroundImage: `url("/revolver.png")`,
                  // }}
                  className="md:relative overflow-hidden  rounded-xl h-full bg-stone-100 dark:bg-neutral-800/95 dark:text-white text-gray-800 transition-all ease-in-out duration-300"
                  // style={{ backgroundImage: `url(${Picture})` }}
                  style={{
                    backgroundColor: "rgb(148 163 184)",
                    // backgroundColor: `red`,
                  }}
                >
                  <div
                    className="aspect-video md:aspect-auto md:absolute w-auto   md:w-full md:h-full bg-center bg-cover md:group-hover/item:opacity-0 transition-all ease-in-out duration-300"
                    style={{
                      backgroundImage: `url("/${bgImage}.png")`,
                    }}
                  ></div>

                  <div className="overflow-hidden h-full flex flex-col md:p-12 justify-between transition-all ease-in-out duration-300">
                    <div className="pt-4 px-4 md:px-0">
                      <div className="  flex flex-col justify-end  md:w-72 ">
                        <h3
                          className="md:translate-y-52 font-headings tracking-tight scroll-mt-[120px] text-4xl font-light md:text-5xl 2xl:2xl md:font-medium md:group-hover/item:-translate-y-1 ease-in-out duration-500 "
                          style={
                            bgImage ? { color: "white" } : { color: "black" }
                          }
                        >
                          {title}
                        </h3>
                        <div className="md:translate-y-52 flex flex-col gap-8 md:opacity-0 md:group-hover/item:opacity-100 text-xl md:text-2xl my-6 print:my-2 text-gray-500 dark:text-gray-400/80 md:group-hover/item:-translate-y-1 ease-in-out duration-700 ">
                          <div
                            className=""
                            style={
                              bgImage ? { color: "white" } : { color: "black" }
                            }
                          >
                            Texte de survol
                          </div>
                          <div className="bg-white w-8 h-8 md:w-12 md:h-12 rounded-full text-black flex justify-center items-center">
                            <GoArrowRight className="" />
                          </div>
                        </div>
                      </div>
                      {/* <Image src={Picture} alt="image" /> */}
                      {/* <div className="font-copy text-base 2xl:text-md font-medium print:text-[12px] print:text-justify mt-4 max-w-[46em] group-hover/item:-translate-y-1 ease-in-out duration-300">
            <p className=" line-clamp-5 my-6 first:mt-0 last:mb-0 print:my-2 text-gray-500 dark:text-gray-400/80 group-hover/item:dark:text-gray-400">
            Meet the aero electric RV that will change how you travel
            </p>
            </div> */}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
