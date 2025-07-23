import Image from "next/image";
import type { ImageProps } from "next/image";

import DoubleQuaverIcon from "@/assets/double-quaver.svg";
import QuaverIcon from "@/assets/quaver.svg";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "src" | "alt">;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NoteIcon(icon: any) {
  function Icon({ className, ...props }: Props) {
    return (
      <Image
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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

export const Quaver = NoteIcon(QuaverIcon);
export const DoubleQuaver = NoteIcon(DoubleQuaverIcon);
