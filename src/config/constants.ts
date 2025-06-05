export const API_URL = "https://cms.umed.solvro.pl";
export const SOLVRO_API_URL = "https://cms.solvro.pl";

export const FOOTER_LINKS = {
  facebook: "https://facebook.com/#",
  instagram: "https://instagram.com/#",
  contactMail: "john.doe@pwr.edu.pl",
};

export const PAGE_PATHS = {
  news: "Aktualności",
  about: "O wydarzeniu",
  lifestyle: "Profilaktyka",
  results: "Wyniki badań",
  team: "Zespół",
};

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

// TODO: Complete the list
// List of ids of individual Solvro team members that participated in the project.
// The list must overlap with the values in this endpoint: https://cms.solvro.pl/items/Team
export const PROJECT_MEMBERS = [
  "ede0eb0f-1bcc-4679-8c83-dda84fd46e51", // Konrad Guzek
  "21c6a9d2-4107-455a-ac46-79d3c45c5953", // Konrad Florczak
  "bcea06be-e278-4ee7-8524-fa553011daff", // Norman Wiese
];
