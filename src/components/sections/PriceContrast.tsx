import Reveal from "@/components/Reveal";

const TRADITIONAL = [
  "3 novos funcionários",
  "R$ 15.000/mês de folha",
  "Passivos trabalhistas e encargos",
  "Curva de aprendizado de meses",
  "Férias, atestados, turnover",
];

const ATELYE = [
  "7 agentes especialistas",
  "Operação 24/7, sem pausa",
  "Zero passivo trabalhista",
  "Padrão de qualidade auditável",
  "100% da margem do novo contrato",
];

export default function PriceContrast() {
  return (
    <section className="relative py-20 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden">
      <div
        className="glow-orb"
        style={{
          width: 360,
          height: 360,
          background:
            "radial-gradient(circle, rgba(255,56,1,0.4), transparent 70%)",
          top: "30%",
          right: "-6%",
          animationDelay: "-4s",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-[11.5px] font-medium text-[#D63300] mb-3">
              O contraste
            </p>
            <h2 className="text-[1.75rem] sm:text-[2rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
              Três salários por mês. Ou uma fração disso.
            </h2>
            <p className="text-[13px] text-gray-400">
              O caminho de RH versus o caminho de infraestrutura.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Reveal>
            <div
              className="rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "#EDEDED" }}
            >
              <p className="text-[11.5px] font-medium text-gray-400 uppercase tracking-wider mb-3">
                Lado A — Tradicional
              </p>
              <h3 className="text-[1.25rem] leading-[1.2] font-medium text-gray-900 tracking-tight mb-1">
                Contratar mais gente
              </h3>
              <p className="text-[13px] text-gray-400 mb-6">
                O caminho que esgota margem e te transforma em RH.
              </p>

              <ul className="space-y-2.5 mb-6">
                {TRADITIONAL.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] text-gray-700"
                  >
                    <span className="mt-1 text-gray-400 leading-none">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-gray-300/60">
                <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">
                  Resultado
                </p>
                <p className="text-[1.5rem] font-medium text-gray-400 line-through tracking-tight">
                  R$ 15.000 / mês
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="liquid-glass rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-22px_rgba(255,56,1,0.35)]">
              <p className="text-[11.5px] font-medium text-[#D63300] uppercase tracking-wider mb-3">
                Lado B — atelye
              </p>
              <h3 className="text-[1.25rem] leading-[1.2] font-medium text-gray-900 tracking-tight mb-1">
                Operar AI First
              </h3>
              <p className="text-[13px] text-gray-600 mb-6">
                Infraestrutura que entrega o serviço sem inflar o custo fixo.
              </p>

              <ul className="space-y-2.5 mb-6">
                {ATELYE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] text-gray-900"
                  >
                    <span className="mt-0.5 text-[#D63300] leading-none">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-5 border-t border-white/60">
                <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">
                  Resultado
                </p>
                <p className="text-[1.5rem] font-medium text-[#D63300] tracking-tight">
                  100% da margem
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
