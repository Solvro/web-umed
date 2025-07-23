import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function AboutApp() {
  return (
    <div className="bg-primary relative flex items-end justify-end p-10 shadow-xl lg:p-20 lg:pt-30">
      <svg
        viewBox="0 0 1526 189"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
      >
        <path
          d="M 0 67 C 226.5 67 226.5 149 453 149 L 453 149 L 453 0 L 0 0 Z"
          fill="white"
        />
        <path
          d="M 452 149 C 740 149 740 11 1028 11 L 1028 11 L 1028 0 L 452 0 Z"
          fill="white"
        />
        <path
          d="M 1027 11 C 1276.5 11 1276.5 103 1526 103 L 1526 103 L 1526 0 L 1027 0 Z"
          fill="white"
        />
      </svg>
      <div className="mt-20 mb-80 flex flex-col lg:mt-5 lg:mb-0 lg:ml-20 lg:w-1/2">
        <h1 className="text-primary-foreground text-start text-4xl">
          Aplikacja
        </h1>
        <p className="text-primary-foreground mt-4 mr-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
          euismod libero ac malesuada. Proin tempor ipsum non tellus vehicula
          pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec egestas euismod libero ac malesuada. Proin temegestas euismod
          libero ac malesuada. Proin tempor ipsum non tellus vehicula
          pellentesqueLorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec egestas euismod libero ac malesuada. Proin tempor ipsum non
          tellus vehicula pellentesqueLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec egestas euismod libero ac malesuada. Proin
          tempor ipsum non tellus vehicula pellentesque
        </p>
        <Button
          asChild
          className="mt-4 w-[350px] rounded-4xl py-6 text-lg md:mt-8 lg:mt-6"
          variant="secondary"
        >
          <Link href="/about">Pobierz aplikację!</Link>
        </Button>
      </div>
      <Image
        src="/app.png"
        alt="Mobile app example"
        width={1000}
        height={1000}
        className="absolute bottom-0 left-0 object-contain md:-bottom-35 lg:-top-25 lg:-left-35"
      />
    </div>
  );
}
