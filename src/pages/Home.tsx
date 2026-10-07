import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Gallery from '../components/Gallery'
const Scene = lazy(() => import('../components/Scene'))


export default function Home() {
  const [inside, setInside] = useState(() => new URLSearchParams(location.search).has('intro') ? false : sessionStorage.getItem('gh-inside') === '1')
  const [started, setStarted] = useState(inside)
  const [ready, setReady] = useState(false)
  const [pct, setPct] = useState(0)
  const [prog, setProg] = useState(0)
  const p = useRef(0)

  useEffect(() => { if (started) return; const t = setInterval(() => setPct((v) => Math.min(100, v + 4)), 60); return () => clearInterval(t) }, [started])
  useEffect(() => {
    if (!started || inside) return
    const on = () => {
      const v = Math.min(1, window.scrollY / (window.innerHeight * 4))
      p.current = v; setProg(v)
      if (v > 0.97) { sessionStorage.setItem('gh-inside', '1'); window.scrollTo(0, 0); setInside(true) }
    }
    window.scrollTo(0, 0); on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [started, inside])

  if (inside) return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}><Gallery onReplay={() => { sessionStorage.removeItem('gh-inside'); setStarted(false); setPct(0); setProg(0); p.current = 0; setInside(false) }} /></motion.div>

  if (!started) return (
    <main className="fixed inset-0 grid place-items-center bg-ink text-center">
      <div>
        <h1 className="font-serif text-5xl tracking-[.25em] text-gold sm:text-7xl">GOMORA HOUSE</h1>
        <p className="mt-4 text-sm tracking-widest text-white/60">Preparando a experiência...</p>
        <div className="mx-auto mt-6 h-px w-56 bg-white/15"><div className="h-px bg-gold transition-all" style={{ width: `${pct}%` }} /></div>
        {pct >= 100 && <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setStarted(true)} className="mt-10 border border-gold px-8 py-3 text-sm tracking-[.3em] text-gold transition hover:bg-gold hover:text-ink">ENTRAR NA GOMORA HOUSE</motion.button>}
        {pct >= 100 && <div><button onClick={() => { sessionStorage.setItem('gh-inside', '1'); setInside(true); setStarted(true) }} className="mt-5 text-xs tracking-widest text-white/50 hover:underline">Ir direto para a galeria</button></div>}
      </div>
    </main>
  )

  return (
    <>
      <div style={{ height: '500vh' }} aria-hidden="true" />
      <div className="fixed inset-0">
        <Suspense fallback={<div className="h-full bg-sky-300" />}><Scene p={p} onReady={() => setReady(true)} /></Suspense>
        <header className="pointer-events-none absolute left-4 top-4 text-xs tracking-[.3em] text-white drop-shadow">GOMORA HOUSE · TEMPORADA 1</header>
        <div className="pointer-events-none absolute inset-x-0 top-[12%] text-center text-white" style={{ opacity: ready ? Math.max(0, 1 - prog * 5) : 0, transform: `translateY(${prog * -80}px) scale(${1 + prog * 0.3})`, transition: 'opacity .8s' }}>
          <p className="font-serif text-2xl italic sm:text-4xl" style={{ textShadow: '0 3px 18px rgba(0,0,0,.55)' }}>Welcome to</p>
          <h1 className="font-serif text-6xl font-bold sm:text-9xl" style={{ textShadow: '0 6px 30px rgba(0,0,0,.6)' }}>Gomora House</h1>
          <p className="mt-6 text-xs tracking-[.4em] opacity-80">ROLE PARA ENTRAR ↓</p>
        </div>
      </div>
    </>
  )
}
