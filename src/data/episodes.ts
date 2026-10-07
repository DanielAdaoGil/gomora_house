export interface Episode { id: number; title: string; year: number; description: string; cover: string; megaUrl: string }

/** Caminho que respeita o `base` do Vite (GitHub Pages). */
export const asset = (p: string) => import.meta.env.BASE_URL + p.replace(/^\//, '')

const pad = (n: number) => String(n).padStart(2, '0')

// ✏️ EDITE AQUI: título, descrição, capa e link MEGA de cada episódio.
export const episodes: Episode[] = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  title: `Episódio ${i + 1}`,
  year: 2026,
  description: `Episódio ${i + 1} da 1ª temporada de O Polígamo. Descrição a ser atualizada.`,
  cover: 'assets/img/capa.jpg',
  megaUrl: `MEGA_LINK_EPISODIO_${pad(i + 1)}`, // substituir pelo link real do MEGA
}))

export const getEpisode = (id?: string) => episodes.find((e) => e.id === Number(id))
