import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { sectionVariants } from "./content-section";
import { NavigationBar } from "./navigation/navbar";

export function HeroSection({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        sectionVariants({
          variant: "default",
          className: "bg-faded-gradient",
        }),
      )}
    >
      <NavigationBar />
      <h1 className="mt-30 flex flex-col text-4xl md:text-[60px] lg:text-[100px]">
        {children}
      </h1>
    </div>
  );
}
