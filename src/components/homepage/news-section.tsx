import { NewsContainer } from "@/components/news-container";
import { Quaver } from "@/components/notes";
import { NEWS_SECTION_ID } from "@/config/constants";

import { ScrollDownButton } from "./scroll-down-button";

export function NewsSection() {
  return (
    <div className="bg-faded-gradient flex items-center justify-center shadow-xl lg:pt-30">
      <div className="relative flex w-full flex-col items-center">
        <ScrollDownButton />
        <div
          id={NEWS_SECTION_ID}
          className="bg-primary flex w-full scroll-mt-14 flex-col p-12 sm:[clip-path:ellipse(95%_100%_at_50%_100%)] lg:px-20 lg:[clip-path:ellipse(70%_100%_at_50%_100%)]"
        >
          <h2 className="text-primary-foreground mt-4 mb-6 text-center text-4xl sm:mt-10 sm:mb-20 lg:mt-0 lg:text-6xl">
            Aktualności
          </h2>
          <NewsContainer />
        </div>
        <Quaver className="absolute top-5 right-4 -z-10 hidden size-16 translate-y-1/2 rotate-12 transform lg:block" />
      </div>
    </div>
  );
}
