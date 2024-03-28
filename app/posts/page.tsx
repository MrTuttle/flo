import prisma from "@/prisma/client";
import React from "react";
import ListPost from "../components/ui/ListPost";

const page = async () => {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <ListPost posts={posts} />
    </div>
  );
};

export default page;
