"use client";

import { motion } from "framer-motion";

type Props = {
  index: number;
  total: number;
  labels: string[];
  onPrev: () => void;
  onNext: () => void;
  onJump: (i: number) => void;
};

export default function NavBar({ index, total, labels, onPrev, onNext, onJump }: Props) {
  const isLast = index === total - 1;

  return (
    <nav
      aria-label="Navegação entre as telas"
      className="relative z-20 mx-auto flex w-full max-w-md items-center justify-between gap-3 px-5 pt-2 safe-bottom"
    >
      <button
        onClick={onPrev}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/70 bg-ivory/70 text-gold-600 backdrop-blur transition hover:bg-ivory"
        aria-label="Voltar"
      >
        <Arrow dir="left" />
      </button>

      <ol className="flex items-center gap-2">
        {Array.from({ length: total - 1 }, (_, k) => k + 1).map((i) => (
          <li key={i}>
            <button
              onClick={() => onJump(i)}
              aria-label={`Ir para ${labels[i]}`}
              aria-current={i === index ? "step" : undefined}
              className="flex h-6 items-center"
            >
              <motion.span
                layout
                className="block h-1.5 rounded-full"
                animate={{
                  width: i === index ? 22 : 6,
                  backgroundColor: i <= index ? "#B8975A" : "#E6CDBE",
                }}
                transition={{ duration: 0.4 }}
              />
            </button>
          </li>
        ))}
      </ol>

      <button
        onClick={onNext}
        disabled={isLast}
        className="flex h-11 w-11 items-center justify-center rounded-full btn-gold text-ivory transition disabled:opacity-0"
        aria-label="Avançar"
      >
        <Arrow dir="right" />
      </button>
    </nav>
  );
}

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      {dir === "left" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
  );
}
