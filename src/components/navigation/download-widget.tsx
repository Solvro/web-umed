import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DownloadWidget() {
  return (
    <div className="bg-primary relative -top-5 right-6 flex h-40 items-end justify-center rounded-b-xl shadow-xl sm:right-0 sm:rounded-b-2xl">
      <Link
        href="/download"
        className={cn(
          buttonVariants({ variant: "fluid" }),
          "m-2.5 flex size-18 flex-col rounded-lg bg-white text-center text-sm font-semibold hover:font-bold sm:m-4 sm:size-20 sm:rounded-2xl",
        )}
      >
        <span>Pobierz</span>
        <span>aplikację!</span>
      </Link>
    </div>
  );
}
