"use client";

import type { Route } from "next";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

import appStoreImage from "@/../public/download-app-store.png";
import googlePlayImage from "@/../public/download-google-play.png";
import { APP_DOWNLOAD_URLS } from "@/config/constants";

function DownloadButton({
  url,
  image,
  store,
}: {
  url: Route;
  image: StaticImageData;
  store: "google play" | "app store";
}) {
  return (
    <Link href={url} target="_blank">
      <Image src={image} alt={`pobierz z ${store}`} />
    </Link>
  );
}

export function DownloadButtons() {
  return (
    <div className="mt-4 flex items-center justify-center gap-4 sm:mt-20 sm:gap-20">
      <DownloadButton
        url={APP_DOWNLOAD_URLS.googlePlay}
        image={googlePlayImage}
        store="google play"
      />
      <DownloadButton
        url={APP_DOWNLOAD_URLS.appStore}
        image={appStoreImage}
        store="app store"
      />
    </div>
  );
}
