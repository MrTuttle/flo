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

  return (
    <div>
      <SectionBorder>
        <h1 className="py-20 text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-300">
          Gradient <br />
          Californian style
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
    </div>
  );
};

export default pagePost;
