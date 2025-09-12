import { cn } from "@/lib/utils";

export function RichText({
  content,
  className,
  invertColors = false,
}: {
  content: string;
  className?: string;
  invertColors?: boolean;
}) {
  return (
    <div
      className={cn("prose prose-neutral max-w-none", className, {
        "prose-invert": invertColors,
      })}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
