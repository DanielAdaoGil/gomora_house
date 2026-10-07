import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { asset, episodes, type Episode } from '../data/episodes'

const Frame = ({ ep, onClick, big = false, i = 0 }: { ep: Episode; onClick?: () => void; big?: boolean; i?: number }) => (
  <motion.button layoutId={`frame-${ep.id}`} onClick={onClick} disabled={big}
    whileHover={big ? undefined : { scale: 1.06, y: -6 }} transition={{ type: 'spring', stiffness: 220, damping: 26 }}
    aria-label={`Abrir ${ep.title}`}
    style={{ rotate: big ? 0 : ((i * 7) % 5 - 2) * 0.35, marginTop: big ? 0 : ((i * 5) % 4) * 6 }}
    className={`relative block bg-[#3a2616] p-[6px] sm:p-2 shadow-[0_14px_28px_-8px_rgba(0,0,0,.55)] hover:shadow-[0_26px_40px_-8px_rgba(0,0,0,.65)] ${big ? 'w-full max-w-sm' : 'cursor-pointer'}`}>
    <span className="absolute -top-3 left-1/2 h-3 w-px bg-black/40" />
    <img src={asset(ep.cover)} alt={`Capa de ${ep.title} — O Polígamo`} loading="lazy" className="block aspect-[3/4] w-full object-cover" />
    <span className="absolute bottom-1 right-2 text-[10px] font-semibold text-white/80 sm:text-xs">{String(ep.id).padStart(2, '0')}</span>
  </motion.button>
)

const Vase = ({ side }: { side: 'left' | 'right' }) => (
  <svg viewBox="0 0 100 160" className={`absolute bottom-0 hidden w-20 md:block lg:w-28 ${side === 'left' ? 'left-3 lg:left-10' : 'right-3 lg:right-10'}`} aria-hidden="true">
    <g fill="#2f7a35"><path d="M50 80C30 50 20 30 30 5c15 20 22 45 20 75z" /><path d="M50 80C70 45 82 28 74 2 58 22 52 48 50 80z" /><path d="M50 80C40 55 48 30 55 10c8 25 4 45-5 70z" fill="#3f9a45" /><path d="M48 80C25 70 8 62 4 40c20 5 38 20 44 40z" /><path d="M52 80c24-8 38-20 44-42-22 6-38 22-44 42z" /></g>
    <path d="M25 90h50l-6 62a6 6 0 0 1-6 5H37a6 6 0 0 1-6-5z" fill="#f6f3ee" /><ellipse cx="50" cy="90" rx="25" ry="6" fill="#5b3b24" />
  </svg>
)

export default function Gallery() {
  const [sel, setSel] = useState<Episode | null>(null)
  return (
    <div className="noscroll fixed inset-0 overflow-y-auto bg-gradient-to-b from-[#fbf8f3] to-[#ece5d8] text-ink">
      <header className="pointer-events-none fixed left-4 top-4 z-30 text-xs tracking-[.3em] text-ink/70">GOMORA HOUSE · TEMPORADA 1</header>
      <main className="relative mx-auto min-h-full max-w-6xl px-4 pb-32 pt-20 sm:px-8">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-10 text-center font-serif text-4xl font-semibold sm:text-6xl">Desfrute a 1ª Temporada</motion.h1>
        <ul className="grid grid-cols-3 gap-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-6" style={{ perspective: 1200 }}>
          {episodes.map((ep, i) => <li key={ep.id}><Frame ep={ep} i={i} onClick={() => setSel(ep)} /></li>)}
        </ul>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#b8a07a] to-transparent" aria-hidden="true" />
        <Vase side="left" /><Vase side="right" />
      </main>
      <AnimatePresence>
        {sel && (
          <motion.div key="ov" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="noscroll fixed inset-0 z-40 overflow-y-auto bg-[#ece5d8]/95 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={sel.title}
            onKeyDown={(e) => e.key === 'Escape' && setSel(null)}>
            <div className="mx-auto grid min-h-full max-w-5xl items-center gap-8 px-6 py-16 md:grid-cols-2">
              <Frame ep={sel} big />
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
                <p className="font-serif text-4xl font-bold tracking-wide sm:text-5xl">EPISÓDIO {String(sel.id).padStart(2, '0')}</p>
                <p className="mt-4 text-xs tracking-[.25em] text-ink/60">ANO DE LANÇAMENTO</p><p className="text-2xl">{sel.year}</p>
                <p className="mt-6 text-xs tracking-[.25em] text-ink/60">DESCRIÇÃO</p><p className="mt-1 max-w-md leading-relaxed text-ink/85">{sel.description}</p>
                <Link to={`/download/${sel.id}`} className="group mt-8 inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-semibold tracking-widest text-white transition hover:bg-gold hover:text-ink">
                  <Download className="transition group-hover:translate-y-0.5" size={18} /> DOWNLOAD DO EPISÓDIO
                </Link>
                <div><button autoFocus onClick={() => setSel(null)} className="mt-5 text-sm tracking-widest text-ink/60 underline-offset-4 hover:underline">← VOLTAR À GALERIA</button></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
