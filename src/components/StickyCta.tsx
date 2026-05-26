import { useEffect, useState } from "react";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const y = window.scrollY;
      const max =
        document.documentElement.scrollHeight - vh;
      const nearBottom = y > max - 320;
      setVisible(y > vh * 0.9 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="flex items-center gap-3 sm:gap-4 rounded-full pl-4 sm:pl-5 pr-2 py-2 backdrop-blur-md"
        style={{
          background: "rgba(255,255,255,0.85)",
          boxShadow:
            "0 12px 32px -8px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        <span className="hidden sm:inline-flex items-center gap-2 text-[12px] text-gray-700 whitespace-nowrap">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF3801] opacity-70 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF3801]" />
          </span>
          5 slots no mês — aplicação manual
        </span>
        <a
          href="#aplicar"
          className="inline-flex items-center gap-2 text-[12.5px] font-medium text-white bg-[#FF3801] hover:bg-[#D63300] rounded-full px-4 py-2 transition-all duration-200 group"
        >
          Aplicar agora
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
