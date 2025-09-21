import { ContentSection } from "@/components/content-section";
import { HeroSection } from "@/components/hero";
import { NoDataInfo } from "@/components/no-data-info";
import { RichText } from "@/components/rich-text";
import { PAGE_PATHS, USER_FIELDS_QUERY } from "@/config/constants";
import { fetchData } from "@/lib/api";
import { formatPolishDate } from "@/lib/helpers";
import type { Article } from "@/lib/types";

async function fetchArticles() {
  try {
    const articles = await fetchData<{ data: Article[] }>(
      `items/articles?sort=-date_created&filter[status]=published&fields=*,${USER_FIELDS_QUERY}`,
    );
    return articles.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return null;
  }
}

export default async function LifestylePage() {
  const articles = await fetchArticles();
  return (
    <div>
      <HeroSection>{PAGE_PATHS.lifestyle}</HeroSection>
      {articles == null ? (
        <NoDataInfo name="artykułów" className="text-accent" />
      ) : (
        articles.map((article, index) => (
          <ContentSection
            heading={
              <div id={article.id} className="mb-8 scroll-mt-30">
                <div className="mb-2 flex items-center justify-between">
                  <div className="sm:text-2xl">
                    <span className="mr-2 text-balance sm:text-5xl">
                      Artykuł {article.id}
                    </span>
                  </div>
                  <span className="font-light">
                    {formatPolishDate(article.date_created)}
                  </span>
                </div>
                <span className="sm:text-2xl">
                  {article.user_created.first_name}{" "}
                  {article.user_created.last_name}
                </span>
              </div>
            }
            key={article.id}
            variant={index % 2 === 0 ? "default" : "primary"}
          >
            <RichText
              content={article.content}
              className="lg:columns-2"
              invertColors={index % 2 === 1}
            />
          </ContentSection>
        ))
      )}
    </div>
  );
}
