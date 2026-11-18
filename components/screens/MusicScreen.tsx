"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { site } from "@/content/site";
import Heading from "@/components/ui/Heading";

/**
 * Tela 3 — Nossa música.
 * Sem autoplay: nada toca até a pessoa clicar.
 * A faixa vem de fonte autorizada (plataformas oficiais) definida em content/site.ts.
 */
export default function MusicScreen() {
  const { music } = site;
  const [embedOpen, setEmbedOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = async () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      if (el.paused) {
        await el.play();
        setPlaying(true);
      } else {
        el.pause();
        setPlaying(false);
      }
    } catch {
      setPlaying(false);
    }
  };

  const spinning = playing || embedOpen;

  return (
    <div className="flex flex-col items-center">
      <Heading eyebrow="Nossa música" title="Uma canção pra você" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="w-full rounded-[28px] border border-gold-300/50 bg-ivory/85 p-6 shadow-soft backdrop-blur"
      >
        {/* Disco */}
        <div className="mx-auto mb-6 flex h-44 w-44 items-center justify-center">
          <motion.div
            animate={spinning ? { rotate: 360 } : { rotate: 0 }}
            transition={spinning ? { duration: 8, repeat: Infinity, ease: "linear" } : { duration: 0.6 }}
            className="relative h-44 w-44 rounded-full shadow-soft"
            style={{
              background:
                "repeating-radial-gradient(circle at center, #5E4741 0 2px, #6b524b 2px 4px)",
            }}
          >
            <div className="absolute inset-[30%] rounded-full border-2 border-gold-300 bg-gradient-to-br from-blush-200 via-nude to-gold-300" />
            <div className="absolute inset-[47%] rounded-full bg-cocoa" />
          </motion.div>
        </div>

        <div className="text-center">
          <h3 className="font-display text-2xl font-medium leading-tight text-cocoa">{music.title}</h3>
          <p className="mt-1 text-sm uppercase tracking-[0.25em] text-gold-600">{music.artist}</p>
          <p className="mx-auto mt-4 max-w-[16rem] font-display italic text-rosewood">{music.note}</p>
        </div>

        {/* Arquivo próprio autorizado (opcional) */}
        {music.audioSrc && (
          <div className="mt-6 flex justify-center">
            <audio ref={audioRef} src={music.audioSrc} preload="none" onEnded={() => setPlaying(false)} />
            <button
              onClick={toggleAudio}
              className="btn-gold flex h-14 w-14 items-center justify-center rounded-full text-ivory"
              aria-label={playing ? "Pausar música" : "Tocar música"}
            >
              {playing ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
              )}
            </button>
          </div>
        )}

        {/* Player oficial incorporado (opcional), só carrega após o clique */}
        {music.embedUrl && (
          <div className="mt-6">
            {embedOpen ? (
              <iframe
                src={music.embedUrl}
                title={`${music.title} — ${music.artist}`}
                className="h-[152px] w-full rounded-2xl border-0"
                allow="encrypted-media; clipboard-write; fullscreen; picture-in-picture"
                loading="lazy"
              />
            ) : (
              <button
                onClick={() => setEmbedOpen(true)}
                className="btn-gold w-full rounded-full py-3 text-sm font-medium uppercase tracking-[0.2em] text-ivory"
              >
                Carregar player
              </button>
            )}
          </div>
        )}

        {/* Links das plataformas oficiais */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={music.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-gold-300 bg-ivory py-3 text-sm text-cocoa transition hover:bg-blush-50"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#B8975A"><circle cx="12" cy="12" r="11" /><path d="M6.5 9.5c3.8-1.1 7.7-.8 11 .9M7.2 12.6c3-.8 6.1-.5 8.8.8M7.9 15.4c2.3-.6 4.5-.4 6.5.6" stroke="#FFFDF9" strokeWidth="1.5" strokeLinecap="round" fill="none" /></svg>
            Spotify
          </a>
          <a
            href={music.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-gold-300 bg-ivory py-3 text-sm text-cocoa transition hover:bg-blush-50"
          >
            <svg width="16" height="16" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="5" fill="#B8975A" /><path d="M10 8.5v7l6-3.5z" fill="#FFFDF9" /></svg>
            YouTube
          </a>
        </div>

        <p className="mt-4 text-center text-[11px] leading-relaxed text-rosewood/80">
          A música abre na plataforma oficial. Nada toca sozinho, só quando você der o play.
        </p>
      </motion.div>
    </div>
  );
}
