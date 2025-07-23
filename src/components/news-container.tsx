import { FrownIcon } from "lucide-react";

import { fetchData } from "@/lib/api";
import type { NewsPost } from "@/lib/types";

import { NewsCard } from "./news-card";

const POSTS_TO_SHOW = 3;

export async function fetchNewsPosts() {
  try {
    const posts = await fetchData<{ data: NewsPost[] }>(
      "items/news?filter[status]=published",
    );
    return posts.data;
  } catch (error) {
    console.error("Error fetching news posts:", error);
    return null;
  }
}

export async function NewsContainer() {
  const posts = await fetchNewsPosts();
  if (posts == null) {
    return null;
  }

  if (posts.length === 0) {
    return (
      <div className="sm:text-center">
        <h3 className="text-primary-foreground text-xl font-bold">
          Brak aktualności
        </h3>
        <p className="text-primary-foreground/90 mt-4 text-lg">
          Nie znaleziono żadnych aktualności do wyświetlenia.
        </p>
        <FrownIcon className="text-primary/60 mx-auto mt-5" size={48} />
      </div>
    );
  }
  return (
    <div className="mx-auto grid grid-cols-1 place-items-center gap-6 md:grid-cols-3">
      {posts.slice(0, POSTS_TO_SHOW).map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </div>
  );
}
