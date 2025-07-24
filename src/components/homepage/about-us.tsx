import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import solvroLogo from "@/../public/solvro.svg";
import { DoubleQuaver, Quaver } from "@/components/notes";
import { Button } from "@/components/ui/button";
import { CONTACT_LINKS } from "@/config/constants";
import { cn } from "@/lib/utils";

function AboutUsRow({
  title,
  content,
  image,
  reversed = false,
  contactUrl,
}: {
  title: string;
  content: string;
  image: ReactNode;
  reversed?: boolean;
  contactUrl: string;
}) {
  return (
    <div className="grid gap-10 sm:gap-16 md:grid-cols-2 md:gap-20 lg:gap-24 xl:gap-30 2xl:gap-50">
      <div className="flex flex-col items-start">
        <h3 className="mb-4 text-xl sm:text-2xl md:text-4xl lg:mt-4">
          {title}
        </h3>
        <p className="text-foreground/90 max-w-lg text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          {content}
        </p>
        <Button
          asChild
          className="mt-4 self-center rounded-full sm:px-6 sm:py-5 sm:text-lg md:mt-8 md:px-10 md:py-6 md:text-xl lg:mt-10 lg:self-start lg:px-22 lg:py-8 lg:text-3xl"
          variant="secondary"
        >
          <Link href={contactUrl}>Skontaktuj się!</Link>
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
          "relative h-[300px] md:h-auto md:max-h-[500px] md:w-auto 2xl:max-h-[700px]",
          reverse ? "ml-auto" : "mr-auto",
        )}
        style={{
          aspectRatio: "560 / 640",
        }}
      >
        <div className={cn("grid h-full w-full bg-[#d9d9d9]", className)}>
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

export function AboutUs() {
  return (
    <div className="relative mx-auto mb-10 space-y-20 p-10 lg:mt-10 lg:mr-20 lg:p-20 xl:mx-[6%]">
      <h2 className="text-primary mb-4 text-start text-3xl font-medium sm:text-5xl md:text-6xl">
        O nas
      </h2>

      <AboutUsRow
        title="KN Chorób Serca"
        content="Studenckie Koło Naukowe Chorób Serca zrzesza studentów zainteresowanych fizjologią układu sercowo-naczyniowego i związanymi z nim schorzeniami. Organizujemy comiesięczne spotkania z ekspertami kardiologii, podczas których omawiamy jednostki chorobowe i nowoczesne metody wspomagania krążenia. Działamy naukowo – bierzemy udział w konferencjach, projektach badawczych i publikujemy wyniki w czasopismach. Prowadzimy warsztaty z resuscytacji, a członkowie zdobywają praktykę na Oddziale Intensywnej Terapii Kardiologicznej, ucząc się m.in. interpretacji EKG, analizy parametrów życiowych i podstawowych procedur medycznych."
        image={
          <DoubleQuaver className="absolute -bottom-4 left-0 -z-10 size-10 -translate-x-full rotate-12 transform md:size-12 lg:size-16" />
        }
        contactUrl={CONTACT_LINKS.knChorobSerca}
      />
      <AboutUsRow
        title="KN Solvro"
        content="Jesteśmy strategicznym kołem naukowym Politechniki Wrocławskiej, skupiającym studentów pasjonujących się nowoczesnymi technologiami. Działamy jak software house – członkowie rozwijają aplikacje, systemy i narzędzia wspierające życie akademickie, m.in. aplikację ToPWR czy platformę Eventownik. Koło stawia na praktyczną naukę poprzez realne projekty open‑source, hackathony i współpracę z partnerami z branży IT. Solvro kładzie nacisk na rozwój zarówno umiejętności technicznych (programowanie, DevOps, UX), jak i miękkich – zarządzanie projektami czy praca zespołowa. Jest miejscem, gdzie teoria łączy się z praktyką, a członkowie zdobywają doświadczenie cenione w przyszłej karierze zawodowej."
        reversed
        image={
          <>
            <Image
              alt="Logo KN Solvro"
              src={solvroLogo as StaticImageData}
              height={400}
              className="bg-background h-full w-full p-10 shadow-xl"
            />
            <Quaver className="absolute bottom-2 left-2 size-10 translate-x-1/2 rotate-12 transform md:size-12 lg:size-16" />
            <DoubleQuaver className="absolute top-10 -right-4 size-12 translate-y-full transform" />
          </>
        }
        contactUrl={CONTACT_LINKS.solvro}
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
              className="h-full w-full object-cover shadow-xl"
            />
            <Quaver className="absolute top-0 right-2 -z-10 size-10 translate-x-1/2 -translate-y-1/2 rotate-12 transform md:size-12 lg:size-16" />
          </>
        }
        contactUrl={CONTACT_LINKS.wca}
      />
    </div>
  );
}
