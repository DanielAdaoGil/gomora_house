import { Link, useParams } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { getEpisode } from '../data/episodes'

export default function Download() {
  const ep = getEpisode(useParams().id)
  if (!ep) return <main className="grid min-h-screen place-items-center"><Link to="/" className="underline">Episódio não encontrado — voltar</Link></main>
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="text-xs tracking-[.4em] text-gold">GOMORA HOUSE</p>
        <h1 className="mt-3 font-serif text-5xl font-bold sm:text-7xl">O Polígamo</h1>
        <h2 className="mt-2 text-2xl">Episódio Nº {ep.id}</h2>
        <p className="mt-8 text-lg">Download disponível</p>
        <p className="mx-auto mt-2 max-w-md text-white/70">Clique no botão abaixo para acessar o arquivo hospedado no MEGA.</p>
        <a href={ep.megaUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 bg-gold px-8 py-4 text-sm font-semibold tracking-widest text-ink transition hover:brightness-110"><ExternalLink size={18} /> ACESSAR DOWNLOAD NO MEGA</a>
        <div><Link to="/" className="mt-6 inline-block text-sm tracking-widest text-white/60 hover:underline">← Voltar para a galeria</Link></div>
      </div>
    </main>
  )
}
