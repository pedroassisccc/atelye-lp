import { useEffect, useId, useRef } from "react";
import type { ReactNode } from "react";

type LegalModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export default function LegalModal({
  open,
  onClose,
  title,
  updatedAt,
  children,
}: LegalModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-default"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(680px,calc(100vw-32px))] max-h-[min(82vh,820px)] transition-all duration-300 ${
          open ? "scale-100 opacity-100" : "scale-[0.98] opacity-0"
        }`}
      >
        <div className="liquid-glass rounded-2xl flex flex-col max-h-[inherit] overflow-hidden">
          <div className="flex items-start justify-between gap-4 px-6 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-white/40">
            <div>
              <h2
                id={titleId}
                className="text-[1.25rem] sm:text-[1.5rem] font-medium tracking-tight text-gray-900"
              >
                {title}
              </h2>
              <p className="text-[11.5px] uppercase tracking-wider text-gray-500 mt-1">
                Atualizado em {updatedAt}
              </p>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="shrink-0 w-9 h-9 rounded-full bg-white/60 hover:bg-white text-gray-700 hover:text-gray-900 transition-colors flex items-center justify-center text-xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="overflow-y-auto px-6 sm:px-8 py-6 text-[13.5px] leading-relaxed text-gray-700 space-y-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h3 className="text-[12px] font-semibold uppercase tracking-wider text-[#D63300] mb-2">
        {title}
      </h3>
      <div className="space-y-2 text-gray-700">{children}</div>
    </section>
  );
}
