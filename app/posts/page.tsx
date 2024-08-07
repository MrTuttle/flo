import prisma from "@/prisma/client";
import React from "react";
import ListPost from "../components/ui/ListPost";
import { SectionBorder } from "../components/ui/containers/SectionBorder";

const pagePost = async () => {
  const postsPublished = await prisma.post.findMany({
    where: { published: true },
  });
  const postsNotPublished = await prisma.post.findMany({
    where: { published: false },
  });
  // const postPublishedCategory = await prisma.post.findMany({
  //   where: {
  //     categories: {
  //       some: {
  //         category: {
  //           name: "stack",
  //         },
  //       },
  //     },
  //   },
  // });
  const postStack = await prisma.post.findMany({
    where: {
      published: true,
      categories: { some: { category: { name: "stack" } } },
    },
    include: {
      categories: {},
    },
    // include:{
    //   categories: {
    //     select: {
    //       category: true,
    //     },
    //   }
    // }
  });

  return (
    <div className="border-8 w-svw">
      <SectionBorder>
        <h1 className="  text-wrap py-20 text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-300">
          Gradient <br />
          Californian <br />
          style
        </h1>
      </SectionBorder>

      <div className="py-2">
        <SectionBorder>
          <div className="text-3xl w-[400px] border">
            <h1 className="">Posts published</h1>
          </div>
          <ListPost posts={postsPublished} />
        </SectionBorder>
      </div>
      <div className="py-2">
        <SectionBorder>
          <div className="text-3xl w-[400px] border">
            <h1 className="">
              Posts <br />
              not published <br />
              yet
            </h1>
          </div>
          <ListPost posts={postsNotPublished} />
        </SectionBorder>
      </div>
      <div className="py-2">
        <SectionBorder>
          <div className="text-3xl w-[400px] border">
            <h1 className="">
              Posts <br />
              stack
            </h1>
          </div>
          <ListPost posts={postStack} />
        </SectionBorder>
      </div>
    </div>
  );
};

export default pagePost;
