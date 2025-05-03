import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { sectionVariants } from "./content-section";

export function HeroSection({ children }: { children: ReactNode }) {
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
      <h1 className="flex flex-col text-4xl text-[100px]">{children}</h1>
    </div>
  );
}
