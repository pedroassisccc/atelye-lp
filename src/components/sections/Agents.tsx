import Reveal from "@/components/Reveal";

type Block = {
  number: string;
  area: string;
  title: string;
  description: string;
  highlight?: boolean;
};

const BLOCKS: Block[] = [
  {
    number: "01",
    area: "Estratégia",
    title: "Corona",
    description:
      "Mapeia mercado, posicionamento e tom de voz em minutos. Sem achismo, sem reunião de quatro horas para chegar num briefing já atrasado.",
  },
  {
    number: "02",
    area: "Conteúdo",
    title: "Copywriter + Designer",
    description:
      "Fim da tela em branco e do retrabalho. Cria texto e peças que rodam na campanha — alinhados, no padrão, prontos para subir.",
  },
  {
    number: "03",
    area: "Distribuição",
    title: "Publisher + Tráfego",
    description:
      "Sobe as campanhas baseado em dados reais de conversão, não no feeling do gestor. Decisão de mídia parametrizada e auditável.",
  },
  {
    number: "04",
    area: "Análise",
    title: "Pulse",
    description:
      "Lê o que cada real entregou. Atribuição, cohort, payback — relatório semanal pronto, com a leitura estratégica anexada.",
  },
  {
    number: "05",
    area: "O maestro",
    title: "Orquestrador",
    description:
      "Conecta tudo. O output de um agente é o input do outro. O sistema roda enquanto você dorme — você acorda com entregas, não com tarefas.",
    highlight: true,
  },
];

export default function Agents() {
  return (
    <section id="agentes" className="relative py-20 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden scroll-mt-24">
      <div
        className="glow-orb"
        style={{
          width: 320,
          height: 320,
          background:
            "radial-gradient(circle, rgba(255,56,1,0.55), transparent 70%)",
          top: "10%",
          left: "-5%",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 380,
          height: 380,
          background:
            "radial-gradient(circle, rgba(214,45,0,0.4), transparent 70%)",
          bottom: "0%",
          right: "-8%",
          animationDelay: "-7s",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-[11.5px] font-medium text-[#D63300] mb-3">
              A solução elegante
            </p>
            <h2 className="text-[1.75rem] sm:text-[2rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
              A diferença não é talento. É infraestrutura.
            </h2>
            <p className="text-[13px] text-gray-400">
              7 agentes especialistas distribuídos em cinco frentes que
              substituem o trabalho braçal da sua equipe.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {BLOCKS.map(({ number, area, title, description, highlight }, idx) => (
            <Reveal key={number} delay={idx * 80}>
              <div
                className={`rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(0,0,0,0.18)] ${
                  highlight ? "liquid-glass" : ""
                }`}
                style={
                  highlight ? undefined : { backgroundColor: "#EDEDED" }
                }
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11.5px] font-medium text-[#D63300]">
                    {number}
                  </span>
                  <span className="text-[11.5px] font-medium text-gray-400 uppercase tracking-wider">
                    {area}
                  </span>
                </div>
                <h3 className="text-[1.25rem] leading-[1.2] font-medium text-gray-900 tracking-tight mb-2">
                  {title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-700">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
