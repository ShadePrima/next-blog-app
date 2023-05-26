import React from "react";
import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog page",
  description: "My blog",
};

export default function Blog() {
  return (
    <div>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </div>
  );
}
