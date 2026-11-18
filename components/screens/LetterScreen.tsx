"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/content/site";
import Heading, { HeartIcon } from "@/components/ui/Heading";

/** Tela 4 — Envelope animado com a carta */
export default function LetterScreen() {
  const [open, setOpen] = useState(false);
  const { letter } = site;

  return (
    <div className="flex flex-col items-center">
      <Heading eyebrow="Uma carta" title={open ? "Pra você ler com calma" : "Tenho algo pra te dizer"} />

      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="envelope"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            exit={{ opacity: 0, y: 60, scale: 0.9, transition: { duration: 0.45, ease: "easeIn" } }}
            transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.5 } }}
            className="group relative mt-4 aspect-[3/2] w-[88%] max-w-[340px]"
            aria-label="Abrir a carta"
            style={{ perspective: 800 }}
          >
            {/* corpo */}
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-beige to-nude shadow-polaroid" />
            {/* papel aparecendo */}
            <div className="paper absolute inset-x-[8%] top-[10%] h-[70%] rounded-sm" />
            {/* abas laterais e inferior */}
            <svg viewBox="0 0 300 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
              <path d="M0 0 L150 115 L0 200 Z" fill="#E9D6C6" />
              <path d="M300 0 L150 115 L300 200 Z" fill="#E9D6C6" />
              <path d="M0 200 L150 100 L300 200 Z" fill="#E2C8B6" />
            </svg>
            {/* aba superior */}
            <motion.svg
              viewBox="0 0 300 120"
              className="absolute inset-x-0 top-0 h-[60%] w-full origin-top"
              preserveAspectRatio="none"
              whileHover={{ rotateX: 25 }}
              aria-hidden
            >
              <path d="M0 0 L300 0 L150 118 Z" fill="#DDBFAB" />
            </motion.svg>
            {/* selo de cera */}
            <div className="absolute left-1/2 top-[52%] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 shadow-lg ring-4 ring-gold-400/30">
              <HeartIcon className="h-6 w-6" fill="#FFFDF9" />
            </div>
            <span className="absolute -bottom-10 left-0 right-0 text-center text-[11px] uppercase tracking-[0.3em] text-gold-600">
              toque para abrir
            </span>
          </motion.button>
        ) : (
          <motion.article
            key="letter"
            initial={{ opacity: 0, y: 80, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="paper relative w-full rounded-md border border-gold-300/40 shadow-polaroid"
          >
            <div className="scroll-soft max-h-[58svh] overflow-y-auto px-6 py-7 sm:px-8">
              <p className="mb-3 font-script text-4xl text-gold-600">{letter.greeting}</p>
              {letter.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.35, duration: 0.6 }}
                  className="mb-4 font-display text-[1.18rem] leading-[1.75] text-cocoa"
                >
                  {p}
                </motion.p>
              ))}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + letter.paragraphs.length * 0.35 }}
                className="mt-6 text-right font-script text-3xl text-gold-600"
              >
                {letter.signature}
              </motion.p>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 rounded-b-md bg-gradient-to-t from-ivory to-transparent" />
          </motion.article>
        )}
      </AnimatePresence>

      {open && (
        <button
          onClick={() => setOpen(false)}
          className="mt-5 text-[11px] uppercase tracking-[0.3em] text-gold-600 underline-offset-4 hover:underline"
        >
          guardar no envelope
        </button>
      )}
    </div>
  );
}
