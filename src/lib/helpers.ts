export function navigateToElement(query: string) {
  document.querySelector(query)?.scrollIntoView({ behavior: "smooth" });
  // use the Window API to perform shallow routing to keep the URL consistent
  window.history.pushState(undefined, "", query);
}
