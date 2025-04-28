import Link from "next/link";
import type { ReactNode } from "react";

import { FOOTER_LINKS } from "@/config/links";

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
    <footer className="text-primary-foreground bg-primary mt-10 w-full pt-5">
      <div className="mx-auto mb-14 grid w-full max-w-screen-xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <FooterSection title="Kontakt">
          <FooterLink href={`mailto:${FOOTER_LINKS.contactMail}`}>
            {FOOTER_LINKS.contactMail}
          </FooterLink>
        </FooterSection>

        <FooterSection title="Przydatne linki">
          <FooterLink href="/">Strona główna</FooterLink>
          <FooterLink href="/#">Zgłaszanie problemów</FooterLink>
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
      <div className="bg-secondary-foreground/20 text-primary-foreground/85">
        <div className="mx-auto flex max-w-screen-xl flex-row items-center justify-between px-4 py-6">
          <span>&copy; {new Date().getFullYear()} Solvro</span>
          <Link
            href="https://solvro.pl/"
            className="underline-offset-4 hover:underline"
            target="_blank"
          >
            Made with ❤️ by&nbsp;Solvro
          </Link>
        </div>
      </div>
    </footer>
  );
}
