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
      <div className="sm:text-center">
        <h3 className="text-primary text-xl font-bold">Brak aktualności</h3>
        <p className="text-foreground/60 mt-4 text-lg">
          Nie znaleziono żadnych aktualności do wyświetlenia.
        </p>
        <FrownIcon className="text-primary/60 mx-auto mt-5" size={48} />
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center gap-6 md:flex-row">
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </div>
  );
}
