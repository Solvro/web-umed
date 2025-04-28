import { NewsContainer } from "@/components/news-container";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden p-8">
      <NewsContainer />
    </div>
  );
}
