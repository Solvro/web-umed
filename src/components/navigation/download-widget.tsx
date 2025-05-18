import Link from "next/link";

export function DownloadWidget() {
  return (
    <div className="bg-primary relative -top-5 right-6 flex h-40 items-end justify-center rounded-b-2xl sm:right-0">
      <Link
        href="/download"
        className="fluid-button hover:text-background hover:bg-primary/80 mx-4 my-4 flex size-20 items-center justify-center rounded-2xl bg-white text-center text-sm font-semibold hover:font-bold"
      >
        Pobierz aplikację!
      </Link>
    </div>
  );
}
