import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { sectionVariants } from "./content-section";
import { NavigationBar } from "./navigation/navbar";

export function HeroSection({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div
      className={cn(
        sectionVariants({
          variant: "default",
          className:
            "from-primary/4 via-primary/12 to-primary/20 bg-radial from-25% via-90%",
        }),
      )}
    >
      <NavigationBar />
      <h1 className="mt-30 flex flex-col text-4xl md:text-[60px] lg:text-[100px]">
        {children}
      </h1>
      {subtitle !== undefined && (
        <h4 className="-mt-1 text-lg md:text-xl lg:text-2xl">{subtitle}</h4>
      )}
    </div>
  );
}
