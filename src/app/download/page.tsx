import Link from "next/link";

import { ContentSection } from "@/components/content-section";
import { HeroSection } from "@/components/hero";

import { DownloadButtons } from "./buttons";

export default function DownloadPage() {
  return (
    <>
      <HeroSection>Pobierz aplikację</HeroSection>
      {/* TODO: update heading */}
      <ContentSection
        heading="Aplikacja mobilna dostępna wkrótce!"
        className="space-y-4"
      >
        <p>
          Zachęcamy do pobrania naszej aplikacji oraz w wzięciu udziału w
          wydarzeniu! Więcej informacji znajdziesz na podstronie{" "}
          <Link
            href="/news"
            className="text-accent hover:text-primary ease transition-colors"
          >
            Aktualności
          </Link>
          .
        </p>
        <DownloadButtons />
      </ContentSection>
    </>
  );
}
