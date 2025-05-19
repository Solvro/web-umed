"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ContentSection } from "@/components/content-section";
import { HeroSection } from "@/components/hero";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div>
      <HeroSection>404</HeroSection>
      <ContentSection
        heading={<span className="sm:text-4xl">Nie znaleziono</span>}
      >
        <p className="sm:text-2xl">
          Strona pod adresem{" "}
          <span className="bg-card rounded-md p-1 font-mono">{pathname}</span>{" "}
          nie została znaleziona.
        </p>
        <Button asChild className="mt-4 sm:text-lg" size="lg">
          <Link href="/">
            <ArrowLeft /> Powrót do strony głównej
          </Link>
        </Button>
      </ContentSection>
    </div>
  );
}
