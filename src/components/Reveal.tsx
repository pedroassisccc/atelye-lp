import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "ul" | "li";
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    let timer: number | undefined;
    const trigger = () => {
      if (timer) return;
      timer = window.setTimeout(() => setVisible(true), delay);
    };

    const isInView = () => {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.94 && rect.bottom > 0;
    };

    const check = () => {
      if (isInView()) {
        trigger();
        window.removeEventListener("scroll", check);
        window.removeEventListener("resize", check);
      }
    };

    if (isInView()) {
      trigger();
      return;
    }

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      if (timer) window.clearTimeout(timer);
    };
  }, [delay]);

  const Tag = as as "div";
  const animatedClass = `transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
  } ${className}`;

  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={animatedClass}>
      {children}
    </Tag>
  );
}
