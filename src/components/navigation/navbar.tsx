"use client";

import type { ClassValue } from "clsx";
import type { LucideProps } from "lucide-react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";
import { useEffect, useState } from "react";

import { PAGE_PATHS } from "@/config/constants";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { DownloadWidget } from "./download-widget";
import { NavbarLink } from "./navbar-link";

function MenuButton({
  className,
  hidden,
  as: Comp,
}: {
  className: ClassValue;
  hidden: boolean;
  as: ComponentType<LucideProps>;
}) {
  return (
    <Comp
      className={cn(
        "absolute size-8 transition-[opacity,visibility] duration-300",
        {
          "invisible opacity-0": hidden,
        },
        className,
      )}
    />
  );
}

export function NavigationBar() {
  const [collapsed, setCollapsed] = useState(true);
  const { y: scrollY } = useScroll();
  const scrolled = scrollY > 0;

  useEffect(() => {
    document
      .querySelector("body")
      ?.classList.toggle("overflow-hidden", !collapsed);
  }, [collapsed]);

  return (
    <div
      className={cn(
        "absolute left-0 mb-10 flex h-24 w-full items-center justify-between gap-4 px-8 text-2xl transition-all duration-300 sm:px-20",
        {
          "bg-primary fixed top-0 shadow-lg": scrolled,
        },
      )}
    >
      <Link
        href="/"
        aria-label="Wróć do strony głównej"
        className={cn(
          "bg-muted grid place-items-center rounded-full transition-all duration-300",
          {
            "size-24 px-6 text-xl": !scrolled,
            "size-16 px-4 text-sm": scrolled,
          },
        )}
      >
        {/* TODO: logo */}
        ZGPS
      </Link>
      <Button
        className="fixed top-0 right-0 z-30 size-8 cursor-pointer bg-transparent p-8! text-3xl shadow-none lg:hidden"
        variant="link"
        aria-controls="navbar"
        onClick={() => {
          setCollapsed((previous) => !previous);
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setCollapsed(true);
          }
        }}
      >
        <MenuButton
          as={Menu}
          className={cn("text-foreground/50", {
            "text-background": scrolled,
          })}
          hidden={!collapsed}
        />
        <MenuButton as={X} className="text-background" hidden={collapsed} />
      </Button>
      <nav
        id="navbar"
        className={cn(
          "bg-primary fixed top-0 right-0 z-20 flex w-screen flex-col justify-center gap-y-4 rounded-b-xl p-10 shadow-2xl transition-all duration-300 sm:w-screen sm:origin-top-right sm:items-start sm:rounded-br-none lg:visible lg:static lg:scale-100 lg:flex-row lg:items-center lg:rounded-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none",
          {
            "invisible -translate-y-full opacity-0 sm:translate-y-0 sm:scale-0":
              collapsed,
          },
        )}
      >
        {Object.entries(PAGE_PATHS).map(([path, label]) => (
          <NavbarLink key={path} path={path} isFixed={scrolled}>
            {label}
          </NavbarLink>
        ))}
      </nav>
      <DownloadWidget />
      <button
        className={cn(
          "bg-foreground/15 fixed top-0 left-0 z-10 h-screen w-screen rounded-none backdrop-blur-xs transition-[opacity,visibility] duration-300 lg:opacity-0",
          { "invisible opacity-0": collapsed },
        )}
        aria-controls="navbar"
        disabled={collapsed}
        onClick={() => {
          setCollapsed(true);
        }}
      ></button>
    </div>
  );
}
