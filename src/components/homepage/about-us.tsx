import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import logoSkncs from "@/../public/skncs.jpg";
import logoSolvro from "@/../public/solvro.svg";
import logoWca from "@/../public/wca.png";
import { DoubleQuaver, Quaver } from "@/components/notes";
import { Button } from "@/components/ui/button";
import { ORGANIZATIONS } from "@/config/constants";
import type { Organization } from "@/lib/types";
import { cn } from "@/lib/utils";

function AboutUsRow({
  organization,
  image,
  reversed = false,
}: {
  organization: Organization;
  image: ReactNode;
  reversed?: boolean;
}) {
  return (
    <div className="grid gap-10 sm:gap-16 md:grid-cols-2 md:gap-20 lg:gap-24 xl:gap-30 2xl:gap-50">
      <div className="flex flex-col items-start">
        <h3 className="mb-4 text-xl sm:text-2xl md:text-4xl lg:mt-4">
          {organization.name}
        </h3>
        <p className="text-foreground/90 max-w-lg text-base lg:text-lg xl:text-xl">
          {organization.description}
        </p>
        <Button
          asChild
          className="mt-4 self-center rounded-full sm:px-6 sm:py-5 sm:text-lg md:mt-8 md:px-10 md:py-6 md:text-xl lg:mt-10 lg:self-start lg:px-22 lg:py-8 lg:text-3xl"
          variant="secondary"
        >
          <Link href={organization.contactUrl}>Skontaktuj się!</Link>
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
        organization={ORGANIZATIONS.sknChorobSerca}
        image={
          <>
            <Image
              alt={`Logo ${ORGANIZATIONS.sknChorobSerca.name}`}
              src={logoSkncs}
              height={400}
              className="bg-background h-full w-full object-cover shadow-xl"
            />
            <Quaver className="absolute top-0 -right-4 size-10 translate-x-1/2 -translate-y-1/2 rotate-12 transform md:size-12 lg:size-16" />
            <DoubleQuaver className="absolute -bottom-4 left-0 -z-10 size-10 -translate-x-full rotate-12 transform md:size-12 lg:size-16" />
          </>
        }
      />
      <AboutUsRow
        organization={ORGANIZATIONS.solvro}
        reversed
        image={
          <>
            <Image
              alt={`Logo ${ORGANIZATIONS.solvro.name}`}
              src={logoSolvro as StaticImageData}
              height={400}
              className="bg-background h-full w-full p-10 shadow-xl"
            />
            <Quaver className="absolute bottom-2 left-2 size-10 translate-x-1/2 rotate-12 transform md:size-12 lg:size-16" />
            <DoubleQuaver className="absolute top-10 -right-4 size-12 translate-y-full transform" />
          </>
        }
      />

      <AboutUsRow
        organization={ORGANIZATIONS.wca}
        image={
          <>
            <Image
              src={logoWca}
              width={426}
              height={496}
              alt="Wrocławskie Centrum Akademickie"
              className="h-full w-full object-cover shadow-xl"
            />
            <Quaver className="absolute top-0 right-2 -z-10 size-10 translate-x-1/2 -translate-y-1/2 rotate-12 transform md:size-12 lg:size-16" />
          </>
        }
      />
    </div>
  );
}
