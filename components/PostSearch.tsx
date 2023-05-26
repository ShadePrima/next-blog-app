"use client";

import { usePosts } from "@/store";
import React, { FormEventHandler } from "react";

const PostSearch = () => {
  const [search, setSearch] = React.useState<any>("");
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder={search}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;
