"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { navigateToElement } from "@/lib/helpers";
import { cn } from "@/lib/utils";

export function NavbarLink({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const route = pathname.split("/").at(1);
  const absolutePath = `/${path}`;

  return (
    <Link
      href={absolutePath}
      className={cn(
        "text-background underline-offset-4 transition-colors duration-300 lg:border-l-2 lg:px-[23px] lg:text-xl lg:last:border-r-2 xl:px-8",
        {
          "lg:text-primary sm:hover:text-secondary/80 lg:hover:text-primary/40 border-primary underline lg:no-underline":
            route === path,
          "lg:text-foreground lg:hover:text-primary/85 hover:text-secondary/80 border-primary":
            route !== path,
        },
      )}
      onClick={(event_) => {
        if (!path.startsWith("#") || route !== "") {
          return;
        }
        event_.preventDefault();
        navigateToElement(path);
      }}
    >
      {children}
    </Link>
  );
}
