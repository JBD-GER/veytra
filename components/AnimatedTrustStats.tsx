"use client";

import { useEffect, useRef, useState } from "react";

type TrustStat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  body: string;
  chart: "steps" | "bars" | "area";
  max?: number;
  points: number[];
};

type AnimatedTrustStatsProps = {
  stats: TrustStat[];
};

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

function formatValue(value: number, prefix = "", suffix = "") {
  return `${prefix}${Math.round(value).toLocaleString("de-DE")}${suffix}`;
}

function buildStepPath(points: { x: number; y: number }[]) {
  if (points.length === 0) return "";
  return points.slice(1).reduce((path, point, index) => {
    const previous = points[index];
    const middleX = previous.x + (point.x - previous.x) * 0.58;
    return `${path} L${middleX.toFixed(1)} ${previous.y.toFixed(1)} L${middleX.toFixed(1)} ${point.y.toFixed(1)} L${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
  }, `M${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`);
}

function buildSmoothPath(points: { x: number; y: number }[]) {
  if (points.length === 0) return "";
  return points.slice(1).reduce((path, point, index) => {
    const previous = points[index];
    const controlX = previous.x + (point.x - previous.x) * 0.52;
    return `${path} C${controlX.toFixed(1)} ${previous.y.toFixed(1)} ${controlX.toFixed(1)} ${point.y.toFixed(1)} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
  }, `M${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`);
}

function MiniChart({ stat, progress }: { stat: TrustStat; progress: number }) {
  const max = stat.max ?? Math.max(...stat.points);
  const chartPoints = stat.points.map((point, index) => {
    const x = 52 + index * (218 / Math.max(stat.points.length - 1, 1));
    const y = 136 - (point / max) * 104;
    return { x, y };
  });
  const stepPath = buildStepPath(chartPoints);
  const smoothPath = buildSmoothPath(chartPoints);
  const areaPath = `${smoothPath} L270 136 L52 136 Z`;
  const activePoints = Math.max(1, Math.ceil(stat.points.length * progress));

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 310 190"
      className="mt-6 h-40 w-full text-neutral-950 md:mt-8 md:h-52"
      fill="none"
    >
      <path d="M42 148 V22" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.4" />
      <path d="M42 148 H286" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.4" />
      <path d="M42 22 L37 31 H47 Z" fill="currentColor" opacity="0.28" />
      <path d="M286 148 L277 143 V153 Z" fill="currentColor" opacity="0.28" />
      {[0.25, 0.5, 0.75].map((ratio) => (
        <line
          key={ratio}
          x1="42"
          x2="286"
          y1={136 - ratio * 104}
          y2={136 - ratio * 104}
          stroke="currentColor"
          strokeOpacity="0.08"
        />
      ))}
      <text
        x="14"
        y="95"
        fill="currentColor"
        opacity="0.5"
        fontSize="10"
        fontWeight="700"
        letterSpacing="1.4"
        transform="rotate(-90 14 95)"
      >
        ANZAHL
      </text>
      <text x="244" y="176" fill="currentColor" opacity="0.5" fontSize="10" fontWeight="700" letterSpacing="1.4">
        ZEIT
      </text>

      {stat.chart === "bars" ? (
        chartPoints.map((point, index) => {
          const barProgress = Math.min(Math.max(progress * 1.18 - index * 0.045, 0), 1);
          const height = (136 - point.y) * barProgress;
          return (
            <rect
              key={`${stat.label}-${index}`}
              x={point.x - 11}
              y={136 - height}
              width="22"
              height={height}
              fill="currentColor"
              opacity={index < activePoints ? 0.92 : 0.08}
            />
          );
        })
      ) : null}

      {stat.chart === "area" ? (
        <>
          <path d={areaPath} fill="currentColor" opacity={0.08 * progress} />
          <path
            d={smoothPath}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - progress}
          />
        </>
      ) : null}

      {stat.chart === "steps" ? (
        <path
          d={stepPath}
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - progress}
        />
      ) : null}

      {chartPoints.map((point, index) => (
        <circle
          key={`${stat.label}-point-${index}`}
          cx={point.x}
          cy={point.y}
          r={index === chartPoints.length - 1 ? 4.8 : 3}
          fill="currentColor"
          opacity={index < activePoints ? 1 : 0}
        />
      ))}
    </svg>
  );
}

export function AnimatedTrustStats({ stats }: AnimatedTrustStatsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionFrame = window.requestAnimationFrame(() => setProgress(1));
      return () => window.cancelAnimationFrame(reducedMotionFrame);
    }

    let frame = 0;
    let started = false;
    const threshold = window.innerWidth < 768 ? 0.12 : 0.35;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) return;
        started = true;
        const start = performance.now();
        const duration = 1250;

        const tick = (time: number) => {
          const next = Math.min((time - start) / duration, 1);
          setProgress(easeOutCubic(next));
          if (next < 1) {
            frame = window.requestAnimationFrame(tick);
          }
        };

        frame = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="grid gap-4 md:grid-cols-3">
      {stats.map((stat, index) => {
        const number = Math.round(stat.value * progress);

        return (
          <article
            key={stat.label}
            className="group relative min-h-[390px] overflow-hidden border border-neutral-200 bg-neutral-50 p-5 transition hover:border-neutral-950 md:min-h-[500px] md:p-7"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-neutral-950" style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }} />
            <div className="flex items-start justify-between gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {stat.label}
              </p>
              <p className="text-sm tabular-nums text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </p>
            </div>

            <p className="mt-6 whitespace-nowrap text-[3rem] font-semibold leading-none tracking-normal text-neutral-950 sm:text-[3.6rem] md:mt-8 md:text-[4.8rem] lg:text-[5.2rem]">
              <span className="tabular-nums">{formatValue(number, stat.prefix, stat.suffix)}</span>
            </p>

            <p className="mt-5 text-sm leading-7 text-neutral-600">{stat.body}</p>

            <MiniChart stat={stat} progress={progress} />
          </article>
        );
      })}
    </div>
  );
}
