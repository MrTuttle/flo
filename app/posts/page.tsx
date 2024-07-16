import prisma from "@/prisma/client";
import React from "react";
import ListPost from "../components/ui/ListPost";
import { SectionBorder } from "../components/ui/containers/SectionBorder";

const pagePost = async () => {
  const posts = await prisma.post.findMany({ where: { published: true } });

  return (
    <SectionBorder>
      <ListPost posts={posts} />
    </SectionBorder>
  );
};

export default pagePost;
