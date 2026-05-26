import Reveal from "@/components/Reveal";

const CRITERIA = [
  "Você tem faturamento recorrente.",
  "Sua equipe tem de 1 a 5 pessoas.",
  "Toda a inteligência do negócio passa pela sua cabeça.",
  "Você cansou de ter um “emprego com CNPJ”.",
];

export default function Qualification() {
  return (
    <section className="py-20 sm:py-24 pb-24 px-6 sm:px-12 md:px-20 lg:px-28">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="mb-10">
            <p className="text-[11.5px] font-medium text-[#D63300] mb-3">
              Qualificação
            </p>
            <h2 className="text-[1.75rem] sm:text-[2rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
              Nós não operamos agências que estão apenas começando.
            </h2>
            <p className="text-[13px] text-gray-400">
              atelye foi desenhado para operadores. Marque o que descreve o seu
              momento atual.
            </p>
          </div>
        </Reveal>

        <ul className="space-y-2 mb-10">
          {CRITERIA.map((item, idx) => (
            <Reveal key={item} delay={idx * 80} as="li">
              <div
                className="flex items-start gap-3 rounded-xl px-5 py-3.5 text-[13px] text-gray-900 transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: "#EDEDED" }}
              >
                <span className="mt-0.5 text-[#D63300] leading-none">✓</span>
                <span>{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <p className="text-[13px] text-gray-700 mb-5 max-w-lg">
            Se você marcou sim nessas opções, o próximo passo é desenhar a sua
            nova infraestrutura conosco.
          </p>

          <a
            href="#aplicar"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#D63300] border border-[#FF3801] rounded-full px-5 py-2.5 hover:bg-[#FF3801] hover:text-white hover:border-[#FF3801] transition-all duration-200 group"
          >
            Aplicar agora
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
