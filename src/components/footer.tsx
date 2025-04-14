/* eslint-disable react/no-array-index-key */
// Working with immutable data in this file so index as keys is fine.
import Link from "next/link";
import type { ReactNode } from "react";

// TODO: provide actual values
const ELEMENTS = {
  Kontakt: [
    <FooterLink key="contact" href="mailto:john.doe@pwr.edu.pl">
      john.doe@pwr.edu.pl
    </FooterLink>,
  ],
  "Przydatne linki": [
    <FooterLink key="home" href="/">
      Strona główna
    </FooterLink>,
    <FooterLink key="reports" href="/#">
      Zgłaszanie problemów
    </FooterLink>,
  ],
  "Social media": [
    <FooterLink key="facebook" href="https://facebook.com/#">
      Facebook
    </FooterLink>,
    <FooterLink key="instagram" href="https://instagram.com/#">
      Instagram
    </FooterLink>,
  ],
};

export function Footer() {
  return (
    <footer className="text-primary-foreground mt-32 w-full">
      <div className="mx-auto mb-14 grid w-full max-w-screen-xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(ELEMENTS).map(([title, entries]) => (
          <div key={title} className="mb-4">
            <div className="mb-3">
              <span className="text-lg font-medium uppercase">{title}</span>
              <div className="from-primary-foreground/60 h-0.5 w-32 bg-gradient-to-r to-transparent"></div>
            </div>
            <ul>
              {entries.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-primary-foreground/10">
        <div className="mx-auto flex max-w-screen-xl flex-row items-center justify-between px-4 py-6">
          <span className="opacity-80 select-none">
            &copy; Solvro {new Date().getFullYear()}
          </span>
          <Link href="https://solvro.pl/" target="_blank">
            Made with ❤️ by&nbsp;Solvro
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  target = "_blank",
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
