import Reveal from "@/components/Reveal";

type Plan = {
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  cta: string;
  recommended?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "atelye Starter",
    tagline: "Implementação express",
    description:
      "Para quem precisa estancar a perda de margem hoje. Stack pronta para rodar.",
    bullets: [
      "Setup completo dos 7 agentes",
      "Integração com o stack atual da agência",
      "Operação rodando em até 14 dias",
      "Treinamento da equipe interna",
      "Suporte estratégico por 90 dias",
    ],
    cta: "Aplicar para o Starter",
  },
  {
    name: "atelye OS",
    tagline: "Infraestrutura proprietária · White label",
    description:
      "Para quem quer construir valuation e ser dono da própria tecnologia.",
    bullets: [
      "Tudo do Starter incluso",
      "Plataforma white label com a sua marca",
      "Customização por nicho e por vertical",
      "Roadmap de novos agentes co-desenhado",
      "Estrutura preparada para captação e M&A",
    ],
    cta: "Aplicar para o atelye OS",
    recommended: true,
  },
];

export default function Plans() {
  return (
    <section id="planos" className="relative py-20 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden scroll-mt-24">
      <div
        className="glow-orb"
        style={{
          width: 420,
          height: 420,
          background:
            "radial-gradient(circle, rgba(214,45,0,0.4), transparent 70%)",
          top: "20%",
          left: "20%",
          animationDelay: "-2s",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 320,
          height: 320,
          background:
            "radial-gradient(circle, rgba(255,56,1,0.45), transparent 70%)",
          bottom: "10%",
          right: "10%",
          animationDelay: "-8s",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-[11.5px] font-medium text-[#D63300] mb-3">
              A oferta
            </p>
            <h2 className="text-[1.75rem] sm:text-[2rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
              Dois caminhos. Uma decisão estratégica.
            </h2>
            <p className="text-[13px] text-gray-400">
              Você não escolhe se vai operar com inteligência artificial. Você
              escolhe se quer apenas usar ou ser dono dela.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {PLANS.map((plan, idx) => (
            <Reveal key={plan.name} delay={idx * 120}>
              <div className="relative h-full">
                {plan.recommended && (
                  <span className="pulse-glow absolute -top-2.5 left-6 z-20 inline-flex items-center bg-[#FF3801] text-white text-[10.5px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full whitespace-nowrap">
                    Recomendado
                  </span>
                )}
                <div
                  className={`rounded-2xl p-6 sm:p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.recommended
                      ? "liquid-glass hover:shadow-[0_24px_48px_-24px_rgba(255,56,1,0.4)]"
                      : "hover:shadow-[0_18px_36px_-18px_rgba(0,0,0,0.18)]"
                  }`}
                  style={
                    plan.recommended
                      ? {
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 0 0 1px rgba(255, 56, 1, 0.35), 0 12px 32px -12px rgba(122, 26, 10, 0.18)",
                        }
                      : { backgroundColor: "#EDEDED" }
                  }
                >
                <p className="text-[11.5px] font-medium text-gray-500 uppercase tracking-wider mb-2">
                  {plan.tagline}
                </p>
                <h3 className="text-[1.5rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-2">
                  {plan.name}
                </h3>
                <p className="text-[13px] text-gray-700 leading-relaxed mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13px] text-gray-900"
                    >
                      <span className="mt-0.5 text-[#D63300] leading-none">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#aplicar"
                  className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-[#D63300] border border-[#FF3801] rounded-full px-5 py-2.5 hover:bg-[#FF3801] hover:text-white hover:border-[#FF3801] transition-all duration-200 group"
                >
                  {plan.cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
