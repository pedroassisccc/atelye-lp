import { useState } from "react";
import Reveal from "@/components/Reveal";

type FormState = {
  nome: string;
  email: string;
  empresa: string;
  link: string;
  faturamento: string;
  equipe: string;
  plano: string;
};

const INITIAL: FormState = {
  nome: "",
  email: "",
  empresa: "",
  link: "",
  faturamento: "",
  equipe: "",
  plano: "atelye OS",
};

const FATURAMENTO_OPTIONS = [
  "Até R$ 30k/mês",
  "R$ 30k – R$ 100k/mês",
  "R$ 100k – R$ 300k/mês",
  "Acima de R$ 300k/mês",
];

const EQUIPE_OPTIONS = ["1 – 2 pessoas", "3 – 5 pessoas", "6 – 10 pessoas", "11+ pessoas"];

const PLANO_OPTIONS = ["atelye Starter", "atelye OS"];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11.5px] font-medium text-gray-500 uppercase tracking-wider mb-1.5 block">
      {children}
    </span>
  );
}

const inputBase =
  "w-full bg-white/70 border border-white/80 rounded-xl px-4 py-3 text-[13.5px] text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:bg-white focus:border-[#FF3801] focus:ring-2 focus:ring-[#FFE5DC]";

export default function Application() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1100);
  }

  return (
    <section
      id="aplicar"
      className="relative py-24 sm:py-28 pb-32 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden scroll-mt-20"
    >
      <div
        className="glow-orb"
        style={{
          width: 480,
          height: 480,
          background:
            "radial-gradient(circle, rgba(255,56,1,0.45), transparent 70%)",
          top: "0%",
          left: "10%",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 420,
          height: 420,
          background:
            "radial-gradient(circle, rgba(214,45,0,0.4), transparent 70%)",
          bottom: "5%",
          right: "5%",
          animationDelay: "-6s",
        }}
      />

      <div className="relative max-w-2xl mx-auto">
        <Reveal>
          <div className="mb-10">
            <p className="text-[11.5px] font-medium text-[#D63300] mb-3">
              Aplicar
            </p>
            <h2 className="text-[1.75rem] sm:text-[2rem] leading-[1.15] font-medium text-gray-900 tracking-tight mb-3">
              Sua nova infraestrutura começa aqui.
            </h2>
            <p className="text-[13px] text-gray-500 max-w-lg">
              Recebemos cada aplicação manualmente. Se houver fit, retornamos em
              até 48 horas com um convite para a conversa de diagnóstico.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {submitted ? (
            <div className="liquid-glass rounded-2xl p-10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FF3801] text-white text-xl mb-5">
                ✓
              </div>
              <h3 className="text-[1.5rem] font-medium text-gray-900 tracking-tight mb-2">
                Aplicação recebida.
              </h3>
              <p className="text-[13px] text-gray-600 max-w-md mx-auto">
                {form.nome ? `${form.nome.split(" ")[0]}, ` : ""}vamos analisar o
                seu caso e voltar em até 48 horas. Fique de olho na caixa de
                entrada de{" "}
                <span className="text-gray-900 font-medium">
                  {form.email || "seu email"}
                </span>
                .
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="liquid-glass rounded-2xl p-6 sm:p-8 grid gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <label>
                  <FieldLabel>Nome</FieldLabel>
                  <input
                    required
                    type="text"
                    placeholder="Como devemos te chamar"
                    value={form.nome}
                    onChange={(e) => update("nome", e.target.value)}
                    className={inputBase}
                  />
                </label>
                <label>
                  <FieldLabel>Email profissional</FieldLabel>
                  <input
                    required
                    type="email"
                    placeholder="voce@suaagencia.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputBase}
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label>
                  <FieldLabel>Agência</FieldLabel>
                  <input
                    required
                    type="text"
                    placeholder="Nome da empresa"
                    value={form.empresa}
                    onChange={(e) => update("empresa", e.target.value)}
                    className={inputBase}
                  />
                </label>
                <label>
                  <FieldLabel>Site ou Instagram</FieldLabel>
                  <input
                    type="text"
                    placeholder="@ ou link"
                    value={form.link}
                    onChange={(e) => update("link", e.target.value)}
                    className={inputBase}
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label>
                  <FieldLabel>Faturamento mensal</FieldLabel>
                  <select
                    required
                    value={form.faturamento}
                    onChange={(e) => update("faturamento", e.target.value)}
                    className={`${inputBase} appearance-none cursor-pointer pr-10`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'><path d='M2 4 L6 8 L10 4' stroke='%239ca3af' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                    }}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {FATURAMENTO_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <FieldLabel>Tamanho da equipe</FieldLabel>
                  <select
                    required
                    value={form.equipe}
                    onChange={(e) => update("equipe", e.target.value)}
                    className={`${inputBase} appearance-none cursor-pointer pr-10`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'><path d='M2 4 L6 8 L10 4' stroke='%239ca3af' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                    }}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {EQUIPE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div>
                <FieldLabel>Qual plano faz mais sentido</FieldLabel>
                <div className="grid grid-cols-2 gap-2">
                  {PLANO_OPTIONS.map((opt) => {
                    const selected = form.plano === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => update("plano", opt)}
                        className={`text-[13px] rounded-xl px-4 py-3 border transition-all duration-200 ${
                          selected
                            ? "bg-[#FF3801] text-white border-[#FF3801]"
                            : "bg-white/60 text-gray-700 border-white/80 hover:border-[#FF8866]"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex items-center justify-center gap-2 text-[13px] font-medium text-white bg-[#FF3801] hover:bg-[#D63300] rounded-full px-5 py-3 transition-all duration-200 group shadow-[0_8px_24px_-8px_rgba(255,56,1,0.6)] disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <span
                      aria-hidden
                      className="spin-slow inline-block w-3.5 h-3.5 rounded-full border-2 border-white/60 border-t-transparent"
                    />
                    Enviando…
                  </>
                ) : (
                  <>
                    Enviar aplicação
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </>
                )}
              </button>

              <p className="text-[11.5px] text-gray-500 text-center">
                Ao enviar, você concorda em receber um contato comercial do
                atelye.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
