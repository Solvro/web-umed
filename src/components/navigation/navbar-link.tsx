"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

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

  return (
    <Link
      href={`/${path}`}
      className={cn(
        "hover:text-background lg:hover:text-primary/85 border-primary transition-colors duration-300 lg:border-l-2 lg:px-6 lg:text-xl lg:last:border-r-2 xl:px-8 xl:text-2xl",
        {
          "text-background lg:text-primary": route === path,
        },
      )}
    >
      {children}
    </Link>
  );
}
