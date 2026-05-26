const ITEMS = [
  "Aplicações curadas manualmente",
  "Operação 24/7 sem férias",
  "Setup completo em 14 dias",
  "Margem do contrato 100% sua",
  "Stack AI First proprietária",
  "Suporte estratégico contínuo",
];

const SEPARATOR = "✦";

export default function Ticker() {
  const sequence = [...ITEMS, ...ITEMS];
  return (
    <div className="relative w-full overflow-hidden bg-[#111111] border-b border-white/[0.06]">
      <div className="ticker-track flex w-max gap-10 py-2.5">
        {sequence.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-[10.5px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-white/55 whitespace-nowrap"
          >
            {item}
            <span aria-hidden className="text-white/30 text-[10px]">
              {SEPARATOR}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
