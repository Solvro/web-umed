import { Globe } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import solvroLogo from "@/../public/solvro.svg";
import { ORGANIZATIONS, PAGE_PATHS } from "@/config/constants";
import { typedEntries } from "@/lib/helpers";
import type { OrganizationWithSocials, SocialLinkType } from "@/lib/types";
import { cn } from "@/lib/utils";

import { BugFormButton } from "./bug-form-button";
import { Contact } from "./contact";

function FooterLink({
  href,
  target,
  children,
  label,
  className,
}: {
  href: Route;
  target?: string;
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "ease border-b border-transparent transition-colors hover:border-current",
        className,
      )}
      aria-label={label}
    >
      {children}
    </Link>
  );
}

function SocialsLogo({ type }: { type: SocialLinkType }) {
  const size = 26;
  if (type === "www") {
    return <Globe size={size} />;
  }
  return (
    <Image
      className="invert"
      alt={`${type} logo`}
      src={`https://simpleicons.org/icons/${type}.svg`}
      width={size}
      height={size}
    />
  );
}

function SocialsSection({
  organization,
}: {
  organization: OrganizationWithSocials;
}) {
  return (
    <div>
      <h4 className="text-2xl font-semibold tracking-wide">
        {organization.name}
      </h4>
      <p className="mt-4 mb-2">Zaobserwuj nas!</p>
      <ul className="flex items-center gap-5">
        {typedEntries(organization.socials).map(([type, link]) => (
          <li key={`footer-link-${organization.name}-${type}`}>
            <FooterLink href={link} target="_blank">
              <SocialsLogo type={type} />
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="text-primary-foreground bg-primary w-full">
      <Contact />
      <div className="bg-accent text-accent-foreground">
        <div className="mx-4 flex flex-col justify-center gap-14 pt-10 sm:mx-0 sm:flex-row">
          <ul>
            <li>
              <FooterLink href="/">Strona główna</FooterLink>
            </li>
            {typedEntries(PAGE_PATHS).map(([path, label]) => (
              <li key={`footer-link-page-${path}`}>
                <FooterLink href={`/${path}`}>{label}</FooterLink>
              </li>
            ))}
            <li>
              <BugFormButton />
            </li>
          </ul>
          <SocialsSection organization={ORGANIZATIONS.solvro} />
          <SocialsSection organization={ORGANIZATIONS.sknChorobSerca} />
        </div>
        <div className="mx-auto mt-4 flex max-w-screen-xl flex-row items-center justify-between px-4 py-6">
          <span>
            &copy; {new Date().getFullYear()} {ORGANIZATIONS.solvro.name}
          </span>
          <FooterLink
            href="https://solvro.pwr.edu.pl?utm_source=umed&utm_medium=footer"
            className="flex items-center gap-1"
            target="_blank"
          >
            Made with ❤️ by{" "}
            <span>
              <Image
                alt={`Logo ${ORGANIZATIONS.solvro.name}`}
                src={solvroLogo as StaticImageData}
                height={18}
                aria-hidden
              />{" "}
            </span>
            Solvro
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}
