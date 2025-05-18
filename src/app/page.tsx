import { Footprints, Heart, Info, Music, Music2 } from "lucide-react";
import { Content } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { ContentSection } from "@/components/content-section";
import { HeroSection } from "@/components/hero";
import { AboutApp } from "@/components/homepage/about-app";
import { AboutEvent } from "@/components/homepage/about-event";
import { AboutGoals } from "@/components/homepage/about-goals";
import { AboutUs } from "@/components/homepage/about-us";
import { EventCountdown } from "@/components/homepage/countdown";
import { NewsSection } from "@/components/homepage/news-section";
import { Nutshell } from "@/components/homepage/nutshell";
import { InfoCard } from "@/components/info-card";
import { NewsContainer } from "@/components/news-container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  // TODO: Replace with next event date
  const nextEventDate = new Date("2025-10-11T10:00:00+02:00");

  return (
    <div className="relative min-h-screen overflow-hidden pb-8">
      <HeroSection>
        <span className="font-emilys-candy text-primary mt-4 overflow-hidden md:text-[90px] lg:text-[96px]">
          Zdrowie Gra
        </span>
        <span className="font-emilys-candy text-primary mt-2 text-[37px] md:text-[55px] lg:text-[64px]">
          Pierwsze Skrzypce
        </span>
        <div className="ml-12">
          <Button
            asChild
            className="mt-6 w-[300px] rounded-4xl py-6 text-lg md:mt-8 lg:mt-12"
            variant="secondary"
          >
            <Link href="/about">Dowiedz się więcej!</Link>
          </Button>
          <EventCountdown nextEventDate={nextEventDate} />
        </div>
        <Image
          src="/main.png"
          alt="Zdrowie Gra Pierwsze Skrzypce"
          className="absolute top-25 right-10 -z-10 hidden object-cover lg:block"
          width={700}
          height={700}
        />
      </HeroSection>

      <Nutshell />
      <AboutEvent />
      <AboutApp />
      <AboutGoals />
      <NewsSection />
      <AboutUs />
    </div>
  );
}
