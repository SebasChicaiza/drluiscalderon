"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  animationClassName?: string;
};

export function Reveal({
  children,
  className = "",
  animationClassName = "motion-safe:animate-[fade-up_0.9s_ease-out_both]",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${
        visible
          ? `${animationClassName} opacity-100 translate-y-0`
          : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}
