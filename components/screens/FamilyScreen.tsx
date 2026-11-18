"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";
import Heading from "@/components/ui/Heading";

const HEART =
  "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

/** Tela 5 — Família e bebê, com ilustração simbólica (dois corações abraçando um pequenino). */
export default function FamilyScreen() {
  const { family } = site;

  return (
    <div className="flex flex-col items-center">
      <Heading eyebrow={family.eyebrow} title={family.title} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="relative flex h-64 w-64 items-center justify-center"
      >
        {/* halo */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blush-100 via-ivory to-gold-300/30"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-3 rounded-full border border-gold-300/50" />

        <svg viewBox="0 0 200 200" className="relative h-56 w-56" aria-label="Ilustração: dois corações envolvendo um coração pequenino">
          <defs>
            <linearGradient id="g-gold" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#E3CD9C" />
              <stop offset="1" stopColor="#B8975A" />
            </linearGradient>
          </defs>

          {/* coração da mamãe */}
          <motion.g
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          >
            <g transform="translate(22 42) scale(5.2)">
              <path d={HEART} fill="#F1CFC8" opacity="0.95" />
            </g>
          </motion.g>

          {/* coração do papai */}
          <motion.g
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            <g transform="translate(54 42) scale(5.2)">
              <path d={HEART} fill="none" stroke="url(#g-gold)" strokeWidth="0.5" />
            </g>
          </motion.g>

          {/* coraçãozinho do bebê */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.15, 1], opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            style={{ transformOrigin: "100px 104px" }}
          >
            <motion.g
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ delay: 2.2, duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "100px 104px" }}
            >
              <g transform="translate(84 88) scale(1.35)">
                <path d={HEART} fill="url(#g-gold)" />
              </g>
            </motion.g>
          </motion.g>

          {/* brilhos */}
          {[
            [40, 40],
            [165, 55],
            [155, 160],
            [35, 150],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="2"
              fill="#CDAE6E"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2.4, delay: i * 0.5, repeat: Infinity }}
            />
          ))}
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="mt-6 max-w-sm text-center font-display text-[1.2rem] leading-relaxed text-cocoa"
      >
        {family.text}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        className="mt-5 font-script text-3xl text-gold-600"
      >
        você, eu e nosso bebê
      </motion.p>
    </div>
  );
}
