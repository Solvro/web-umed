"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ABOUT_EVENT_FRAGMENT } from "@/config/constants";
import { navigateToElement } from "@/lib/helpers";

export function LearnMoreButton() {
  return (
    <Button
      asChild
      className="mt-6 w-[200px] rounded-4xl py-5 text-sm md:mt-8 lg:mt-12 lg:w-[300px] lg:py-6 lg:text-lg"
      variant="secondary"
      onClick={(event_) => {
        event_.preventDefault();
        navigateToElement(`#${ABOUT_EVENT_FRAGMENT}`);
      }}
    >
      <Link href={`/#${ABOUT_EVENT_FRAGMENT}`}>Dowiedz się więcej!</Link>
    </Button>
  );
}
