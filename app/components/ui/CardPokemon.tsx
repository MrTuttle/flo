"use client"; // client for use <style jsx> for background-image
import React from "react";

export const CardPokemon = () => {
  return (
    <>
      <style jsx /* create css class .bg-pattern to call background image */>
        {`
          .bg-pattern {
            background-image: url(https://res.cloudinary.com/dc8rzbrbr/image/upload/v1712908980/kiwihug-MS9Tnh3if1o-unsplash_tdmmey.jpg);
          }
        `}
      </style>
      <div className=" backdrop-blur-sm bg-white/30 relative overflow-hidden w-full max-w-[360px] aspect-cardGoldNumberV rounded-32 ">
        <div className="absolute overflow-hidden inset-4 rounded-32 bg-white flex flex-col">
          {/* <div className=" flex-1 bg-slate-100 bg-[url(https://res.cloudinary.com/dc8rzbrbr/image/upload/v1712906688/Front-end_jay6bc.png)] bg-cover"></div> */}
          <div className="relative flex-1 bg-pattern bg-slate-100 bg-cover">
            <img
              src="https://res.cloudinary.com/dc8rzbrbr/image/upload/v1712906688/Front-end_jay6bc.png"
              alt="flo"
              className="w-[70%] px-4 pb-4"
            />
            <div className="absolute p-2 bottom-0 inset-x-2 flex space-x-3 text-xs bg-black text-gray-500 translate-y-2/4 rounded-xl">
              <span className=" space-x-1 flex items-center">
                <b className="text-white text-lg">10</b>
                <span className=" line-clamp-1">
                  Bouzoufs et autres baratins pour peter la ligne à clamper
                </span>
              </span>
              <span className=" space-x-1 flex items-center">
                <b className="text-white text-lg">10</b>
                <span className=" line-clamp-1">Bouzoufs</span>
              </span>
            </div>
          </div>
          <div className=" flex-1 text-black px-2 pb-2">
            <div className="shadow-[rgba(0,0,0,0.2)_0px_2px_3px] h-full rounded-32 px-4">
              <div className=" pt-8 ">
                <h1 className=" font-bold text-2xl">Florent Vincerot</h1>
                <div className="text-xs space-x-2">
                  <span>@flo</span>
                  <span className="text-gray-500">1er Avril </span>
                </div>
              </div>
              <hr className="my-4" />
              <div className="text-xs flex gap-2 flex-wrap">
                {[
                  "#css",
                  "#data-analysis",
                  "#database",
                  "#frontend",
                  "#cli",
                ].map((tag) => (
                  <span key={tag} className="border px-2 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
