"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionTitle({
  overline,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      {overline && (
        <FadeIn>
          <p
            className={cn(
              "font-heading font-semibold tracking-widest uppercase text-sm mb-3",
              light ? "text-secondary" : "text-secondary",
            )}
          >
            {overline}
          </p>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2
          className={cn(
            "font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
            light ? "text-white" : "text-primary",
          )}
        >
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p
            className={cn(
              "text-lg max-w-2xl mt-4",
              align === "center" && "mx-auto",
              light ? "text-white/70" : "text-gray-500",
            )}
          >
            {description}
          </p>
          <div
            className={cn(
              "w-24 h-1 rounded-full mt-6",
              align === "center" && "mx-auto",
              light ? "bg-secondary" : "bg-secondary",
            )}
          />
        </FadeIn>
      )}
    </div>
  );
}
