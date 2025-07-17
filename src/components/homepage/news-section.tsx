import { NewsContainer } from "../news-container";

export function NewsSection() {
  return (
    <div className="bg-faded-gradient relative flex items-center justify-center bg-white shadow-xl lg:pt-30">
      <div className="bg-primary flex w-full flex-col p-12 sm:[clip-path:ellipse(95%_100%_at_50%_100%)] lg:px-20 lg:[clip-path:ellipse(70%_100%_at_50%_100%)]">
        <h1 className="text-primary-foreground mt-10 mb-20 text-center text-4xl lg:mt-0">
          Aktualności
        </h1>
        <NewsContainer />
      </div>
    </div>
  );
}
