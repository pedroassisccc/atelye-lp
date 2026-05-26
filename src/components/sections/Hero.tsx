import { useEffect, useRef } from "react";
import Magnetic from "@/components/Magnetic";
import atelyeMark from "@/assets/atelye-mark.svg";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4";

const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: "Operação", href: "#agentes" },
  { label: "Planos", href: "#planos" },
  { label: "Casos", href: "#casos" },
  { label: "Recursos", href: "#faq" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      glow.style.opacity = "1";
    };
    const onLeave = () => {
      glow.style.opacity = "0";
    };
    const tick = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      glow.style.transform = `translate3d(${currentX - 200}px, ${currentY - 200}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#f0f0ee]"
    >
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-0 transition-opacity duration-500 mix-blend-overlay z-[5]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,56,1,0.45), rgba(214,45,0,0.25) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <nav className="flex items-center justify-center pt-4 sm:pt-6 px-4 sm:px-8 gap-2 sm:gap-3">
          <a
            href="#"
            aria-label="atelye"
            className="flex items-center justify-center rounded-full w-10 h-10 sm:w-11 sm:h-11 shrink-0 transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: "#EDEDED" }}
          >
            <img
              src={atelyeMark}
              alt="atelye"
              width={28}
              height={15}
              className="block"
            />
          </a>
          <div
            className="flex items-center gap-4 sm:gap-10 rounded-xl px-4 sm:px-8 py-2.5 sm:py-3"
            style={{ backgroundColor: "#EDEDED" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] sm:text-[14px] font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="max-w-sm">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-[#D63300] hover:text-[#B82A00] transition-colors mb-3 group"
            >
              Visto em Aurafy, Vittorino e Hub4Pay
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            <h1 className="text-[1.5rem] sm:text-[1.75rem] leading-[1.2] font-medium text-gray-900 tracking-tight mb-3 text-balance">
              Infraestrutura de AI para agências que cansaram de ter{" "}
              <span
                className="[box-decoration-break:clone] [-webkit-box-decoration-break:clone]"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(255,56,1,0.35), rgba(214,45,0,0.35))",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 88%",
                  backgroundSize: "100% 6px",
                  paddingBottom: "1px",
                }}
              >
                margem e eficiência operacional baixa
              </span>
              .
            </h1>

            <p className="text-[13px] text-gray-400 font-normal mb-3">
              Escale lucro, não custo fixo.
            </p>

            <Magnetic strength={0.25}>
              <a
                href="#aplicar"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#D63300] border border-[#FF3801] rounded-full px-5 py-2.5 hover:bg-[#FF3801] hover:text-white hover:border-[#FF3801] transition-all duration-200 group"
              >
                Aplicar agora
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
