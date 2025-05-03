import Link from "next/link";

import { PAGE_PATHS } from "@/config/constants";

import { NavbarLink } from "./navbar-link";

export function NavigationBar() {
  // TODO: responsive layout & styling (hamburger menu)
  return (
    <div className="absolute left-0 mb-10 flex h-24 w-screen items-center justify-between gap-4 px-8 text-2xl sm:px-20">
      <Link
        href="/"
        aria-label="Wróć do strony głównej"
        className="bg-muted grid size-20 place-items-center rounded-full"
      >
        {/* TODO: logo */}
        ZGPS
      </Link>
      <nav className="bg-primary/50 fixed top-0 right-0 flex w-screen min-w-[300px] flex-col items-center gap-y-4 rounded-b-xl p-10 sm:w-[unset] sm:rounded-br-none lg:static lg:flex-row lg:bg-transparent lg:p-0">
        {Object.entries(PAGE_PATHS).map(([path, label]) => (
          <NavbarLink key={path} path={path}>
            {label}
          </NavbarLink>
        ))}
      </nav>
      <Link href="/download" className="w-min">
        {/* TODO: download widget & page */}
        Pobierz Aplikację!
      </Link>
    </div>
  );
}
