import { Link, useParams } from 'react-router-dom'
import { Download } from 'lucide-react'
import { asset, getEpisode } from '../data/episodes'

export default function Episode() {
  const ep = getEpisode(useParams().id)
  if (!ep) return <main className="grid min-h-screen place-items-center"><Link to="/" className="underline">Episódio não encontrado — voltar</Link></main>
  return (
    <main className="mx-auto grid min-h-screen max-w-5xl items-center gap-10 px-6 py-12 md:grid-cols-2">
      <img src={asset(ep.cover)} alt={`Capa de ${ep.title}`} className="w-full shadow-2xl" />
      <div>
        <h1 className="font-serif text-5xl font-bold">EPISÓDIO {String(ep.id).padStart(2, '0')}</h1>
        <p className="mt-6 text-xs tracking-[.25em] text-white/60">ANO DE LANÇAMENTO</p><p className="text-2xl">{ep.year}</p>
        <p className="mt-6 text-xs tracking-[.25em] text-white/60">DESCRIÇÃO</p><p className="mt-1 leading-relaxed text-white/85">{ep.description}</p>
        <Link to={`/download/${ep.id}`} className="mt-8 inline-flex items-center gap-3 bg-gold px-7 py-4 text-sm font-semibold tracking-widest text-ink hover:brightness-110"><Download size={18} /> DOWNLOAD DO EPISÓDIO</Link>
        <div><Link to="/" className="mt-5 inline-block text-sm tracking-widest text-white/60 hover:underline">← VOLTAR À GALERIA</Link></div>
      </div>
    </main>
  )
}
