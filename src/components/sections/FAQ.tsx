import { useState } from "react";
import Reveal from "@/components/Reveal";

type QA = { q: string; a: string };

const ITEMS: QA[] = [
  {
    q: "Como funciona a implementação?",
    a: "Após a aplicação aprovada, agendamos um diagnóstico de uma hora e o time da Walks faz o setup completo. A operação começa a rodar em até 14 dias.",
  },
  {
    q: "Preciso ter equipe interna para operar?",
    a: "Não. O atelye foi desenhado para substituir o trabalho braçal. Quem segue indispensável é o operador estratégico — geralmente o próprio dono da agência.",
  },
  {
    q: "O atelye substitui a minha equipe de tráfego pago?",
    a: "Para a maioria das operações, sim. Os agentes Publisher e Tráfego sobem campanhas com base em dados reais de conversão. Casos complexos (B2B com ciclo longo, contas com investimento alto) seguem com revisão humana opcional.",
  },
  {
    q: "Com quais ferramentas o atelye integra?",
    a: "Meta Ads, Google Ads, TikTok Ads, GA4, HubSpot, RD Station, Notion, Slack e a maioria das plataformas do stack padrão de agência. Integrações customizadas entram no roadmap do atelye OS.",
  },
  {
    q: "Para qual tamanho de agência o atelye foi feito?",
    a: "Operações com faturamento recorrente, equipe enxuta (1 a 5 pessoas) e dependentes da cabeça do dono. Quem está começando do zero precisa de um caminho diferente — não te atenderemos por enquanto.",
  },
  {
    q: "Como funciona o cancelamento?",
    a: "O contrato é mensal após o ramp-up. Você pode encerrar a qualquer momento com 30 dias de aviso prévio, sem multa.",
  },
  {
    q: "atelye entrega serviço ou tecnologia?",
    a: "Os dois. Starter é a operação rodando como serviço com nossa tecnologia. OS é a plataforma proprietária white label que você opera com a sua marca.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24 px-6 sm:px-12 md:px-20 lg:px-28 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="mb-10">
            <p className="text-[11.5px] font-medium text-[#D63300] mb-3">
              Dúvidas comuns
            </p>
            <h2 className="text-[1.75rem] sm:text-[2rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
              Antes de aplicar, o que costuma vir na cabeça.
            </h2>
            <p className="text-[13px] text-gray-400">
              Se a sua dúvida não está aqui, escreva no campo de mensagem da
              aplicação.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: "#EDEDED" }}
          >
            {ITEMS.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={item.q}
                  className={`border-b border-gray-300/60 last:border-b-0 transition-colors ${
                    isOpen ? "bg-white/50" : "hover:bg-white/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-center justify-between gap-4 px-5 sm:px-6 py-5"
                  >
                    <span className="text-[14px] sm:text-[15px] font-medium text-gray-900 leading-snug">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className={`shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center text-gray-700 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="accordion-content px-5 sm:px-6 pb-5 -mt-1">
                      <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-gray-700 max-w-xl">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
