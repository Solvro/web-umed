import { NewsContainer } from "@/components/news-container";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900 p-8">
      <NewsContainer />
    </div>
  );
}
