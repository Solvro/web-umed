import Image from "next/image";
import type { ReactNode } from "react";

import violinImage from "@/../public/skrzypce.png";
import { ABOUT_EVENT_FRAGMENT } from "@/config/constants";

function SectionContent({
  header,
  children,
}: {
  header: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-primary mt-6 text-2xl sm:mt-10 sm:text-4xl lg:text-5xl">
        {header}
      </h3>
      <p className="mt-2">{children}</p>
    </div>
  );
}

export function AboutEventSection() {
  return (
    <div className="relative mb-10 grid grid-cols-1 grid-rows-1 p-10 lg:grid-cols-2 lg:p-20 lg:pr-0">
      <div
        className="flex scroll-m-30 flex-col text-base sm:text-xl lg:ml-20 lg:text-2xl xl:mr-20 xl:ml-50"
        id={ABOUT_EVENT_FRAGMENT}
      >
        <h2 className="text-primary text-start text-3xl sm:text-6xl">
          O wydarzeniu
        </h2>
        <p className="mt-4 sm:mt-10">
          &bdquo;Zdrowie gra pierwsze skrzypce&rdquo; to projekt z inicjatywy KN
          Chorób Serca oraz KN Solvro, którego celem jest zbadanie wpływu
          muzykoterapii na pracę serca. Biorąc udział w wydarzeniu, spędzisz
          czas na świeżym powietrzu, odkryjesz ciekawe zakątki Wrocławia, a
          przede wszystkim – zadbasz o swoje zdrowie!
        </p>
        <SectionContent header="Cele wydarzenia">
          Naszym głównym celem jest promocja zdrowego trybu życia, łącząc
          elementy ruchu, muzyki i zabawy. Podczas wydarzenia prowadzimy pomiary
          tętna u ochotników,
        </SectionContent>
        <SectionContent header="Przebieg wydarzenia">
          Całe wydarzenie jest powiązane z aplikacją mobilną, która przedstawia
          wiele tras spacerowych we Wrocławiu. Każdy uczestnik może samodzielnie
          przejść wybraną trasę, podziwiając miasto i słuchając playlist
          proponowanych przez aplikację - w zamyśle uczestnicy powinni
          dostosowywać tempo swojego chodzenia do rytmu muzyki! W wyznaczonych
          terminach na trasach znajdą się specjalne stanowiska, w których
          ochotnicy będą mogli wziąć udział w pomiarach niezbędnych do badań
          naukowych.
        </SectionContent>
      </div>
      <Image
        src={violinImage}
        alt="Violin example"
        width={1400}
        className="absolute -top-50 -right-[40%] -z-10 hidden -rotate-30 lg:inline xl:left-[45%]"
      />
    </div>
  );
}
