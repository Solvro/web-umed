import { HeroSection } from "@/components/hero";
import { PAGE_PATHS } from "@/config/constants";

export default function ResultsPage() {
  return (
    <div>
      <HeroSection>{PAGE_PATHS.results}</HeroSection>
    </div>
  );
}
