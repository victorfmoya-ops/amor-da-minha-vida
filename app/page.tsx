"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import FloatingHearts from "@/components/ui/FloatingHearts";
import NavBar from "@/components/ui/NavBar";
import Opening from "@/components/screens/Opening";
import PhotoScreen from "@/components/screens/PhotoScreen";
import MusicScreen from "@/components/screens/MusicScreen";
import LetterScreen from "@/components/screens/LetterScreen";
import FamilyScreen from "@/components/screens/FamilyScreen";
import PromiseScreen from "@/components/screens/PromiseScreen";
import ClosingScreen from "@/components/screens/ClosingScreen";

const SCREENS = [
  { id: "abertura", label: "Abertura" },
  { id: "foto", label: "Nós dois" },
  { id: "musica", label: "Nossa música" },
  { id: "carta", label: "Carta" },
  { id: "familia", label: "Nossa família" },
  { id: "promessa", label: "Promessa" },
  { id: "final", label: "Eu te amo" },
] as const;

export default function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number) => {
    setIndex((current) => {
      const clamped = Math.max(0, Math.min(SCREENS.length - 1, next));
      setDirection(clamped >= current ? 1 : -1);
      return clamped;
    });
  }, []);

  // Navegação pelo teclado (setas)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (index === 0) return;
      if (e.key === "ArrowRight") go(index + 1);
      if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  const next = () => go(index + 1);

  const screens = [
    <Opening key="0" onOpen={next} />,
    <PhotoScreen key="1" />,
    <MusicScreen key="2" />,
    <LetterScreen key="3" />,
    <FamilyScreen key="4" />,
    <PromiseScreen key="5" />,
    <ClosingScreen key="6" onRestart={() => go(0)} />,
  ];

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative flex min-h-[100svh] flex-col overflow-hidden">
        <FloatingHearts />

        <div className="relative z-10 flex flex-1 items-center justify-center px-5 pt-8 safe-top">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.section
              key={SCREENS[index].id}
              aria-label={SCREENS[index].label}
              custom={direction}
              initial={{ opacity: 0, x: 40 * direction, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -40 * direction, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md py-6"
            >
              {screens[index]}
            </motion.section>
          </AnimatePresence>
        </div>

        {index > 0 && (
          <NavBar
            index={index}
            total={SCREENS.length}
            labels={SCREENS.map((s) => s.label)}
            onPrev={() => go(index - 1)}
            onNext={() => go(index + 1)}
            onJump={go}
          />
        )}
      </main>
    </MotionConfig>
  );
}
