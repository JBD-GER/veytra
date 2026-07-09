import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 py-24 md:px-8 md:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
        404
      </p>
      <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-neutral-950 md:text-6xl">
        Diese Seite wurde nicht gefunden.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
        Die angefragte URL existiert nicht oder wurde verschoben. Über die Startseite findest
        du zurück zur Website.
      </p>
      <Link
        href="/"
        className="mt-9 inline-flex min-h-12 items-center justify-center rounded-[6px] border border-neutral-950 bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
      >
        Zur Startseite
      </Link>
    </section>
  );
}
