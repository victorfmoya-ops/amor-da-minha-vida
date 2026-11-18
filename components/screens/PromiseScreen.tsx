"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/content/site";
import Heading from "@/components/ui/Heading";

/** Tela 6 — Promessa: melhorar um dia de cada vez. Toque em cada palavra para abrir. */
export default function PromiseScreen() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="flex flex-col items-center">
      <Heading eyebrow="Minha promessa" title="Um dia de cada vez" />

      <p className="-mt-2 mb-6 max-w-xs text-center font-display text-lg italic text-rosewood">
        Não uma vida perfeita, mas um pouco melhor a cada dia.
      </p>

      <ul className="w-full space-y-3">
        {site.promises.map((p, i) => {
          const active = openIdx === i;
          return (
            <motion.li
              key={p.word}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.12 }}
            >
              <button
                onClick={() => setOpenIdx(active ? null : i)}
                aria-expanded={active}
                className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                  active ? "border-gold-400 bg-ivory shadow-soft" : "border-gold-300/40 bg-ivory/60"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm text-gold-500">Dia {String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 font-display text-2xl text-cocoa">{p.word}</span>
                  <motion.span
                    animate={{ rotate: active ? 45 : 0 }}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-gold-300 text-gold-600"
                  >
                    +
                  </motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden pl-[3.4rem] pt-2 text-[15px] leading-relaxed text-rosewood"
                    >
                      {p.text}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            </motion.li>
          );
        })}
      </ul>

      <p className="mt-7 text-center text-[11px] uppercase tracking-[0.3em] text-gold-600">
        sem pressa · no seu tempo
      </p>
    </div>
  );
}
