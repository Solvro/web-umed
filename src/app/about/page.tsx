import { HeroSection } from "@/components/hero";
import { PAGE_PATHS } from "@/config/constants";

export default function AboutPage() {
  return (
    <div>
      <HeroSection>{PAGE_PATHS.about}</HeroSection>
    </div>
  );
}
