import { Footprints, Heart, Music2 } from "lucide-react";

import { InfoCard } from "@/components/info-card";

export function Nutshell() {
  return (
    <div className="bg-primary relative">
      <div
        className="relative -mb-8 h-30 from-25% via-90%"
        style={{ clipPath: "ellipse(60% 100% at 50% 1%)" }}
      ></div>
      <div className="bg-primary flex flex-col items-center justify-center px-25 pt-35 pb-20">
        <div className="grid w-full grid-cols-1 justify-items-center gap-2 gap-y-16 sm:grid-cols-1 xl:grid-cols-3">
          <InfoCard
            title="Muzyka"
            icon={<Music2 className="text-primary h-20 w-20" />}
            description="Muzyka to nie tylko dźwięki, ale także emocje. Dowiedz się, jak muzyka wpływa na nasze zdrowie i samopoczucie."
            link="/lifestyle#music"
          />
          <InfoCard
            title="Ruch"
            icon={<Footprints className="text-primary h-20 w-20" />}
            description="Ruch to nie tylko aktywność fizyczna, ale także sposób na poprawę zdrowia. Dowiedz się, jak muzyka wpływa na nasze ciało i umysł."
            link="/lifestyle#activity"
          />
          <InfoCard
            title="Zdrowie"
            icon={<Heart className="text-primary h-20 w-20" />}
            description="Zdrowie to nie tylko brak choroby, ale także dobre samopoczucie. Sprawdź, jak muzyka może poprawić Twoje zdrowie."
            link="/lifestyle#health"
          />
        </div>
      </div>
    </div>
  );
}
