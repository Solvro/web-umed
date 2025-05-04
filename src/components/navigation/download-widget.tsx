import Link from "next/link";

export function DownloadWidget() {
  return (
    <div className="bg-primary relative -top-5 flex h-40 items-end justify-center rounded-2xl">
      <Link
        href="/download"
        className="fluid-button hover:bg-primary/80 mx-4 my-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-center text-sm font-semibold hover:font-bold"
        aria-label="Pobierz aplikację"
      >
        Pobierz aplikację!
      </Link>
    </div>
  );
}
