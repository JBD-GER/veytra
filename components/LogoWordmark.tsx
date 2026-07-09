import Link from "next/link";

import { site } from "@/lib/site";

type LogoWordmarkProps = {
  href?: string;
};

export function LogoWordmark({ href = "/" }: LogoWordmarkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
      aria-label={`${site.name} Startseite`}
    >
      {site.name}
    </Link>
  );
}
