import React from "react";

import { fetchData } from "../lib/api";
import type { NewsPost } from "../lib/types";
import { NewsCard } from "./news-card";

export async function NewsContainer() {
  let posts;

  try {
    const response = await fetchData<{ data: NewsPost[] }>("items/news");
    posts = response.data.filter((post) => post.status === "published");
  } catch (error) {
    console.error("Error fetching news posts:", error);
    return null;
  }

  if (posts.length === 0) {
    return <h1>Pustka</h1>;
  }

  return (
    <div className="flex w-2/3 flex-col gap-3">
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </div>
  );
}
