"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";
import { HeartIcon } from "@/components/ui/Heading";

/** Tela 1 — Abertura */
export default function Opening({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="flex min-h-[78svh] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-8"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-gold-300 bg-ivory/80 shadow-soft"
        >
          <HeartIcon className="h-8 w-8" fill="#E5B3AA" />
        </motion.div>
        <span className="absolute -inset-3 rounded-full border border-gold-300/40" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-3 text-[11px] uppercase tracking-[0.4em] text-gold-600"
      >
        para você, {site.nickname}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="font-script text-[3.6rem] leading-[1.05] text-gold-gradient sm:text-[4.2rem]"
      >
        Amor da
        <br />
        Minha Vida
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.9 }}
        className="gold-line my-7 w-32"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="max-w-xs font-display text-lg italic leading-relaxed text-rosewood"
      >
        Fiz isso com carinho, pra você abrir quando quiser, no seu tempo.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onOpen}
        className="btn-gold mt-10 rounded-full px-9 py-4 text-sm font-medium uppercase tracking-[0.22em] text-ivory"
      >
        Abrir minha surpresa
      </motion.button>
    </div>
  );
}
