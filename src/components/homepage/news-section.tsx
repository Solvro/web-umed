import { NewsContainer } from "../news-container";
import { Quaver } from "../notes";

export function NewsSection() {
  return (
    <div className="bg-faded-gradient flex items-center justify-center shadow-xl lg:pt-30">
      <div className="relative w-full">
        <div className="bg-primary flex flex-col p-12 sm:[clip-path:ellipse(95%_100%_at_50%_100%)] lg:px-20 lg:[clip-path:ellipse(70%_100%_at_50%_100%)]">
          <h1 className="text-primary-foreground mt-10 mb-20 text-center text-4xl lg:mt-0 lg:text-6xl">
            Aktualności
          </h1>
          <NewsContainer />
        </div>
        <Quaver className="absolute top-5 right-4 -z-10 hidden size-16 translate-y-1/2 rotate-12 transform lg:block" />
      </div>
    </div>
  );
}
