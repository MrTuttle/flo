import { Post } from "@prisma/client";

import React from "react";

interface ListPostProps {
  posts: Post[];
}

const ListPost = ({ posts }: ListPostProps) => {
  // const posts = await prisma.post.findMany();
  return (
    <div className="border border-red-500 p-8">
      {posts.map((e) => (
        <div key={e.id}>
          <h1>{e.title}</h1>
          <p>{e.content}</p>
        </div>
      ))}
    </div>
    // <div>
    //   <p>List post</p>
    //   {posts.map((e, index) => {
    //     <p key={e.index}>{e.title}</p>;
    //   })}
    // </div>
  );
};

export default ListPost;
