import Image from "next/image";
import Link from "next/link";

import mobileAppImage from "@/../public/telefon.png";
import { Button } from "@/components/ui/button";

function Waves() {
  return (
    <svg
      viewBox="0 0 1526 189"
      xmlns="http://www.w3.org/2000/svg"
      // this is definitely not the best way to do this but I didn't make the SVG
      // need to use fill=primary and rotate-180 so it overlaps the violin image from AboutEventSection
      // also the negative 1px margin removes a small gap which is there for some reason on mobile view
      className="relative -mb-[1px] rotate-x-180 lg:rotate-y-180"
    >
      <path
        d="M 0 67 C 226.5 67 226.5 149 453 149 L 453 149 L 453 0 L 0 0 Z"
        fill="var(--primary)"
      />
      <path
        d="M 452 149 C 740 149 740 11 1028 11 L 1028 11 L 1028 0 L 452 0 Z"
        fill="var(--primary)"
      />
      <path
        d="M 1027 11 C 1276.5 11 1276.5 103 1526 103 L 1526 103 L 1526 0 L 1027 0 Z"
        fill="var(--primary)"
      />
    </svg>
  );
}

export function AboutApp() {
  return (
    <div className="shadow-xl lg:-translate-y-40">
      <Waves />
      <div className="bg-primary grid place-items-center pb-10 lg:grid-cols-2">
        <Image
          src={mobileAppImage}
          alt="Mobile app example"
          width={1000}
          // negative margin to account for excessive padding in the original png
          className="-mb-[20%] hidden translate-x-[10%] -translate-y-[20%] object-contain lg:block"
        />
        <div className="px-10 lg:px-0">
          <h2 className="text-primary-foreground mt-10 text-start text-4xl lg:mt-0 lg:text-6xl">
            Aplikacja
          </h2>
          <div className="text-primary-foreground mt-4 mr-10 max-w-lg text-lg lg:text-xl">
            <p>
              Dołącz do wydarzenia i wyrusz na spacer po różnych trasach
              Wrocławia! Aplikacja przedstawi Ci szczegółowe informacje o każdej
              trasie, takie jak:
            </p>
            <ul className="my-3 list-disc pl-5">
              <li>rekomendowana ilość wody</li>
              <li>szacowana liczba spalonych kalorii</li>
              <li>całkowita długość trasy</li>
            </ul>
            <p>
              Dodatkowo otrzymasz propozycję playlisty dopasowanej do tempa
              marszu!
            </p>
          </div>
          <Button
            asChild
            className="mt-4 w-xs rounded-4xl py-6 text-2xl md:mt-8 lg:mt-14"
            variant="secondary"
          >
            <Link href="/about">Pobierz aplikację!</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
