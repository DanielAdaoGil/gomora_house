export interface Episode { id: number; title: string; year: number; description: string; cover: string; megaUrl: string }

/** Caminho que respeita o `base` do Vite (GitHub Pages). */
export const asset = (p: string) => import.meta.env.BASE_URL + p.replace(/^\//, '')

const pad = (n: number) => String(n).padStart(2, '0')

// ✏️ EDITE AQUI: título, descrição, capa e link MEGA de cada episódio.
const descricoes = [

  "Por trás das lágrimas perfeitas no funeral e da imagem impecável de Joyce como esposa e influenciadora, existe um passado marcado pela raiva e um casamento construído sobre segredos.",

  "Matipa começa a seduzir Jonasi e a entrar cada vez mais no império dos Gomora, enquanto a imagem perfeita de Joyce e sua família começa a desmoronar.",

  "Joyce organiza uma luxuosa festa de aniversário de casamento para tentar salvar sua imagem pública, obrigando a família destruída a sorrir enquanto esconde a traição que está acontecendo por trás das aparências.",

  "Jonasi retorna para casa, deixando os filhos confusos. Matipa tenta reconquistá-lo, enquanto Joyce fica dividida entre preservar a paz da família e proteger a si mesma.",

  "Matipa esperava receber uma compensação generosa, mas seus planos não saem como esperado. Ela então deixa J&J em busca de oportunidades mais lucrativas e de maior poder.",

  "A possibilidade de uma gravidez deixa Joyce extremamente nervosa. Durante um almoço familiar, algumas conversas levantam novas suspeitas sobre os segredos escondidos dentro da família.",

  "O nascimento dos gémeos provoca uma forte crise emocional em Joyce. Jonasi tenta justificar suas atitudes, mas Mpumi e Menzi chegam ao limite e deixam claro que já não aceitam seus jogos violentos.",

  "Com um grande escândalo prestes a explodir, Joyce faz uma proposta desesperada e surpreendente, transformando sua dor conjugal em uma estratégia para recuperar poder.",

  "Joyce continua fingindo felicidade diante das câmeras, mas a nova estrutura matrimonial provoca uma forte reação social e empurra os membros da família Gomora para um isolamento cada vez maior.",

  "Um antigo amor de Jonasi finalmente aparece, revelando décadas de sacrifícios, segredos e mentiras que ele trabalhou durante anos para esconder.",

  "No aniversário de Jonasi, ele espera receber carinho e atenção das mulheres de sua vida, mas encontra ressentimento e frustração. A família está cada vez mais dividida e ele começa a sentir o peso da própria solidão.",

  "O batizado dos gémeos transforma-se em caos quando antigos ressentimentos e sentimentos de abandono vêm à tona, expondo ainda mais os segredos e conflitos da família Gomora.",

  "Essie procura Joyce e pede que ela tente enxergar a situação também pelo seu ponto de vista. Cansada de viver cercada de segredos, Joyce começa a considerar abandonar a vida pública e enfrentar Jonasi.",

  "Jonasi continua repetindo seu comportamento e começa a perseguir outra mulher, atraindo-a com promessas de poder, riqueza e luxo. Ao mesmo tempo, Xolani confronta Lindani publicamente, aumentando os conflitos familiares.",

  "Lindani chega a uma situação desesperadora e precisa pedir ajuda a Mpume e Joyce. Enquanto isso, as novas traições de Jonasi continuam causando danos à família.",

  "A casa dos Gomora mergulha no caos e a mãe de Lindani intervém para assumir o controle da situação. Resultados médicos inesperados deixam Joyce furiosa.",

  "Jonasi é internado no hospital e Joyce assume o papel de esposa dedicada. Porém, mesmo enfrentando problemas de saúde, Jonasi continua obcecado por poder e controle.",

  "Matipa e Joyce, ambas destruídas pelos abusos de Jonasi, encontram uma inesperada solidariedade. Com a ajuda de Magesh, Joyce começa finalmente a escolher a liberdade.",

  "Depois de afastar Magesh e romper com praticamente toda a sua família, Jonasi fica completamente sozinho e recebe uma notícia devastadora sobre sua saúde.",

  "Três anos se passam. A família Gomora está prosperando, mas Jonasi reaparece completamente transformado, como uma sombra do homem poderoso que já foi, obrigando a família a enfrentar as consequências do passado.",

  "Frágil e debilitado, Jonasi passa seus dias sozinho enquanto sua saúde piora. Ao mesmo tempo, sua família luta contra sentimentos conflitantes de amor, mágoa e ódio pelo homem que destruiu tantas relações.",

  "Após a morte de Jonasi, a rivalidade entre suas mulheres continua. Joyce e Essie entram em conflito sobre como homenagear e preservar a memória do marido, enquanto o legado e os segredos de Jonasi continuam causando problemas."
];

export const episodes: Episode[] = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  title: `Episódio ${i + 1}`,
  year: 2026,
  description: descricoes[i] ?? "Descrição a ser atualizada.",
  cover: "assets/img/capa.jpg",
  megaUrl: `MEGA_LINK_EPISODIO_${String(i + 1).padStart(2, "0")}`,
}))

export const getEpisode = (id?: string) => episodes.find((e) => e.id === Number(id))
