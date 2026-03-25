import React from "react";
import PostItem from "./PostItem";
import { motion } from "motion/react";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Постов нет! Увы(
      </h2>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </motion.div>
  );
};
export default PostList;
