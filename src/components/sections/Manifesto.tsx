import atelyeMark from "@/assets/atelye-mark.svg";

type Pill =
  | { kind: "solid"; color: string; width: number }
  | { kind: "outline"; width: number }
  | { kind: "text"; text: string; bg: string; textColor: string; width: number }
  | { kind: "icon"; bg: "cream" | "red" | "darkred" };

const RED_BRIGHT = "#D8132B";
const RED_DEEP = "#6B0F12";
const RED_MID = "#8A1418";
const RED_OUTLINE = "#A41218";
const CREAM = "#E5DAC2";
const TEXT_CREAM = "#F2E6CC";
const TEXT_DARK = "#3A0A0B";

// "Na era da cr[IA]tividade" e "ser bom não basta." aparecem 2× por ciclo
// para garantir que mobile sempre vê a frase passar.
const ROW_1: Pill[] = [
  { kind: "solid", color: RED_MID, width: 180 },
  { kind: "solid", color: CREAM, width: 80 },
  { kind: "outline", width: 240 },
  { kind: "solid", color: RED_BRIGHT, width: 100 },
  { kind: "icon", bg: "red" },
  { kind: "solid", color: RED_DEEP, width: 200 },
  { kind: "solid", color: CREAM, width: 140 },
  { kind: "outline", width: 180 },
  { kind: "solid", color: RED_MID, width: 100 },
];

const ROW_2: Pill[] = [
  {
    kind: "text",
    text: "Na era da cr[IA]tividade",
    bg: "transparent",
    textColor: TEXT_CREAM,
    width: 380,
  },
  { kind: "solid", color: RED_DEEP, width: 120 },
  { kind: "icon", bg: "red" },
  { kind: "solid", color: RED_BRIGHT, width: 80 },
  { kind: "outline", width: 140 },
  {
    kind: "text",
    text: "Na era da cr[IA]tividade",
    bg: "transparent",
    textColor: TEXT_CREAM,
    width: 380,
  },
  { kind: "solid", color: RED_MID, width: 100 },
  { kind: "outline", width: 160 },
];

const ROW_3: Pill[] = [
  { kind: "icon", bg: "cream" },
  {
    kind: "text",
    text: "ser bom não basta.",
    bg: "transparent",
    textColor: TEXT_CREAM,
    width: 300,
  },
  { kind: "solid", color: RED_DEEP, width: 180 },
  { kind: "solid", color: RED_BRIGHT, width: 100 },
  { kind: "icon", bg: "darkred" },
  {
    kind: "text",
    text: "ser bom não basta.",
    bg: "transparent",
    textColor: TEXT_CREAM,
    width: 300,
  },
  { kind: "solid", color: CREAM, width: 60 },
  { kind: "outline", width: 160 },
];

const ROW_4: Pill[] = [
  { kind: "solid", color: RED_MID, width: 160 },
  { kind: "solid", color: CREAM, width: 60 },
  { kind: "outline", width: 220 },
  { kind: "solid", color: RED_BRIGHT, width: 140 },
  { kind: "solid", color: RED_DEEP, width: 200 },
  { kind: "icon", bg: "red" },
  { kind: "solid", color: RED_MID, width: 100 },
  { kind: "outline", width: 180 },
];

function TextWithHighlight({ text }: { text: string }) {
  const parts = text.split(/(\[IA\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p === "[IA]" ? (
          <span key={i} style={{ color: RED_BRIGHT, fontWeight: 500 }}>
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

function PillNode({ p }: { p: Pill }) {
  const base =
    "shrink-0 h-14 sm:h-16 md:h-[68px] rounded-full flex items-center";

  if (p.kind === "solid") {
    return (
      <div
        className={base}
        style={{ width: p.width, backgroundColor: p.color }}
      />
    );
  }
  if (p.kind === "outline") {
    return (
      <div
        className={base}
        style={{
          width: p.width,
          backgroundColor: "transparent",
          border: `1px solid ${RED_OUTLINE}`,
        }}
      />
    );
  }
  if (p.kind === "icon") {
    const bg =
      p.bg === "cream" ? CREAM : p.bg === "red" ? RED_BRIGHT : RED_DEEP;
    return (
      <div
        className={`${base} justify-center`}
        style={{ width: 84, backgroundColor: bg }}
      >
        <img
          src={atelyeMark}
          alt=""
          width={46}
          height={24}
          style={{
            filter:
              p.bg === "cream"
                ? "brightness(0) saturate(100%) invert(7%) sepia(78%) saturate(2400%) hue-rotate(343deg) brightness(96%) contrast(108%)"
                : "none",
          }}
        />
      </div>
    );
  }
  // text
  return (
    <div
      className={`${base} px-5 sm:px-7 whitespace-nowrap font-medium`}
      style={{
        width: p.width,
        backgroundColor: p.bg,
        color: p.textColor,
        border: `1px solid ${RED_OUTLINE}`,
        fontSize: "clamp(16px, 2vw, 24px)",
        letterSpacing: "-0.01em",
      }}
    >
      <TextWithHighlight text={p.text} />
    </div>
  );
}

function Row({
  pills,
  direction = "left",
  speed = "45s",
}: {
  pills: Pill[];
  direction?: "left" | "right";
  speed?: string;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-3 w-max ticker-track motion-reduce:!animate-none"
        style={{
          animationDuration: speed,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {[...pills, ...pills].map((p, i) => (
          <PillNode key={`${i}-${p.kind}`} p={p} />
        ))}
      </div>
    </div>
  );
}

export default function Manifesto() {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-20"
      style={{ backgroundColor: TEXT_DARK }}
      aria-label="Manifesto atelye"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(58,10,11,1) 0%, rgba(58,10,11,0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 z-10"
        style={{
          background:
            "linear-gradient(270deg, rgba(58,10,11,1) 0%, rgba(58,10,11,0) 100%)",
        }}
      />

      <div className="flex flex-col gap-3">
        <Row pills={ROW_1} direction="left" speed="42s" />
        <Row pills={ROW_2} direction="right" speed="38s" />
        <Row pills={ROW_3} direction="left" speed="36s" />
        <Row pills={ROW_4} direction="right" speed="44s" />
      </div>
    </section>
  );
}
