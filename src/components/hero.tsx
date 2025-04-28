import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { sectionVariants } from "./homepage/section";

export function HeroSection({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        sectionVariants({
          variant: "default",
          className:
            "from-primary/2 via-primary/5 to-primary/12 bg-radial from-25% via-90%",
        }),
      )}
    >
      <h1 className="flex flex-col text-4xl">{children}</h1>
    </div>
  );
}
