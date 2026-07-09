"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

type AfterLaunchItem = {
  tag: string;
  title: string;
  body: string;
};

type AfterLaunchScrollerProps = {
  items: AfterLaunchItem[];
};

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {direction === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

export function AfterLaunchScroller({ items }: AfterLaunchScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({
    active: false,
    hasMoved: false,
    lastTime: 0,
    lastX: 0,
    pointerId: 0,
    scrollLeft: 0,
    startX: 0,
    velocity: 0
  });
  const momentumRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isGliding, setIsGliding] = useState(false);

  const stopMomentum = () => {
    if (momentumRef.current) {
      window.cancelAnimationFrame(momentumRef.current);
      momentumRef.current = null;
    }
    setIsGliding(false);
  };

  useEffect(() => stopMomentum, []);

  const startMomentum = (initialVelocity: number) => {
    const scroller = scrollerRef.current;
    if (!scroller || Math.abs(initialVelocity) < 0.05) return;

    let velocity = initialVelocity;
    setIsGliding(true);

    const step = () => {
      const target = scrollerRef.current;
      if (!target) {
        momentumRef.current = null;
        setIsGliding(false);
        return;
      }

      const previous = target.scrollLeft;
      target.scrollLeft += velocity * 16;
      velocity *= 0.92;

      const hitEdge = Math.abs(target.scrollLeft - previous) < 0.1;
      if (Math.abs(velocity) < 0.02 || hitEdge) {
        momentumRef.current = null;
        setIsGliding(false);
        return;
      }

      momentumRef.current = window.requestAnimationFrame(step);
    };

    momentumRef.current = window.requestAnimationFrame(step);
  };

  const scrollByCard = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const distance = Math.min(scroller.clientWidth * 0.86, 430);
    scroller.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth"
    });
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    stopMomentum();
    const now = performance.now();
    dragRef.current = {
      active: true,
      hasMoved: false,
      lastTime: now,
      lastX: event.clientX,
      pointerId: event.pointerId,
      scrollLeft: scroller.scrollLeft,
      startX: event.clientX,
      velocity: 0
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const scroller = scrollerRef.current;
    if (!drag.active || !scroller) return;

    const delta = event.clientX - drag.startX;
    const now = performance.now();
    const timeDelta = Math.max(now - drag.lastTime, 16);
    const movement = event.clientX - drag.lastX;

    if (Math.abs(delta) > 4) drag.hasMoved = true;
    drag.velocity = -(movement / timeDelta);
    drag.lastX = event.clientX;
    drag.lastTime = now;

    scroller.scrollLeft = drag.scrollLeft - delta;
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active) return;

    if (event.currentTarget.hasPointerCapture(drag.pointerId)) {
      event.currentTarget.releasePointerCapture(drag.pointerId);
    }

    const releaseVelocity = drag.velocity;
    drag.active = false;
    setIsDragging(false);
    startMomentum(releaseVelocity);
  };

  const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!dragRef.current.hasMoved) return;

    event.preventDefault();
    event.stopPropagation();
    dragRef.current.hasMoved = false;
  };

  return (
    <div className="mt-10">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
          <span className="relative h-11 w-28 overflow-hidden rounded-full border border-neutral-300 bg-white">
            <span className="absolute left-2 top-2 h-7 w-10 border border-neutral-300 bg-neutral-100" />
            <span className="absolute right-2 top-2 h-7 w-10 border border-neutral-300 bg-neutral-100" />
            <span className="after-launch-swipe-card absolute top-2 h-7 w-10 border border-neutral-950 bg-neutral-950" />
            <span className="after-launch-swipe-trail absolute left-4 right-4 top-1/2 h-px bg-neutral-950/20" />
          </span>
          <span>
            <span className="block text-neutral-950 sm:hidden">Links/rechts wischen</span>
            <span className="hidden text-neutral-950 sm:block">Mit Pfeilen oder Trackpad</span>
            <span className="mt-0.5 block text-[10px] font-medium normal-case tracking-normal text-neutral-500">
              Weitere Karten liegen daneben
            </span>
          </span>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            className="grid h-10 w-10 place-items-center rounded-full border border-neutral-300 bg-white text-neutral-950 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
            aria-label="Nach links navigieren"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            className="grid h-10 w-10 place-items-center rounded-full border border-neutral-300 bg-white text-neutral-950 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
            aria-label="Nach rechts navigieren"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={handleClickCapture}
        className={`touch-pan-y overflow-x-auto pb-4 [scrollbar-width:thin] ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
        style={{ scrollSnapType: isDragging || isGliding ? "none" : "x proximity" }}
      >
        <div className="flex min-w-max gap-3 md:gap-4">
          {items.map((item, index) => (
            <article
              key={item.title}
              data-reveal="slide"
              data-reveal-delay={`${index * 70}ms`}
              className="group flex min-h-[300px] w-[78vw] max-w-[340px] shrink-0 flex-col justify-between border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-neutral-950 md:min-h-[360px] md:w-[360px] md:p-6"
              style={{ scrollSnapAlign: "start" }}
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm tabular-nums text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    {item.tag}
                  </p>
                </div>
                <h3 className="mt-8 text-xl font-semibold leading-tight text-neutral-950 md:mt-10 md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-neutral-600 md:mt-6 md:text-base md:leading-8">{item.body}</p>
              </div>
              <div className="mt-8 h-px bg-gradient-to-r from-neutral-950 via-neutral-200 to-transparent opacity-40" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
