"use client";

import React from "react";
import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";
import { getAllPosts } from "@/services/getPosts";
import { Metadata } from "next";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch posts");
  return response.json();
}

export const metadata: Metadata = {
  title: "Blog page",
  description: "My blog",
};

export default function Blog() {
  const [posts, setPosts] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading ...</h3> : <Posts posts={posts} />}
    </div>
  );
}
