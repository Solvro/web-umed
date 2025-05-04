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
        "text-background text-center underline-offset-4 transition-colors duration-300 lg:border-l-2 lg:px-[23px] lg:text-xl lg:no-underline lg:last:border-r-2 xl:px-8",
        {
          "lg:text-primary underline": route === path && !isFixed,
          "lg:text-secondary lg:hover:text-secondary/80":
            route === path && isFixed,
          "lg:text-primary-foreground lg:hover:text-secondary/85 text-md border-secondary/80":
            isFixed,
          "lg:text-foreground lg:hover:text-primary/85 border-primary text-lg":
            !isFixed,
        },
      )}
    >
      {children}
    </Link>
  );
}
