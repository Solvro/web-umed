import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { QueryProvider } from "@/lib/query-client";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
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
          <Footer />
        </body>
      </QueryProvider>
    </html>
  );
}
