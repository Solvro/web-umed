import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DownloadWidget() {
  return (
    <div className="bg-primary relative -top-5 right-15 flex h-40 items-end justify-center rounded-2xl">
      <Link
        href="/download"
        className={cn(
          buttonVariants({ variant: "fluid" }),
          "mx-4 my-4 h-20 w-20 flex-col items-center justify-center rounded-2xl bg-white text-center text-sm font-semibold",
        )}
      >
        <span>Pobierz</span>
        <span>aplikację!</span>
      </Link>
    </div>
  );
}
