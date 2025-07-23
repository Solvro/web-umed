import Image from "next/image";
import type { ImageProps, StaticImageData } from "next/image";

import DoubleQuaverIcon from "@/../public/double-quaver.svg";
import QuaverIcon from "@/../public/quaver.svg";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "src" | "alt">;

function NoteIcon(icon: StaticImageData) {
  function Icon({ className, ...props }: Props) {
    return (
      <Image
        src={icon}
        alt="Ozdobna nutka"
        {...props}
        className={cn("pointer-events-none flex-shrink-0", className)}
        aria-hidden
      />
    );
  }

  return Icon;
}

export const Quaver = NoteIcon(QuaverIcon as StaticImageData);
export const DoubleQuaver = NoteIcon(DoubleQuaverIcon as StaticImageData);
