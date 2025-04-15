import { FrownIcon } from "lucide-react";

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
    return (
      <div className="mx-auto w-2/3 text-center">
        <h2 className="text-primary text-2xl font-bold">Brak aktualności</h2>
        <p className="mt-4 text-lg text-gray-500">
          Nie znaleziono żadnych aktualności do wyświetlenia.
        </p>
        <FrownIcon className="mx-auto mt-5 h-12 w-12 text-gray-400" />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3 md:w-2/3">
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </div>
  );
}
