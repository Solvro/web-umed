import { USER_FIELDS_QUERY } from "@/config/constants";
import { fetchData } from "@/lib/api";
import type { NewsPost } from "@/lib/types";

import { NewsCard } from "./news-card";
import { NoDataInfo } from "./no-data-info";

const POSTS_TO_SHOW = 3;

export async function fetchNewsPosts() {
  try {
    const posts = await fetchData<{ data: NewsPost[] }>(
      `items/news?filter[status]=published&fields=*,${USER_FIELDS_QUERY}`,
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
    return <NoDataInfo name="aktualności" />;
  }
  return (
    <div className="mx-auto grid grid-cols-1 place-items-center gap-6 md:grid-cols-3">
      {posts.slice(0, POSTS_TO_SHOW).map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </div>
  );
}
