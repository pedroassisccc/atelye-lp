import Reveal from "@/components/Reveal";

const FLOW = [
  { label: "Contrato fechado", value: "+ R$ 10k", tone: "neutral" as const },
  { label: "Precisa de mais braços", value: "Contrata equipe", tone: "neutral" as const },
  { label: "Novo custo fixo", value: "- R$ 7k", tone: "negative" as const },
  { label: "Sobra de verdade", value: "R$ 3k", tone: "muted" as const },
];

function toneClass(tone: "neutral" | "negative" | "muted") {
  switch (tone) {
    case "negative":
      return "text-red-500";
    case "muted":
      return "text-gray-400";
    default:
      return "text-gray-900";
  }
}

export default function Agitation() {
  return (
    <section className="py-20 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-28">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-[11.5px] font-medium text-[#D63300] mb-3">
              A matemática perversa
            </p>
            <h2 className="text-[1.75rem] sm:text-[2rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
              Você fecha contratos. O lucro evapora antes de chegar no caixa.
            </h2>
            <p className="text-[13px] text-gray-400">
              O mercado te ensinou a comemorar novos contratos. Ninguém te
              contou a matemática por trás.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{ backgroundColor: "#EDEDED" }}
          >
          <p className="text-[11.5px] font-medium text-gray-400 mb-5 uppercase tracking-wider">
            Cenário atual
          </p>

          <div className="flex flex-col md:flex-row md:items-stretch gap-3">
            {FLOW.map((step, idx) => (
              <div key={step.label} className="flex items-center gap-3 flex-1">
                <div className="flex-1 bg-white rounded-xl px-4 py-3.5">
                  <p className="text-[11px] text-gray-400 mb-1">
                    {step.label}
                  </p>
                  <p
                    className={`text-[15px] font-medium tabular-nums ${toneClass(step.tone)}`}
                  >
                    {step.value}
                  </p>
                </div>
                {idx < FLOW.length - 1 && (
                  <span className="hidden md:inline text-gray-300 text-base shrink-0">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

            <p className="mt-5 text-[12px] text-gray-500">
              Sobra R$ 3k — e muita dor de cabeça com gestão.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 max-w-2xl">
            <p className="text-[11.5px] font-medium text-[#D63300] mb-3">
              O diagnóstico
            </p>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-900">
              Você não está escalando uma empresa. Você está comprando horas de
              trabalho para revender horas de trabalho.{" "}
              <span className="text-red-500">
                Financeiramente insustentável.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
