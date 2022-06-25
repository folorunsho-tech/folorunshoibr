import React from "react";
import PostCard from "./PostCard";
const Archive = ({ posts }) => {
  return (
    <section>
      {posts.map(({ node: post }) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Archive;
