"use client";

import Link from "next/link";

import { CONTACT_EMAIL } from "@/config/constants";

import { ContactForm } from "./form";

export function Contact() {
  return (
    <section id="kontakt">
      <div className="mx-auto max-w-screen-xl px-4 py-10">
        <h2 className="mb-8 text-center text-3xl font-medium">Kontakt</h2>
        <div className="grid gap-x-6 gap-y-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl">Dane kontaktowe</h2>
            <div>
              <address className="not-italic">
                <p>Uniwersytet Medyczny</p>
                <p>im. Piastów Śląskich we Wrocławiu</p>
                <p>Wybrzeże Ludwika Pasteura 1</p>
                <p>50-367&nbsp;Wrocław</p>
              </address>
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </Link>
            </div>
          </div>
          <div className="sm:px-10 md:px-20 lg:px-0">
            <h2 className="mb-6 text-2xl">Formularz kontaktowy</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
