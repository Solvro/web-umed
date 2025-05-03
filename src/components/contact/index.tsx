"use client";

import { FOOTER_LINKS } from "@/config/constants";

import { ContactForm } from "./form";

export function Contact() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-screen-xl px-4 py-10">
        <h2 className="mb-8 text-center text-3xl font-medium">Kontakt</h2>
        <div className="grid gap-x-6 gap-y-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl">Dane kontaktowe</h2>
            <div>
              <p>Uniwersytet Medyczny</p>
              <p>ul. Lorem Ipsum 42</p>
              <p>08-324&nbsp;Wrocław</p>
              <a
                href={`mailto:${FOOTER_LINKS.contactMail}`}
                className="underline-offset-4 hover:underline"
              >
                {FOOTER_LINKS.contactMail}
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-2xl">Formularz kontaktowy</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
