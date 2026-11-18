/**
 * ─────────────────────────────────────────────────────────────
 *  TUDO QUE É PERSONALIZÁVEL ESTÁ AQUI.
 *  Troque textos, foto e links da música sem mexer nos componentes.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  title: "Amor da Minha Vida",
  nickname: "Popis",

  /** Foto do casal (tela 2). Coloque sua imagem em /public/images e troque o caminho. */
  photo: {
    src: "./images/casal.jpg",
    alt: "Nós dois juntos",
    caption: "nós dois ♡",
  },

  /**
   * Música (tela 3).
   * Só use links de plataformas oficiais/licenciadas (Spotify, YouTube do
   * artista, Deezer, Apple Music). Nada toca sozinho: o play é sempre manual.
   *
   * - spotifyUrl / youtubeUrl: abrem a faixa na plataforma oficial.
   * - embedUrl (opcional): player incorporado oficial, carregado só quando a
   *   pessoa clicar. Ex. Spotify: https://open.spotify.com/embed/track/ID_DA_FAIXA
   * - audioSrc (opcional): arquivo próprio em /public/music — use somente se
   *   você tiver autorização para hospedá-lo.
   */
  music: {
    title: "Tantas Vitórias pro Amor Ganhar",
    artist: "MC IG",
    spotifyUrl:
      "https://open.spotify.com/search/" +
      encodeURIComponent("Tantas Vitórias pro Amor Ganhar MC IG"),
    youtubeUrl:
      "https://www.youtube.com/results?search_query=" +
      encodeURIComponent("Tantas Vitórias pro Amor Ganhar MC IG"),
    embedUrl: "",
    audioSrc: "",
    note: "Pra ouvir quando quiser. Coloca o fone, se der vontade.",
  },

  /** Carta (tela 4) — texto do autor, sem alterações. */
  letter: {
    greeting: "Amor,",
    paragraphs: [
      "quero pedir desculpas por tudo. Pelas vezes em que errei e não demonstrei o quanto você é importante. Sei que estamos numa fase difícil, com preocupações e mudanças.",
      "Popis, eu te amo muito. Não prometo uma vida perfeita, mas esforço, paciência, respeito e vontade de melhorar todos os dias. Vou ter paciência para conquistar esse coraçãozinho.",
      "Estou aprendendo a cuidar de você, entender seus sentimentos e respeitar seu tempo. Quero fazer de tudo para te ver feliz e estar ao seu lado. Não precisa ser forte o tempo inteiro. Quero que possa contar comigo nos dias bons e difíceis.",
      "Quero construir algo bonito com você e nossa família. Eu te amo, minha Popis. Quero que minhas atitudes demonstrem o que minhas palavras ainda não conseguem explicar.",
      "Um dia de cada vez.",
    ],
    signature: "Seu amor.",
  },

  /** Tela 5 — família e bebê. */
  family: {
    eyebrow: "Nossa família",
    title: "Um pedacinho de nós dois",
    text: "Tem uma vida pequenininha crescendo aí, e eu quero estar perto: nas consultas, nas dúvidas, nos medos e nas descobertas. Sempre no tempo de vocês.",
  },

  /** Tela 6 — promessas (palavras tiradas da carta). */
  promises: [
    { word: "Esforço", text: "Fazer a minha parte todos os dias, inclusive nos pequenos detalhes." },
    { word: "Paciência", text: "Ter calma pra conquistar esse coraçãozinho, sem pressa." },
    { word: "Respeito", text: "Respeitar seus sentimentos e o seu tempo." },
    { word: "Cuidado", text: "Aprender a cuidar de você e estar ao seu lado nos dias bons e difíceis." },
  ],

  closing: {
    line: "Eu te amo, amor da minha vida.",
    sub: "Sem pressa. Eu estou aqui.",
  },
};

export type Site = typeof site;
