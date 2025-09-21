import { formatDate } from "date-fns";
import { pl } from "date-fns/locale";

export function navigateToElement(query: string) {
  document.querySelector(query)?.scrollIntoView({ behavior: "smooth" });
  // use the Window API to perform shallow routing to keep the URL consistent
  window.history.pushState(undefined, "", query);
}

export const typedEntries = <T extends Record<string, unknown>>(record: T) =>
  Object.entries(record) as {
    [K in keyof T]-?: T[K] extends undefined
      ? [K, T[K]] // if the type really includes undefined, keep it
      : [K, Exclude<T[K], undefined>]; // otherwise exclude it
  }[keyof T][];

export const formatPolishDate = (date: string) =>
  formatDate(new Date(date), "dd.MM.yyyy", {
    locale: pl,
  });
