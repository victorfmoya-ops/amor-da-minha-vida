"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Heart = { id: number; left: number; size: number; delay: number; duration: number; gold: boolean };

/** Corações bem sutis subindo ao fundo. */
export default function FloatingHearts({ count = 12 }: { count?: number }) {
  const reduce = useReducedMotion();
  const [hearts, setHearts] = useState<Heart[]>([]);

  // Gerado no cliente para evitar diferença entre servidor e navegador.
  useEffect(() => {
    setHearts(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 8 + Math.random() * 14,
        delay: Math.random() * 12,
        duration: 14 + Math.random() * 12,
        gold: i % 3 === 0,
      }))
    );
  }, [count]);

  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <motion.svg
          key={h.id}
          viewBox="0 0 24 24"
          width={h.size}
          height={h.size}
          className="absolute bottom-[-30px]"
          style={{ left: `${h.left}%` }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "-110vh", opacity: [0, 0.7, 0.7, 0], x: [0, 12, -10, 6] }}
          transition={{ duration: h.duration, delay: h.delay, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill={h.gold ? "#CDAE6E" : "#E5B3AA"}
            opacity={0.55}
          />
        </motion.svg>
      ))}
    </div>
  );
}
