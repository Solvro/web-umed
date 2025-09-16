import type { CalendarEvent } from "@/lib/types";

import { EventCountdownInternal } from "./internal";

export function EventCountdown({
  nextEvent,
}: {
  nextEvent: CalendarEvent | null;
}) {
  return (
    <div className="mt-9 text-lg sm:text-xl">
      <p>Następne wydarzenie:</p>
      {nextEvent == null ? (
        <p className="text-accent">Nie ma żadnych nadchodzących wydarzeń</p>
      ) : (
        <EventCountdownInternal nextEventDate={new Date(nextEvent.date)} />
      )}
    </div>
  );
}
