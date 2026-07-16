"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { LogoWordmark } from "@/components/LogoWordmark";
import { cn } from "@/lib/utils";

type HeaderNavigationItem = {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
  }[];
};

const headerNavigation: HeaderNavigationItem[] = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Für Unternehmen", href: "/fuer-unternehmen" },
  { label: "Für Gründer", href: "/fuer-gruender" },
  { label: "Für Startups", href: "/fuer-startups" },
  {
    label: "Veytra",
    children: [
      { label: "Inkubator Hannover", href: "/inkubator-hannover" },
      { label: "Leistungen", href: "/leistungen" },
      { label: "Prozess", href: "/prozess" },
      { label: "Preis", href: "/preise" },
      { label: "Geschichte", href: "/geschichte" },
      { label: "Ratgeber", href: "/ratgeber" }
    ]
  }
];

function DropdownIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={className}
      fill="none"
    >
      <path
        d="M4 6.25 8 10l4-3.75"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DropdownIndicator() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition group-hover:border-neutral-300 group-hover:text-neutral-950 group-focus-within:border-neutral-300 group-focus-within:text-neutral-950">
      <DropdownIcon className="h-3 w-3 transition group-hover:rotate-180 group-focus-within:rotate-180" />
    </span>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (item: HeaderNavigationItem) =>
    item.href === pathname || Boolean(item.children?.some((child) => child.href === pathname));

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between gap-4 px-5 md:px-8">
        <LogoWordmark />

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-5 xl:flex">
          {headerNavigation.map((item) => {
            const active = isActive(item);
            const parentClassName = cn(
              "inline-flex min-h-10 items-center gap-1.5 text-sm text-neutral-600 transition hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950",
              active && "text-neutral-950"
            );

            if (!item.children) {
              return (
                <Link key={item.label} href={item.href ?? "#"} className={parentClassName}>
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="group relative">
                {item.href ? (
                  <Link href={item.href} className={parentClassName}>
                    {item.label}
                    <DropdownIndicator />
                  </Link>
                ) : (
                  <button type="button" className={parentClassName}>
                    {item.label}
                    <DropdownIndicator />
                  </button>
                )}
                <div className="invisible absolute left-0 top-full z-50 min-w-56 translate-y-2 border border-neutral-200 bg-white p-2 opacity-0 shadow-[0_24px_80px_rgba(0,0,0,0.12)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        "block rounded-[6px] px-3 py-3 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950",
                        pathname === child.href && "bg-neutral-100 text-neutral-950"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/kontakt"
            className="rounded-[6px] border border-neutral-950 bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            Venture anfragen
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex min-h-11 shrink-0 items-center rounded-[6px] border border-neutral-300 px-4 text-sm font-medium text-neutral-950 transition hover:border-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 xl:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? "Schließen" : "Menü"}
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-neutral-200 bg-white xl:hidden">
          <nav aria-label="Mobile Hauptnavigation" className="mx-auto grid max-w-[1240px] gap-1 px-5 py-5">
            {headerNavigation.map((item) => (
              <div key={item.label} className="grid gap-1">
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-[6px] px-3 py-3 text-base text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950",
                      isActive(item) && "bg-neutral-100 text-neutral-950"
                    )}
                  >
                    <span>{item.label}</span>
                    {item.children ? (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 text-neutral-500">
                        <DropdownIcon className="h-3.5 w-3.5" />
                      </span>
                    ) : null}
                  </Link>
                ) : (
                  <p className="flex items-center gap-1.5 px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    <span>{item.label}</span>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-200">
                      <DropdownIcon className="h-3 w-3" />
                    </span>
                  </p>
                )}
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-[6px] px-6 py-3 text-sm text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950",
                      pathname === child.href && "bg-neutral-100 text-neutral-950"
                    )}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setIsOpen(false)}
              className={cn(
                "mt-3 rounded-[6px] border border-neutral-950 bg-neutral-950 px-3 py-3 text-center text-base font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950",
                pathname === "/kontakt" && "bg-neutral-800"
              )}
            >
              Venture anfragen
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
