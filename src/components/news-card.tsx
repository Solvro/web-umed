import React from "react";

import { NewsPost } from "@/lib/types";

export function NewsCard({ post }: { post: NewsPost }) {
  console.log(post.content);

  return (
    <div
      className="bg-secondary gap-3 rounded-3xl p-4 text-lg shadow-2xl"
      dangerouslySetInnerHTML={{ __html: post.content }}
    />
  );
}
