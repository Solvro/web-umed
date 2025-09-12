import { FrownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function NoDataInfo({
  name,
  title,
  text,
  className,
}: { className?: string } & (
  | { title: string; text: string; name?: never }
  | { name: string; title?: never; text?: never }
)) {
  if (name != null) {
    title = `Brak ${name}`;
    text = `Nie znaleziono żadnych ${name} do wyświetlenia`;
  }
  return (
    <div
      className={cn("text-primary-foreground mb-10 sm:text-center", className)}
    >
      <h3 className="text-active text-xl font-bold">{title}</h3>
      <p className="text-active/90 mt-4 text-lg">{text}</p>
      <FrownIcon className="text-primary/60 mx-auto mt-5" size={48} />
    </div>
  );
}
