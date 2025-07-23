import Image from "next/image";
import type { ReactNode } from "react";

import violinImage from "@/../public/skrzypce.png";

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
    <div className="mb-10 grid grid-cols-1 grid-rows-1 overflow-hidden p-10 lg:grid-cols-2 lg:p-20 lg:pr-0">
      <div className="flex flex-col text-base sm:text-xl lg:ml-20 lg:text-2xl xl:mr-20 xl:ml-50">
        <h2 className="text-primary text-start text-3xl sm:text-6xl">
          O wydarzeniu
        </h2>
        <p className="mt-4 sm:mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
          euismod libero ac malesuada. Proin tempor ipsum non tellus vehicula
          pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec egestas euismod libero ac malesuada. Proin temegestas euismod
          libero ac malesuada. Proin tempor ipsum non tellus vehicula
          pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec egestas euismod libero ac malesuada. Proin tempor ipsum non
          tellus vehicula pellentesque. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec egestas euismod libero ac malesuada. Proin
          tempor ipsum non tellus vehicula pellentesque
        </p>
        <SectionContent header="Cele wydarzenia">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
          euismod libero ac malesuada. Proin tempor ipsum non tellus vehicula
          pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec egestas euismod libero ac malesuada. Proin temegestas
        </SectionContent>
        <SectionContent header="Przebieg wydarzenia">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
          euismod libero ac malesuada. Proin tempor ipsum non tellus vehicula
          pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec egestas euismod libero ac malesuada. Proin temegestas
        </SectionContent>
      </div>
      <Image
        src={violinImage}
        alt="Violin example"
        width={1000}
        className="hidden translate-x-[10%] scale-150 -rotate-30 lg:block"
      />
    </div>
  );
}
