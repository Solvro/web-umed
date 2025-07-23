import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { DoubleQuaver, Quaver } from "../notes";
import { Button } from "../ui/button";

export function AboutUs() {
  return (
    <div className="relative mx-auto mb-10 space-y-20 p-10 lg:mr-20 lg:p-20 xl:ml-20">
      <h2 className="text-primary mb-4 text-start text-3xl sm:text-5xl">
        O nas
      </h2>

      <AboutUsRow
        title="KN Solvro"
        content="Jesteśmy strategicznym kołem naukowym Politechniki Wrocławskiej, skupiającym studentów pasjonujących się nowoczesnymi technologiami. Działamy jak software house – członkowie rozwijają aplikacje, systemy i narzędzia wspierające życie akademickie, m.in. aplikację ToPWR czy platformę Eventownik. Koło stawia na praktyczną naukę poprzez realne projekty open‑source, hackathony i współpracę z partnerami z branży IT. Solvro kładzie nacisk na rozwój zarówno umiejętności technicznych (programowanie, DevOps, UX), jak i miękkich – zarządzanie projektami czy praca zespołowa. Jest miejscem, gdzie teoria łączy się z praktyką, a członkowie zdobywają doświadczenie cenione w przyszłej karierze zawodowej."
        image={
          <>
            <Quaver className="absolute bottom-2 left-2 size-10 translate-x-1/2 rotate-12 transform md:size-12 lg:size-16" />
            <DoubleQuaver className="absolute top-10 -right-4 size-12 translate-y-full transform" />
          </>
        }
      />
      <AboutUsRow
        title="KN Chorób Serca"
        reversed
        content="Studenckie Koło Naukowe Chorób Serca zrzesza studentów zainteresowanych fizjologią układu sercowo-naczyniowego i związanymi z nim schorzeniami. Organizujemy comiesięczne spotkania z ekspertami kardiologii, podczas których omawiamy jednostki chorobowe i nowoczesne metody wspomagania krążenia. Działamy naukowo – bierzemy udział w konferencjach, projektach badawczych i publikujemy wyniki w czasopismach. Prowadzimy warsztaty z resuscytacji, a członkowie zdobywają praktykę na Oddziale Intensywnej Terapii Kardiologicznej, ucząc się m.in. interpretacji EKG, analizy parametrów życiowych i podstawowych procedur medycznych."
        image={
          <DoubleQuaver className="absolute -bottom-4 left-0 -z-10 size-10 -translate-x-full rotate-12 transform md:size-12 lg:size-16" />
        }
      />

      <AboutUsRow
        title="Wrocławskie Centrum Akademickie"
        content="Wrocławskie Centrum Akademickie (WCA) to instytucja łącząca samorząd miasta z wrocławskim środowiskiem akademickim, wspierająca rozwój nauki, talentów i innowacji. Znane jest jako koordynator miejskiego programu stypendialnego, programu Visiting Professors oraz inicjator Akademii Młodych Uczonych i Artystów. WCA realizuje własne projekty dotyczące rynku pracy i polityki rozwoju gospodarczego, a także doradza uczelniom w zakresie współpracy z biznesem i otoczeniem społecznym. Projekt „Zdrowie gra pierwsze skrzypce” został dofinansowany ze środków programu FAST prowadzonego przez WCA."
        image={
          <>
            <Image
              src="/wca.png"
              width={426}
              height={496}
              alt="Wrocławskie Centrum Akademickie"
              className="h-full w-full object-cover shadow-sm"
            />
            <Quaver className="absolute top-0 right-2 -z-10 size-10 translate-x-1/2 -translate-y-1/2 rotate-12 transform md:size-12 lg:size-16" />
          </>
        }
      />
    </div>
  );
}

function AboutUsRow({
  title,
  content,
  image,
  reversed = false,
}: {
  title: string;
  content: string;
  image: ReactNode;
  reversed?: boolean;
}) {
  return (
    <div className="grid gap-10 sm:gap-16 md:grid-cols-2 md:gap-20 lg:gap-24 xl:gap-32">
      <div>
        <h3 className="mb-1 text-xl sm:text-2xl">{title}</h3>

        <p className="text-base leading-relaxed lg:text-lg">{content}</p>

        <Button
          asChild
          className="mt-4 w-xs rounded-4xl py-6 text-xl"
          variant="secondary"
        >
          <Link href="/#kontakt">Skontaktuj się!</Link>
        </Button>
      </div>

      <div
        className={cn(
          "grid h-full w-full place-items-center",
          reversed && "md:-order-1",
        )}
      >
        <PhotoFrame reverse={reversed}>{image}</PhotoFrame>
      </div>
    </div>
  );
}

function PhotoFrame({
  children,
  className,
  reverse = false,
}: {
  children?: React.ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className="h-full p-6 md:block md:w-full">
      <div
        className={cn(
          "relative h-[300px] md:h-auto md:max-h-[400px] md:w-auto xl:max-h-[500px]",
          reverse ? "ml-auto" : "mr-auto",
        )}
        style={{
          aspectRatio: "560 / 640",
        }}
      >
        <div className={cn("h-full w-full bg-[#d9d9d9]", className)}>
          {children}
        </div>
        <div
          className={cn(
            "absolute inset-0 -z-10 transform bg-[#FCBF9C]",
            reverse ? "rotate-[-10deg]" : "rotate-[10deg]",
          )}
        ></div>
      </div>
    </div>
  );
}
