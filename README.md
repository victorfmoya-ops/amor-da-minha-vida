# Amor da Minha Vida 💛

Site romântico em 7 telas — Next.js 14 (App Router) + Tailwind CSS + Framer Motion.
Mobile-first, sem autoplay, exportado como site estático.

## Telas
1. **Abertura** — botão "Abrir minha surpresa"
2. **Nós dois** — foto do casal em moldura Polaroid (toque e arraste)
3. **Nossa música** — player com play manual e links das plataformas oficiais
4. **Carta** — envelope animado com a carta completa
5. **Nossa família** — ilustração simbólica (dois corações envolvendo um pequenino)
6. **Promessa** — "Um dia de cada vez", palavras da carta que abrem ao toque
7. **Encerramento** — "Eu te amo, amor da minha vida."

## Rodar localmente
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera a pasta /out (site estático)
```

## Personalizar (tudo em `content/site.ts`)
| O quê | Onde |
|---|---|
| Foto do casal | coloque `casal.jpg` em `public/images/` e troque `photo.src` para `"./images/casal.jpg"` |
| Legenda da foto | `photo.caption` |
| Música | `music.spotifyUrl`, `music.youtubeUrl` → cole o link **oficial** da faixa |
| Player incorporado (opcional) | `music.embedUrl` → ex.: `https://open.spotify.com/embed/track/ID` (só carrega após clique) |
| Arquivo de áudio próprio (opcional) | `music.audioSrc` → **somente** se você tiver autorização para hospedar o arquivo |
| Carta | `letter` (já contém o texto original, sem alterações) |
| Promessas, família, frase final | `promises`, `family`, `closing` |

### Sobre a música
Por padrão os botões abrem uma busca no Spotify e no YouTube. Para apontar
direto para a faixa: abra a música no app → **Compartilhar → Copiar link** e cole
em `spotifyUrl`. Para o player incorporado, troque `open.spotify.com/track/ID`
por `open.spotify.com/embed/track/ID` e cole em `embedUrl`.

## Rodar no Docker
```bash
docker compose up -d --build    # http://localhost:8091
```
Imagem em duas etapas (build com Node 22 → nginx), com cabeçalhos de segurança, container
somente leitura e sem privilégios. Porta configurável: `PORTA=8080 docker compose up -d`.

## Publicar (site público)
- **GitHub Pages (configurado):** cada `git push` na branch `main` publica automaticamente
  (`.github/workflows/pages.yml`). Endereço: `https://<usuário>.github.io/amor-da-minha-vida/`.
- **Vercel:** importe o repositório em vercel.com → Deploy (detecta Next.js sozinho).
- **Netlify:** build `npm run build`, pasta de publicação `out`.
- **GitHub Pages:** rode `npm run build` e publique o conteúdo de `out/`.

## Estrutura
```
app/            layout, página principal (controle das telas) e estilos globais
components/
  screens/      as 7 telas, uma por arquivo
  ui/           navegação, título, corações flutuantes
content/site.ts todos os textos, foto e links
public/images/  imagens substituíveis
```

Acessibilidade: navegação por setas do teclado, rótulos ARIA, e as animações
diminuem automaticamente quando o aparelho pede "reduzir movimento".
