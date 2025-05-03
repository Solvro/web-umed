import Link from "next/link";

import { ContentSection } from "@/components/content-section";
import { HeroSection } from "@/components/hero";
import { EventCountdown } from "@/components/homepage/countdown";
import { NewsContainer } from "@/components/news-container";
import { Button } from "@/components/ui/button";

export default function Home() {
  // TODO: Replace with next event date
  const nextEventDate = new Date("2025-05-11T10:00:00+02:00");

  return (
    <div className="min-h-screen overflow-hidden pb-8">
      <HeroSection>
        <span className="text-6xl md:text-[90px] lg:text-[128px]">Zdrowie</span>
        <span className="text-[37px] md:text-[55px] lg:text-[79px]">
          Gra Pierwsze
        </span>
        <span className="text-[52px] md:text-[78px] lg:text-[112px]">
          Skrzypce
        </span>
        <Button
          asChild
          className="mt-6 w-fit md:mt-8 lg:mt-12"
          size="responsive"
        >
          <Link href="/about">Dowiedz się więcej!</Link>
        </Button>
        <EventCountdown nextEventDate={nextEventDate} />
      </HeroSection>
      <ContentSection heading="Aktualności" variant="secondary">
        <NewsContainer />
      </ContentSection>
      <ContentSection heading="O wydarzeniu">
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas euismod libero ac malesuada. Proin tempor ipsum non tellus
            vehicula pellentesque.
          </p>
          <p>
            Sed nec nulla at leo porta tempus. Praesent at libero ex. Phasellus
            ornare justo diam, a ultrices felis mollis vel. Curabitur a
            sollicitudin odio, Etiam non consectetur mi,
          </p>
          <p>
            Vitae fringilla ante. Pellentesque arcu leo, tincidunt vel viverra
            id, rutrum facilisis elit. Sed erat nisi, faucibus tincidunt iaculis
            eu, tempor eu metus. hendrerit.
          </p>
        </div>
      </ContentSection>
      <ContentSection heading="Profilaktyka" variant="secondary">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              egestas euismod libero ac malesuada. Proin tempor ipsum non tellus
              vehicula pellentesque.
            </p>
            <p>
              Sed nec nulla at leo porta tempus. Praesent at libero ex.
              Phasellus ornare justo diam, a ultrices felis mollis vel.
              Curabitur a sollicitudin odio, Etiam non consectetur mi,
            </p>
            <p>
              Vitae fringilla ante. Pellentesque arcu leo, tincidunt vel viverra
              id, rutrum facilisis elit. Sed erat nisi, faucibus tincidunt
              iaculis eu, tempor eu metus. hendrerit.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              egestas euismod libero ac malesuada. Proin tempor ipsum non tellus
              vehicula pellentesque.
            </p>
            <p>
              Sed nec nulla at leo porta tempus. Praesent at libero ex.
              Phasellus ornare justo diam, a ultrices felis mollis vel.
              Curabitur a sollicitudin odio, Etiam non consectetur mi,
            </p>
            <p>
              Vitae fringilla ante. Pellentesque arcu leo, tincidunt vel viverra
              id, rutrum facilisis elit. Sed erat nisi, faucibus tincidunt
              iaculis eu, tempor eu metus. hendrerit.
            </p>
          </div>
        </div>
      </ContentSection>
      <ContentSection heading="Wyniki badań">
        <div className="space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas euismod libero ac malesuada. Proin tempor ipsum non tellus
            vehicula pellentesque.
          </p>
          <p>
            Sed nec nulla at leo porta tempus. Praesent at libero ex. Phasellus
            ornare justo diam, a ultrices felis mollis vel. Curabitur a
            sollicitudin odio, Etiam non consectetur mi,
          </p>
          <p>
            Vitae fringilla ante. Pellentesque arcu leo, tincidunt vel viverra
            id, rutrum facilisis elit. Sed erat nisi, faucibus tincidunt iaculis
            eu, tempor eu metus. hendrerit.
          </p>
        </div>
      </ContentSection>
    </div>
  );
}
