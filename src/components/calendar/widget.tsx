"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import type { CalendarEvent } from "@/lib/types";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";

const twoPadded = (value: number) =>
  value < 10 ? `0${value.toString()}` : value.toString();

const convertRelativeDate = (date: Date) =>
  `${date.getFullYear().toString()}-${twoPadded(date.getMonth() + 1)}-${twoPadded(date.getDate())}`;

export function CalendarWidget({ events }: { events: CalendarEvent[] }) {
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();

  const eventDates = new Set(
    events.map((event) => new Date(event.date).toISOString().split("T")[0]),
  );

  return (
    <div
      className={cn(
        "fixed top-[25%] right-0 overflow-x-hidden transition-transform duration-300",
        {
          "translate-x-[250px]": collapsed,
        },
      )}
    >
      <div className="my-auto flex items-center p-14 pr-0">
        <div className="flex items-center rounded-lg drop-shadow-2xl">
          <Button
            variant="ghost"
            aria-controls="calendar"
            className={cn(
              "bg-primary text-primary-foreground cursor-pointer rounded-l-lg rounded-r-none p-20 px-2 shadow-md",
              {
                "shadow-xl": !collapsed,
              },
            )}
            onClick={() => {
              setCollapsed((previous) => !previous);
            }}
          >
            <div className="border-muted h-6 w-1 border-x"></div>
            <span
              style={{ writingMode: "vertical-lr" }}
              className="rotate-180 uppercase"
            >
              Kalendarz
            </span>
          </Button>
          <Calendar
            className="bg-background rounded-lg"
            disabled={(date) => !eventDates.has(convertRelativeDate(date))}
            classNames={{
              day: "cursor-pointer size-8 p-0 font-normal bg-primary rounded-full text-background grid place-items-center",
              day_disabled:
                "bg-transparent cursor-default! text-foreground size-8 p-0 font-normal aria-selected:opacity-100",
            }}
            onDayClick={() => {
              router.push("/news");
              setCollapsed(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
