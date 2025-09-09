import { ContentSection } from "@/components/content-section";
import { HeroSection } from "@/components/hero";
import { PAGE_PATHS } from "@/config/constants";

export default function ResultsPage() {
  return (
    <div>
      <HeroSection>{PAGE_PATHS.results}</HeroSection>
      <ContentSection
        heading="Czego dowiedzieliśmy się podczas badania?"
        className="space-y-4"
      >
        <p className="text-primary border-primary mx-auto w-fit rounded-2xl border px-4 py-1">
          Wyniki badań nie są jeszcze dostępne. Sprawdź ponownie wkrótce!
        </p>
      </ContentSection>
    </div>
  );
}
