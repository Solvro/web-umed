import type { Route } from "next";

import type { Organization, OrganizationWithSocials } from "@/lib/types";

export const API_URL = "https://cms.umed.solvro.pl";

export const ORGANIZATIONS = {
  solvro: {
    name: "KN Solvro",
    description:
      "Jesteśmy strategicznym kołem naukowym Politechniki Wrocławskiej, skupiającym studentów pasjonujących się nowoczesnymi technologiami. Działamy jak software house – członkowie rozwijają aplikacje, systemy i narzędzia wspierające życie akademickie, m.in. aplikację ToPWR czy platformę Eventownik. Koło stawia na praktyczną naukę poprzez realne projekty open‑source, hackathony i współpracę z partnerami z branży IT. Solvro kładzie nacisk na rozwój zarówno umiejętności technicznych (programowanie, DevOps, UX), jak i miękkich – zarządzanie projektami czy praca zespołowa. Jest miejscem, gdzie teoria łączy się z praktyką, a członkowie zdobywają doświadczenie cenione w przyszłej karierze zawodowej.",
    contactUrl:
      "https://solvro.pwr.edu.pl/contact?utm_source=umed&utm_medium=contact",
    socials: {
      www: "https://solvro.pwr.edu.pl?utm_source=umed&utm_medium=footer",
      github: "https://github.com/Solvro",
      facebook: "https://facebook.com/knsolvro",
      instagram: "https://instagram.com/knsolvro",
    },
  },
  sknChorobSerca: {
    description:
      "Studenckie Koło Naukowe Chorób Serca zrzesza studentów zainteresowanych fizjologią układu sercowo-naczyniowego i związanymi z nim schorzeniami. Organizujemy comiesięczne spotkania z ekspertami kardiologii, podczas których omawiamy jednostki chorobowe i nowoczesne metody wspomagania krążenia. Działamy naukowo – bierzemy udział w konferencjach, projektach badawczych i publikujemy wyniki w czasopismach. Prowadzimy warsztaty z resuscytacji, a członkowie zdobywają praktykę na Oddziale Intensywnej Terapii Kardiologicznej, ucząc się m.in. interpretacji EKG, analizy parametrów życiowych i podstawowych procedur medycznych.",
    name: "SKN Chorób Serca",
    contactUrl: "https://www.facebook.com/100049256529819",
    socials: {
      facebook: "https://www.facebook.com/100049256529819",
      instagram: "https://www.instagram.com/#", // TODO: update
    },
  },
  wca: {
    name: "Wrocławskie Centrum Akademickie",
    description:
      "Wrocławskie Centrum Akademickie (WCA) to instytucja łącząca samorząd miasta z wrocławskim środowiskiem akademickim, wspierająca rozwój nauki, talentów i innowacji. Znane jest jako koordynator miejskiego programu stypendialnego, programu Visiting Professors oraz inicjator Akademii Młodych Uczonych i Artystów. WCA realizuje własne projekty dotyczące rynku pracy i polityki rozwoju gospodarczego, a także doradza uczelniom w zakresie współpracy z biznesem i otoczeniem społecznym. Projekt „Zdrowie gra pierwsze skrzypce” został dofinansowany ze środków programu FAST prowadzonego przez WCA.",
    contactUrl: "https://www.wroclaw.pl/akademicki-wroclaw/kontakt-wca",
  },
} satisfies Record<string, Organization | OrganizationWithSocials>;

export const CONTACT_EMAIL = "komunikacja@umw.edu.pl";

export const ABOUT_EVENT_FRAGMENT = "about-event";

export const PAGE_PATHS = {
  [`#${ABOUT_EVENT_FRAGMENT}`]: "O wydarzeniu",
  news: "Aktualności",
  lifestyle: "Profilaktyka",
  results: "Wyniki badań",
} as const;

export const MUTATION_KEYS = {
  REPORT_FORM: "reportForm",
};

export const QUERY_KEYS = {
  EMAIL: process.env.BUG_FORM_EMAIL_KEY ?? "entry.280273623",
  TITLE: process.env.BUG_FORM_TITLE_KEY ?? "entry.1248470767",
  CONTENT: process.env.BUG_FORM_CONTENT_KEY ?? "entry.881414235",
};

export const REPORT_FORM_URL =
  process.env.BUG_FORM_URL ??
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2xwpWLh8fPizL-ik_uSEOmppCPCRiF87Wu0vli1ElLurVYA/formResponse";

export const NEWS_SECTION_ID = "news-section";

export const APP_DOWNLOAD_URLS = {
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.solvro.mobile_umed",
  appStore: "https://apps.apple.com/pl/app/umed/", // TODO: update the url
} satisfies Record<string, Route>;

/** A query to target a Directus CMS item's author data fields. */
export const USER_FIELDS_QUERY =
  "user_created.first_name,user_created.last_name,user_created.title,user_updated.first_name,user_updated.last_name,user_updated.title";
