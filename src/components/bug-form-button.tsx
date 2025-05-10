"use client";

import { Button } from "@/components/ui/button";
import { useBugReport } from "@/hooks/use-bug-form";

export function BugFormButton() {
  const { openDialog } = useBugReport();

  return (
    <Button
      className="text-primary-foreground text-md cursor-pointer justify-start p-0 font-normal underline-offset-4 hover:underline"
      variant="link"
      onClick={(event) => {
        event.preventDefault();
        openDialog();
      }}
    >
      Zgłaszanie problemów
    </Button>
  );
}
