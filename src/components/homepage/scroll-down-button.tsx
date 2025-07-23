"use client";

import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NEWS_SECTION_ID } from "@/config/constants";

export function ScrollDownButton() {
  return (
    <Button
      variant="secondary"
      className="z-10 grid size-16 translate-y-[50%] place-items-center rounded-full text-center"
      onClick={() => {
        const newsSection = document.querySelector(`#${NEWS_SECTION_ID}`);
        if (newsSection == null) {
          console.error(
            "Invariant failed in ScrollDownButton - news section not found",
          );
          return;
        }
        newsSection.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <ChevronDown className="scale-300" />
    </Button>
  );
}
