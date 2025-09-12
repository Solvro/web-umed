import { ContentSection } from "@/components/content-section";
import { HeroSection } from "@/components/hero";
import { fetchNewsPosts } from "@/components/news-container";
import { NoDataInfo } from "@/components/no-data-info";
import { RichText } from "@/components/rich-text";
import { PAGE_PATHS } from "@/config/constants";

export default async function NewsPage() {
  const posts = await fetchNewsPosts();
  return (
    <div className="mb-10">
      <HeroSection>{PAGE_PATHS.news}</HeroSection>
      {posts == null ? (
        <NoDataInfo name="aktualności" className="text-accent" />
      ) : (
        posts.map((post, index) => (
          <ContentSection
            heading={
              <div
                id={post.id}
                className="mb-10 flex scroll-mt-30 items-center justify-between"
              >
                <span className="text-balance sm:text-5xl">{post.title}</span>
                <span className="font-light">
                  {new Date(post.date_created).toLocaleDateString()}
                </span>
              </div>
            }
            key={post.id}
            variant={index % 2 === 0 ? "default" : "primary"}
          >
            <RichText
              className="lg:columns-2"
              content={post.content}
              invertColors={index % 2 === 1}
            />
          </ContentSection>
        ))
      )}
    </div>
  );
}
