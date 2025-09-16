import Image from "next/image";
import type { StaticImageData } from "next/image";

import logo from "@/../public/logo.svg";
import { HeroSection } from "@/components/hero";
import { AboutApp } from "@/components/homepage/about-app";
import { AboutEventSection } from "@/components/homepage/about-event";
import { AboutUs } from "@/components/homepage/about-us";
import { EventCountdown } from "@/components/homepage/countdown";
import { LearnMoreButton } from "@/components/homepage/learn-more-button";
import { NewsSection } from "@/components/homepage/news-section";
import { DoubleQuaver, Quaver } from "@/components/notes";
import { fetchData } from "@/lib/api";
import type { CalendarEvent } from "@/lib/types";

async function getNextEvent(): Promise<CalendarEvent | null> {
  const response = await fetchData<{ data: CalendarEvent[] }>(
    "items/events?filter[status]=published&filter[date][_gt]=$NOW&sort=+date&limit=1",
  );
  if (response.data.length !== 1) {
    console.warn("No upcoming event found");
    return null;
  }
  const [nextEvent] = response.data;
  return nextEvent;
}

export default async function Home() {
  const nextEvent = await getNextEvent();

  return (
    <div className="relative min-h-screen overflow-hidden pb-8">
      <HeroSection>
        <div className="-mt-40 grid grid-cols-1 place-items-center md:mt-0 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="font-thicc relative flex w-fit flex-col items-center">
              <DoubleQuaver className="absolute top-0 -left-7 hidden size-16 -translate-x-1/2 -translate-y-1/2 rotate-[17deg] transform sm:block" />
              <DoubleQuaver className="absolute top-0 -right-4 size-16 translate-x-full -translate-y-1/4 rotate-[17deg] transform sm:hidden" />

              <span className="text-accent mt-4 overflow-hidden md:text-[90px] lg:text-[96px]">
                Zdrowie
              </span>
              <span className="text-accent text-[21px] md:text-[45px] lg:text-[52px]">
                Gra Pierwsze
              </span>
              <span className="text-primary text-[33px] font-black md:text-[70px] lg:text-[82px]">
                Skrzypce
              </span>

              <Quaver className="absolute top-1/2 -right-48 hidden size-20 translate-y-1/2 -rotate-[20deg] transform xl:block" />
            </div>
            <div className="lg:ml-12">
              <LearnMoreButton />
              <EventCountdown nextEvent={nextEvent} />
            </div>
          </div>
          <Image
            src={logo as StaticImageData}
            alt="Logo Zdrowie Gra Pierwsze Skrzypce"
            className="-z-10 order-1 w-[300px] object-contain lg:order-2 lg:mt-0 lg:w-[unset] lg:max-w-lg"
            height={700}
            width={700}
            priority
          />
        </div>
      </HeroSection>
      <NewsSection />
      <AboutEventSection />
      <AboutApp />
      <AboutUs />
    </div>
  );
}
