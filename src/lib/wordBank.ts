
export interface Challenge {
  word: string;
  description: string;
  image: string;
}

export const wordBank: Challenge[] = [
  {
    word: "CASA",
    description: "Lugar onde uma família vive.",
    image: "/placeholders/casa.svg",
  },
  {
    word: "BOLA",
    description: "Objeto redondo usado em muitos esportes.",
    image: "/placeholders/bola.svg",
  },
  {
    word: "GATO",
    description: "Animal de estimação que mia.",
    image: "/placeholders/gato.svg",
  },
  {
    word: "LIVRO",
    description: "Conjunto de folhas com texto.",
    image: "/placeholders/livro.svg",
  },
];

export const getRandomChallenge = (): Challenge => {
  const randomIndex = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomIndex];
};
