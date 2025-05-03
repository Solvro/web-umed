"use client";

import type { Duration } from "date-fns";
import { intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

function CountdownPart({ value, label }: { value?: number; label: string }) {
  return (
    <div className="border-primary min-w-10 border-b-2 py-1 text-center sm:min-w-16 sm:py-2">
      {value ?? 0}
      {label}
    </div>
  );
}

export function EventCountdown({ nextEventDate }: { nextEventDate: Date }) {
  const [duration, setDuration] = useState<Duration | undefined>();

  useEffect(() => {
    function updateDuration() {
      setDuration(
        intervalToDuration({
          start: Date.now(),
          end: nextEventDate.getTime(),
        }),
      );
    }
    const interval = setInterval(updateDuration, 1000);
    updateDuration();

    return () => {
      clearInterval(interval);
    };
  }, [nextEventDate]);

  return (
    <div className="mt-9 text-xl sm:text-3xl">
      <p>Następne wydarzenie:</p>
      <div
        className={cn("mt-3 flex gap-4 sm:gap-10", {
          invisible: duration == null,
        })}
      >
        <CountdownPart value={duration?.days} label="d" />
        <CountdownPart value={duration?.hours} label="h" />
        <CountdownPart value={duration?.minutes} label="m" />
        <CountdownPart value={duration?.seconds} label="s" />
      </div>
    </div>
  );
}
