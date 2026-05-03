export type Category =
  | "animais"
  | "natureza"
  | "astronomia"
  | "tecnologia"
  | "transporte"
  | "cotidiano";

export interface Challenge {
  word: string;
  description: string;
  image: string;
  difficulty: "easy" | "medium" | "hard";
  category: Category;
}

export const challenges: Challenge[] = [
  // ── Animais ──────────────────────────────────────────────
  { word: "GATO",   description: "Animal doméstico que mia e ronrona",        image: "/assets/gato.jpg",   difficulty: "easy",   category: "animais" },
  { word: "PATO",   description: "Ave aquática que grasna e nada",            image: "/assets/pato.jpg",   difficulty: "easy",   category: "animais" },
  { word: "SAPO",   description: "Anfíbio verde que pula e coaxa",            image: "/assets/sapo.jpg",   difficulty: "easy",   category: "animais" },

  // ── Natureza ──────────────────────────────────────────────
  { word: "ARVORE",   description: "Planta de grande porte com tronco e galhos", image: "/assets/arvore.jpg",   difficulty: "easy",   category: "natureza" },
  { word: "FLORESTA", description: "Grande área coberta por muitas árvores",      image: "/assets/floresta.jpg", difficulty: "medium", category: "natureza" },
  { word: "RIO",      description: "Curso natural de água doce",                  image: "/assets/rio.jpg",      difficulty: "easy",   category: "natureza" },
  { word: "MAR",      description: "Grande extensão de água salgada",             image: "/assets/mar.jpg",      difficulty: "easy",   category: "natureza" },

  // ── Astronomia ────────────────────────────────────────────
  { word: "SOL",     description: "Estrela central do nosso sistema solar",          image: "/assets/sol.jpg",     difficulty: "easy",   category: "astronomia" },
  { word: "LUA",     description: "Satélite natural que orbita a Terra",             image: "/assets/lua.jpg",     difficulty: "easy",   category: "astronomia" },
  { word: "ESTRELA", description: "Corpo celeste que brilha no céu noturno",         image: "/assets/estrela.jpg", difficulty: "medium", category: "astronomia" },
  { word: "PLANETA", description: "Corpo celeste que orbita uma estrela",            image: "/assets/planeta.jpg", difficulty: "medium", category: "astronomia" },
  { word: "UNIVERSO", description: "Tudo o que existe: galáxias, planetas e energia", image: "/assets/universo.jpg", difficulty: "hard", category: "astronomia" },
  { word: "GALAXIA", description: "Sistema de bilhões de estrelas unidas pela gravidade", image: "/assets/galaxia.jpg", difficulty: "hard", category: "astronomia" },

  // ── Tecnologia ────────────────────────────────────────────
  { word: "COMPUTADOR", description: "Máquina eletrônica para processar dados",  image: "/assets/computador.jpg", difficulty: "hard",   category: "tecnologia" },
  { word: "TECLADO",    description: "Dispositivo de entrada de dados por teclas", image: "/assets/teclado.jpg",    difficulty: "medium", category: "tecnologia" },
  { word: "MOUSE",      description: "Dispositivo apontador para o computador",   image: "/assets/mouse.jpg",      difficulty: "easy",   category: "tecnologia" },
  { word: "TELA",       description: "Superfície que exibe imagens e vídeos",     image: "/assets/tela.jpg",       difficulty: "easy",   category: "tecnologia" },
  { word: "CAMERA",     description: "Dispositivo para capturar fotos e vídeos",  image: "/assets/camera.jpg",     difficulty: "medium", category: "tecnologia" },

  // ── Transporte ────────────────────────────────────────────
  { word: "CARRO",   description: "Veículo automotor com quatro rodas",              image: "/assets/carro.jpg",   difficulty: "easy",   category: "transporte" },
  { word: "BARCO",   description: "Embarcação que navega em rios e mares",           image: "/assets/barco.jpg",   difficulty: "easy",   category: "transporte" },
  { word: "PONTE",   description: "Estrutura que liga dois lados sobre um obstáculo", image: "/assets/ponte.jpg",   difficulty: "medium", category: "transporte" },
  { word: "ESTRADA", description: "Caminho pavimentado por onde os veículos trafegam", image: "/assets/estrada.jpg", difficulty: "medium", category: "transporte" },

  // ── Cotidiano ─────────────────────────────────────────────
  { word: "CASA",     description: "Local onde as pessoas moram e vivem",           image: "/assets/casa.jpg",     difficulty: "easy",   category: "cotidiano" },
  { word: "MESA",     description: "Móvel com tampo plano para apoiar objetos",     image: "/assets/mesa.jpg",     difficulty: "easy",   category: "cotidiano" },
  { word: "CADEIRA",  description: "Assento com encosto para uma pessoa",           image: "/assets/cadeira.jpg",  difficulty: "easy",   category: "cotidiano" },
  { word: "CAMA",     description: "Móvel para dormir e descansar",                 image: "/assets/cama.jpg",     difficulty: "easy",   category: "cotidiano" },
  { word: "BOLA",     description: "Objeto esférico usado em esportes e brincadeiras", image: "/assets/bola.jpg",  difficulty: "easy",   category: "cotidiano" },
  { word: "BONECA",   description: "Brinquedo em forma de figura humana",           image: "/assets/boneca.jpg",   difficulty: "medium", category: "cotidiano" },
  { word: "LIVRO",    description: "Conjunto de páginas com texto para leitura",    image: "/assets/livro.jpg",    difficulty: "easy",   category: "cotidiano" },
  { word: "CARTEIRA", description: "Pequena bolsa para guardar documentos e dinheiro", image: "/assets/carteira.jpg", difficulty: "hard", category: "cotidiano" },
  { word: "BANCO",    description: "Instituição financeira ou assento longo",       image: "/assets/banco.jpg",    difficulty: "medium", category: "cotidiano" },
  { word: "REVISTA",  description: "Publicação periódica com artigos e imagens",    image: "/assets/revista.jpg",  difficulty: "medium", category: "cotidiano" }
];
