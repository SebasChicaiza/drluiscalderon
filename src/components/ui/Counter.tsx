"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export function Counter({
  value,
  label,
  prefix = "",
  suffix = "",
  duration = 1200,
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(value);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [duration, started, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-start gap-2 rounded-2xl bg-white/5 p-4 text-white"
    >
      <div className="text-3xl font-bold leading-tight md:text-4xl">
        {prefix}
        {display}
        {suffix}
      </div>
      <p className="text-sm text-white/80">{label}</p>
    </div>
  );
}
