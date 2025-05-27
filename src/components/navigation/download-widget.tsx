import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "../ui/button";

export function DownloadWidget() {
  return (
    <div className="bg-primary relative -top-5 right-6 flex h-40 items-end justify-center rounded-b-2xl sm:right-0">
      <Link
        href="/download"
        className={cn(
          buttonVariants({ variant: "fluid" }),
          "mx-4 my-4 flex size-20 flex-col rounded-2xl bg-white text-center text-sm font-semibold hover:font-bold",
        )}
      >
        <span>Pobierz</span>
        <span>aplikację!</span>
      </Link>
    </div>
  );
}
