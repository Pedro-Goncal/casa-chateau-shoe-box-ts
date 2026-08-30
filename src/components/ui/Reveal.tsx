"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

const ease = [0.16, 1, 0.3, 1] as const;

const hiddenStates = {
  rise: { opacity: 0, y: 16 },
  media: { opacity: 0, y: 12, scale: 1.04 },
  fade: { opacity: 0 },
} as const;

const visibleStates = {
  rise: { opacity: 1, y: 0 },
  media: { opacity: 1, y: 0, scale: 1 },
  fade: { opacity: 1 },
} as const;

const durations = {
  rise: 0.8,
  media: 1.05,
  fade: 0.65,
} as const;

type RevealVariant = keyof typeof hiddenStates;

function keepLayer(_transform: object, generated: string) {
  return !generated || generated === "none"
    ? "translate3d(0,0,0)"
    : generated;
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
}: RevealProps) {
  const hidden = hiddenStates[variant];
  const visible = visibleStates[variant];

  return (
    <motion.div
      className={cn("[backface-visibility:hidden]", className)}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: durations[variant], delay, ease }}
      transformTemplate={keepLayer}
    >
      {children}
    </motion.div>
  );
}
