"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function NavbarLink({
  path,
  children,
  isFixed = false,
}: {
  path: string;
  children: ReactNode;
  isFixed?: boolean;
}) {
  const pathname = usePathname();
  const route = pathname.split("/").at(1);

  return (
    <Link
      href={`/${path}`}
      className={cn(
        "text-background underline-offset-4 transition-colors duration-300 lg:border-l-2 lg:px-[23px] lg:text-xl lg:no-underline lg:last:border-r-2 xl:px-8",
        {
          "lg:text-primary sm:hover:text-secondary/80 underline":
            route === path && !isFixed,
          "text-secondary hover:text-secondary/80 underline":
            route === path && isFixed,
          "text-primary-foreground hover:text-secondary/80 border-secondary/80 text-lg":
            isFixed,
          "lg:text-foreground lg:hover:text-primary/85 hover:text-secondary/80 border-primary text-lg":
            !isFixed,
        },
      )}
    >
      {children}
    </Link>
  );
}
