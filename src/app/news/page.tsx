import { ContentSection } from "@/components/content-section";
import { HeroSection } from "@/components/hero";
import { fetchNewsPosts } from "@/components/news-container";
import { PAGE_PATHS } from "@/config/constants";

export default async function NewsPage() {
  const posts = await fetchNewsPosts();
  return (
    <div>
      <HeroSection>{PAGE_PATHS.news}</HeroSection>
      {posts == null ? (
        <p>Brak aktualności</p>
      ) : (
        posts.map((post, index) => (
          <ContentSection
            heading={
              <div className="mb-10 flex items-center justify-between">
                <span className="text-balance sm:text-5xl">{post.title}</span>
                <span className="font-light">
                  {new Date(post.date_created).toLocaleDateString()}
                </span>
              </div>
            }
            key={post.id}
            variant={index % 2 === 0 ? "default" : "secondary"}
          >
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="lg:columns-2"
            ></div>
          </ContentSection>
        ))
      )}
    </div>
  );
}
