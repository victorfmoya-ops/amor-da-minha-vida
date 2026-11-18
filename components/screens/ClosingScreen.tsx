"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/content/site";
import { HeartIcon } from "@/components/ui/Heading";

type Burst = { id: number; x: number; y: number; r: number };

/** Tela 7 — Encerramento. Tocar no coração solta coraçõezinhos. */
export default function ClosingScreen({ onRestart }: { onRestart: () => void }) {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const burst = () => {
    const base = Date.now();
    const items = Array.from({ length: 10 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 10 + Math.random() * 0.4;
      const dist = 70 + Math.random() * 60;
      return { id: base + i, x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, r: Math.random() * 60 - 30 };
    });
    setBursts((b) => [...b, ...items]);
    setTimeout(() => setBursts((b) => b.filter((x) => x.id < base)), 1400);
  };

  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center text-center">
      <div className="relative mb-10">
        <motion.button
          onClick={burst}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: [1, 1.1, 1, 1.06, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-ivory shadow-soft ring-1 ring-gold-300"
          aria-label="Mandar corações"
        >
          <HeartIcon className="h-11 w-11" fill="#E5B3AA" />
        </motion.button>
        {bursts.map((b) => (
          <motion.span
            key={b.id}
            className="pointer-events-none absolute left-1/2 top-1/2 -ml-2 -mt-2"
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.6 }}
            animate={{ x: b.x, y: b.y, opacity: 0, scale: 1.1, rotate: b.r }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <HeartIcon className="h-4 w-4" fill={b.id % 2 ? "#CDAE6E" : "#E5B3AA"} />
          </motion.span>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.1 }}
        className="font-script text-[3.1rem] leading-[1.15] text-gold-gradient sm:text-[3.6rem]"
      >
        {site.closing.line}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="gold-line my-7 w-28"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="font-display text-xl italic text-rosewood"
      >
        {site.closing.sub}
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={onRestart}
        className="mt-12 rounded-full border border-gold-300 bg-ivory/70 px-7 py-3 text-[11px] uppercase tracking-[0.3em] text-gold-600 transition hover:bg-ivory"
      >
        ver de novo
      </motion.button>
    </div>
  );
}
