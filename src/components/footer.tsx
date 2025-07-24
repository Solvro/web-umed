import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import solvroLogo from "@/../public/solvro.svg";
import { FOOTER_LINKS } from "@/config/constants";

import { BugFormButton } from "./bug-form-button";
import { Contact } from "./contact";

function FooterSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-4">
      <div className="mb-3">
        <span className="text-lg font-medium uppercase">{title}</span>
        <div className="from-primary-foreground/60 h-0.5 w-32 bg-gradient-to-r to-transparent"></div>
      </div>
      <ul className="flex flex-col">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  target,
  children,
  label,
}: {
  href: string;
  target?: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target={target}
      className="underline-offset-4 hover:underline"
      aria-label={label}
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="text-primary-foreground bg-primary w-full">
      <Contact />
      <div className="mx-auto mb-14 grid w-full max-w-screen-xl grid-cols-1 gap-4 px-4 pt-5 sm:grid-cols-2 lg:grid-cols-4">
        <FooterSection title="Przydatne linki">
          <FooterLink href="/">Strona główna</FooterLink>
          <BugFormButton />
        </FooterSection>
        <FooterSection title="Social media">
          <FooterLink href={FOOTER_LINKS.facebook} target="_blank">
            Facebook
          </FooterLink>
          <FooterLink href={FOOTER_LINKS.instagram} target="_blank">
            Instagram
          </FooterLink>
        </FooterSection>
      </div>
      <div className="bg-background text-foreground">
        <div className="mx-auto flex max-w-screen-xl flex-row items-center justify-between px-4 py-6">
          <span>&copy; {new Date().getFullYear()} KN Solvro</span>
          <Link
            href="https://solvro.pwr.edu.pl?utm_source=umed&utm_medium=footer"
            className="hover:border-foreground ease flex items-center gap-1 border-b border-transparent underline-offset-4 transition-colors"
            target="_blank"
          >
            Made with ❤️ by{" "}
            <span>
              <Image
                alt="Logo KN Solvro"
                src={solvroLogo as StaticImageData}
                height={18}
                aria-hidden
              />{" "}
            </span>
            Solvro
          </Link>
        </div>
      </div>
    </footer>
  );
}
