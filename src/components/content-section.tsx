import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const sectionVariants = cva(
  "px-[8%] py-10 sm:w-[unset] sm:px-30 md:px-40 ",
  {
    variants: {
      variant: {
        default: "",
        secondary: "bg-secondary text-secondary-foreground",
        primary: "bg-primary text-primary-foreground",
      },
    },
  },
);

export function ContentSection({
  heading,
  children,
  variant = "default",
}: {
  heading: ReactNode;
  children: ReactNode;
} & VariantProps<typeof sectionVariants>) {
  return (
    <section className={cn(sectionVariants({ variant }))}>
      <h2 className="mb-4 text-2xl">{heading}</h2>
      {children}
    </section>
  );
}
