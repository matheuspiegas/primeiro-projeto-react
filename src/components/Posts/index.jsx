import React from "react";
import { PostCard } from "../PostCard/index";
import "./styles.css";


export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        cover={post.cover}
        body={post.body}
        id={post.id}
      />
    ))}
  </div>
);
