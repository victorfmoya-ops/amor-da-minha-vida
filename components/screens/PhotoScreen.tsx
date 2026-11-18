"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { site } from "@/content/site";
import Heading from "@/components/ui/Heading";

/** Tela 2 — Foto do casal em moldura Polaroid */
export default function PhotoScreen() {
  const [tilt, setTilt] = useState(-3);

  return (
    <div className="flex flex-col items-center">
      <Heading eyebrow="Nós dois" title="Meu lugar favorito" />

      <motion.figure
        initial={{ opacity: 0, y: 40, rotate: -12 }}
        animate={{ opacity: 1, y: 0, rotate: tilt }}
        transition={{ type: "spring", stiffness: 70, damping: 14 }}
        whileTap={{ scale: 0.98 }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.25}
        onClick={() => setTilt((t) => (t < 0 ? 3 : -3))}
        className="relative w-[78%] max-w-[300px] cursor-grab touch-none bg-ivory p-3 pb-16 shadow-polaroid active:cursor-grabbing"
      >
        {/* fita adesiva */}
        <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 bg-beige/80 shadow-sm" />

        <div className="aspect-[4/5] w-full overflow-hidden bg-blush-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.photo.src}
            alt={site.photo.alt}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <figcaption className="absolute inset-x-0 bottom-4 text-center font-hand text-2xl text-cocoa">
          {site.photo.caption}
        </figcaption>
      </motion.figure>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 max-w-xs text-center font-display text-lg italic leading-relaxed text-rosewood"
      >
        Mesmo nos dias difíceis, é do seu lado que eu quero estar.
      </motion.p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gold-500">toque na foto</p>
    </div>
  );
}
