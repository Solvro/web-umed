import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import type { ReactNode } from "react";

import { CalendarWidget } from "@/components/calendar/widget";
import { Footer } from "@/components/footer";
import { fetchData } from "@/lib/api";
import { QueryProvider } from "@/lib/query-client";
import type { CalendarEvent } from "@/lib/types";

import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UMed × Solvro – „Zdrowie Gra Pierwsze Skrzypce”",
  description:
    "Projekt „Zdrowie Gra Pierwsze Skrzypce” we Wrocławiu bada wpływ muzyki na wydolność serca. Sprawdź, jak Uniwersytet Medyczny i KN Solvro łączą naukę i dźwięki w innowacyjnych badaniach zdrowia!",
};

async function fetchEvents() {
  let result;
  try {
    result = await fetchData<{ data: CalendarEvent[] }>("items/events");
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
  return result.data;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const events = await fetchEvents();

  return (
    <html lang="pl">
      <QueryProvider>
        <body
          className={`${urbanist.variable} bg-background flex min-h-screen flex-col font-sans antialiased`}
        >
          <NextTopLoader
            color="var(--color-primary)"
            showSpinner={false}
            crawlSpeed={100}
            crawl={true}
            initialPosition={0.1}
          />
          <div className="flex-grow">{children}</div>
          <CalendarWidget events={events} />
          <Footer />
          <Script
            defer
            src="https://analytics.solvro.pl/script.js"
            data-website-id="4615f41a-514f-440f-a259-fc563a43c93f"
          ></Script>
        </body>
      </QueryProvider>
    </html>
  );
}
