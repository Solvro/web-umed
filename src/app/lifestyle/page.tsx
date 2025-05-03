import { HeroSection } from "@/components/hero";
import { PAGE_PATHS } from "@/config/constants";

export default function LifestylePage() {
  return (
    <div>
      <HeroSection>{PAGE_PATHS.lifestyle}</HeroSection>
    </div>
  );
}
