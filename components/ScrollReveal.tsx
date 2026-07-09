"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.revealReady = "true";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            if (element.dataset.revealDelay) {
              element.style.transitionDelay = element.dataset.revealDelay;
            }
            element.removeAttribute("data-reveal-pending");
            element.classList.add("is-visible");
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12
      }
    );

    const prepareElements = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const startsInViewport = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

        if (startsInViewport) {
          element.removeAttribute("data-reveal-pending");
          element.classList.add("is-visible");
          return;
        }

        element.classList.remove("is-visible");
        element.setAttribute("data-reveal-pending", "true");
        observer.observe(element);
      });
    };

    const revealFrame = window.requestAnimationFrame(prepareElements);

    let frame = 0;
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", `${Math.min(Math.max(progress, 0), 1)}`);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(revealFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
