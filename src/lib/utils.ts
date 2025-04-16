import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { API_URL } from "@/config/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(image_id: string) {
  return `${API_URL}/assets/${image_id}`;
}
