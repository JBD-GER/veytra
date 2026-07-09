import type { ReactNode } from "react";

type SEOContentBlockProps = {
  children: ReactNode;
  className?: string;
};

export function SEOContentBlock({ children, className = "" }: SEOContentBlockProps) {
  return (
    <div
      className={`seo-content max-w-none ${className}`}
    >
      {children}
    </div>
  );
}
