import { Post } from "@prisma/client";

import React from "react";

interface ListPostProps {
  posts: Post[];
}

const ListPost = ({ posts }: ListPostProps) => {
  // const posts = await prisma.post.findMany();

  // red orange amber yellow lime green emerald teal cyan light-blue blue indigo violet purple fuchsia pink rose

  const grads = [
    " dark:from-teal-700/50 dark:via-teal-900/50 dark:to-teal-950/50 dark:hover:from-teal-700/80 dark:hover:via-teal-900/80 dark:hover:to-teal-950/80 from-teal-700 via-teal-900 to-teal-950 ",
    " dark:from-cyan-700/50 dark:via-cyan-900/50 dark:to-cyan-950/50 dark:hover:from-cyan-700/80 dark:hover:via-cyan-900/80 dark:hover:to-cyan-950/80 from-cyan-700 via-cyan-900 to-cyan-950",
    " dark:from-sky-700/50 dark:via-sky-900/50 dark:to-sky-950/50 dark:hover:from-sky-700/80 dark:hover:via-sky-900/80 dark:hover:to-sky-950/80 from-sky-700 via-sky-900 to-sky-950",
    " dark:from-blue-700/50 dark:via-blue-900/50 dark:to-blue-950/50 dark:hover:from-blue-700/80 dark:hover:via-blue-900/80 dark:hover:to-blue-950/80 from-blue-700 via-blue-900 to-blue-950",
  ];
  const shape: string =
    "rounded-xl p-8 flex flex-col gap-4 justify-end flex-1 text-white bg-gradient-to-br  ";
  return (
    <>
      {posts.map((e, index) => (
        <div key={e.id} className={shape + " " + grads[index]}>
          <h1 className="text-xl md:text-2xl">{e.title}</h1>
          <p className=" bg- text-base md:text-base text-white/80">
            {e.content}
          </p>
        </div>
      ))}
    </>
    // <div>
    //   <p>List post</p>
    //   {posts.map((e, index) => {
    //     <p key={e.index}>{e.title}</p>;
    //   })}
    // </div>
  );
};

export default ListPost;
