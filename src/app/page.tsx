import Image from "next/image";
import Link from "next/link";

import { HeroSection } from "@/components/hero";
import { AboutApp } from "@/components/homepage/about-app";
import { AboutEvent } from "@/components/homepage/about-event";
import { AboutGoals } from "@/components/homepage/about-goals";
import { AboutUs } from "@/components/homepage/about-us";
import { EventCountdown } from "@/components/homepage/countdown";
import { NewsSection } from "@/components/homepage/news-section";
import { Nutshell } from "@/components/homepage/nutshell";
import { Button } from "@/components/ui/button";

export default function Home() {
  // TODO: Replace with next event date
  const nextEventDate = new Date("2025-10-11T10:00:00+02:00");

  return (
    <div className="relative min-h-screen overflow-hidden pb-8">
      <HeroSection>
        <div className="flex w-fit flex-col items-center">
          <span className="text-accent mt-4 overflow-hidden font-serif md:text-[90px] lg:text-[96px]">
            Zdrowie
          </span>
          <span className="text-accent font-alt text-[21px] md:text-[45px] lg:text-[52px]">
            Gra Pierwsze
          </span>
          <span className="text-primary font-thicc text-[33px] font-black md:text-[70px] lg:text-[82px]">
            Skrzypce
          </span>
        </div>
        <div className="mb-85 ml-0 lg:mb-0 lg:ml-12">
          <Button
            asChild
            className="mt-6 w-[200px] rounded-4xl py-5 text-sm md:mt-8 lg:mt-12 lg:w-[300px] lg:py-6 lg:text-lg"
            variant="secondary"
          >
            <Link href="/about">Dowiedz się więcej!</Link>
          </Button>
          <EventCountdown nextEventDate={nextEventDate} />
        </div>
        <Image
          src="/main.png"
          alt="Zdrowie Gra Pierwsze Skrzypce"
          className="absolute top-80 right-0 -z-10 block h-[600px] w-[600px] object-contain md:top-105 md:right-40 lg:top-10 lg:right-10 lg:h-[700px] lg:w-[700px]"
          height={700}
          width={700}
          priority
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
