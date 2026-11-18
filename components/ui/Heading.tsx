import { motion } from "framer-motion";

/** Título padrão das telas: rótulo pequeno + título em serifa + filete dourado. */
export default function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.7 }}
      className="mb-7 text-center"
    >
      <p className="mb-2 text-[11px] uppercase tracking-[0.32em] text-gold-600">{eyebrow}</p>
      <h2 className="font-display text-[2.1rem] font-medium leading-tight text-cocoa">{title}</h2>
      <div className="gold-line mx-auto mt-4 w-24" />
    </motion.header>
  );
}

export function HeartIcon({ className = "", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={fill}
      />
    </svg>
  );
}
