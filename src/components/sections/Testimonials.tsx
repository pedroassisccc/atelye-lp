import Reveal from "@/components/Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initial: string;
};

const ITEMS: Testimonial[] = [
  {
    quote:
      "Em 60 dias paramos de contratar e o resultado ficou melhor. A folha despeluciou e a margem subiu 38%.",
    name: "Marina Souza",
    role: "Co-fundadora · Aurafy",
    initial: "M",
  },
  {
    quote:
      "O Orquestrador rodou enquanto a gente dormia. Acordei com briefing, copy e relatório prontos — sem fila de pendência.",
    name: "Felipe Tavares",
    role: "Diretor de Performance · Vittorino",
    initial: "F",
  },
  {
    quote:
      "Era o RH que comia o lucro. Substituímos três posições por agentes do atelye e ganhamos previsibilidade.",
    name: "Renato Lima",
    role: "CEO · Hub4Pay",
    initial: "R",
  },
];

export default function Testimonials() {
  return (
    <section id="casos" className="relative py-20 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden scroll-mt-24">
      <div
        className="glow-orb"
        style={{
          width: 360,
          height: 360,
          background:
            "radial-gradient(circle, rgba(255,56,1,0.4), transparent 70%)",
          top: "10%",
          left: "10%",
          animationDelay: "-3s",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-[11.5px] font-medium text-[#D63300] mb-3">
              Prova social
            </p>
            <h2 className="text-[1.75rem] sm:text-[2rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
              Quem já trocou o RH pela infraestrutura.
            </h2>
            <p className="text-[13px] text-gray-400">
              Operações reais rodando hoje com o atelye.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {ITEMS.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 100}>
              <figure
                className="rounded-2xl p-6 h-full flex flex-col gap-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(0,0,0,0.18)]"
                style={{ backgroundColor: "#EDEDED" }}
              >
                <span aria-hidden className="text-[#D63300] text-2xl leading-none -mb-2">
                  “
                </span>
                <blockquote className="text-[14px] leading-relaxed text-gray-900 flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-gray-300/60">
                  <span className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-medium text-gray-900">
                    {t.initial}
                  </span>
                  <div>
                    <p className="text-[12.5px] font-medium text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-[11.5px] text-gray-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
