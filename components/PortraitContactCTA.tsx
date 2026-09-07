import Image from "next/image";
import Link from "next/link";

import portrait from "@/public/images/team/christoph-pfad.png";

type PortraitContactCTAProps = {
  onClick?: () => void;
};

export function PortraitContactCTA({ onClick }: PortraitContactCTAProps) {
  return (
    <Link
      href="/kontakt#anfrage"
      onClick={onClick}
      aria-label="Mit Christoph Pfad sprechen: zur Anfrage"
      className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-[6px] border border-neutral-950 bg-neutral-950 p-1.5 pr-2.5 text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 sm:gap-2.5 sm:pr-3.5"
    >
      <span className="relative block h-8 w-8 shrink-0 overflow-hidden rounded-full bg-neutral-200 sm:h-10 sm:w-10">
        <Image
          src={portrait}
          alt=""
          fill
          sizes="(min-width: 640px) 80px, 64px"
          loading="eager"
          placeholder="blur"
          className="origin-[52%_23%] scale-[1.8] object-cover object-[52%_18%]"
        />
      </span>
      <span className="text-[11px] font-medium sm:hidden">Kontakt</span>
      <span className="hidden flex-col gap-0.5 sm:flex">
        <span className="text-[11px] font-medium leading-4">Christoph Pfad</span>
        <span className="text-[10px] leading-4 text-white/80">Vorhaben besprechen <span aria-hidden="true">↗</span></span>
      </span>
    </Link>
  );
}
