# O Polígamo | Gomora House
```
npm install
npm run dev
npm run build
npm run preview
```
**Editar episódios:** `src/data/episodes.ts` (título, descrição, capa, `megaUrl`). Capa: `public/assets/img/capa.jpg`.

**Deploy (GitHub Pages):** crie o repositório, faça push para `main`, e em *Settings → Pages → Source* escolha **GitHub Actions**. O projeto usa `base: './'` e `HashRouter`, por isso funciona com qualquer nome de repositório (URLs tipo `/#/download/3`).
