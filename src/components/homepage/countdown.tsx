"use client";

import type { Duration } from "date-fns";
import { intervalToDuration } from "date-fns";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

function CountdownPart({ value, label }: { value?: number; label: string }) {
  return (
    <div className="border-secondary min-w-10 border-b-2 py-1 text-center sm:min-w-16 sm:py-2">
      {value ?? 0}
      {label}
    </div>
  );
}

export function EventCountdown({ nextEventDate }: { nextEventDate: Date }) {
  const [duration, setDuration] = useState<Duration | undefined>();

  // referencing `nextEventDate` directly in the effect causes issues with re-renders (?)
  // not sure if this is a solution or a workaround, but it gets rid of the errors
  const eventTimestamp = useMemo(
    () => nextEventDate.getTime(),
    [nextEventDate],
  );

  useEffect(() => {
    function updateDuration() {
      setDuration(
        intervalToDuration({
          start: Date.now(),
          end: eventTimestamp,
        }),
      );
    }
    const interval = setInterval(updateDuration, 1000);
    updateDuration();

    return () => {
      clearInterval(interval);
    };
  }, [eventTimestamp]);

  return (
    <div className="mt-9 text-lg sm:text-xl">
      <p>Następne wydarzenie:</p>
      <div
        className={cn("mt-3 flex gap-3 sm:gap-5", {
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
