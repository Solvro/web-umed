import type { Metadata } from "next";
import {
  Georama,
  Playfair_Display,
  Ubuntu,
  Urbanist,
  Yeseva_One,
} from "next/font/google";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

import { CalendarWidget } from "@/components/calendar/widget";
import { Footer } from "@/components/footer";
import { ORGANIZATIONS } from "@/config/constants";
import { BugReportProvider } from "@/hooks/use-bug-form";
import { fetchData } from "@/lib/api";
import { QueryProvider } from "@/lib/query-client";
import type { CalendarEvent } from "@/lib/types";
import { cn } from "@/lib/utils";

import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

// const emilysCandy = Emilys_Candy({
//   variable: "--font-emilys-candy",
//   subsets: ["latin"],
//   weight: ["400"],
// });

const yesevaOne = Yeseva_One({
  variable: "--font-yeseva-one",
  subsets: ["latin"],
  weight: ["400"],
});

const georama = Georama({
  variable: "--font-georama",
  subsets: ["latin"],
  weight: ["400"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "900"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Zdrowie Gra Pierwsze Skrzypce",
  description: `Projekt „Zdrowie Gra Pierwsze Skrzypce” we Wrocławiu bada wpływ muzyki na wydolność serca. Sprawdź, jak Uniwersytet Medyczny i ${ORGANIZATIONS.solvro.name} łączą naukę i dźwięki w innowacyjnych badaniach zdrowia!`,
  icons: [{ url: "/favicon.svg", type: "image/svg" }],
};

async function fetchEvents() {
  let result;
  try {
    result = await fetchData<{ data: CalendarEvent[] }>(
      "items/events?filter[status]=published",
    );
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
        <BugReportProvider>
          <body
            id="top"
            className={cn(
              "bg-background flex min-h-screen flex-col font-sans antialiased",
              urbanist.variable,
              yesevaOne.variable,
              georama.variable,
              playfairDisplay.variable,
              ubuntu.variable,
            )}
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
            <Toaster richColors />
            <Script
              defer
              src="https://analytics.solvro.pl/script.js"
              data-website-id="fe37dd89-55c7-4c63-9b0d-03d3b351db64"
            ></Script>
          </body>
        </BugReportProvider>
      </QueryProvider>
    </html>
  );
}
