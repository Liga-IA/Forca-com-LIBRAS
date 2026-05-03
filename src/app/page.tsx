"use client";

import { challenges, type Category } from "@/utils/dictionary";
import { ChevronLeft, Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type CategoryOption = {
  id: Category | "todas";
  label: string;
  icon: string;
  gradient: string;
};

const CATEGORIES: CategoryOption[] = [
  {
    id: "todas",
    label: "Todas as Categorias",
    icon: "🎮",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    id: "animais",
    label: "Animais",
    icon: "🐾",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    id: "natureza",
    label: "Natureza",
    icon: "🌿",
    gradient: "from-teal-500 to-green-600",
  },
  {
    id: "astronomia",
    label: "Astronomia",
    icon: "🌌",
    gradient: "from-indigo-600 to-violet-700",
  },
  {
    id: "tecnologia",
    label: "Tecnologia",
    icon: "💻",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "transporte",
    label: "Transporte",
    icon: "🚗",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "cotidiano",
    label: "Cotidiano",
    icon: "🏠",
    gradient: "from-rose-500 to-pink-600",
  },
];

function countByCategory(id: Category | "todas") {
  if (id === "todas") return challenges.length;
  return challenges.filter((c) => c.category === id).length;
}

export default function Home() {
  const router = useRouter();
  const [showCategories, setShowCategories] = useState(false);

  const handleSelectCategory = (id: Category | "todas") => {
    router.push(id === "todas" ? "/game" : `/game?category=${id}`);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
      {/* Blobs animados */}
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-indigo-950 rounded-full filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-1/4 w-96 h-96 bg-purple-950 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-1/4 left-1/4 w-96 h-96 bg-blue-950 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <main className="relative z-10 flex flex-col items-center w-full max-w-2xl">
        {/* Header */}
        <header className="mb-10 flex items-center justify-center gap-5 text-white">
          <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
            <Image
              src="/liga_logo.png"
              alt="Forca LIBRAS logo"
              width={56}
              height={56}
              className="rounded"
            />
          </div>
          <h1 className="text-5xl font-bold tracking-wider uppercase">
            FORCA LIBRAS
          </h1>
        </header>

        {/* Card com slider */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: "200%",
              transform: showCategories ? "translateX(-50%)" : "translateX(0)",
            }}
          >
            {/* ── Painel 1: Boas-vindas ── */}
            <div className="p-8 text-center" style={{ width: "50%" }}>
              {/* Ícone */}
              <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
                <span
                  className="material-icons animate-float-gentle"
                  style={{
                    fontSize: "72px",
                    fontVariationSettings:
                      "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48",
                  }}
                >
                  sign_language
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Bem-vindo!
              </h2>
              <p className="text-gray-500 mb-8">
                Teste suas habilidades em LIBRAS e descubra as palavras!
                Junte-se a nós para aprender e se conectar com a comunidade
                surda.
              </p>

              <button
                onClick={() => setShowCategories(true)}
                className="w-full bg-purple-700 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 fill-white" />
                Iniciar o jogo
              </button>
            </div>

            {/* ── Painel 2: Categorias ── */}
            <div className="p-8 flex flex-col" style={{ width: "50%" }}>
              {/* Cabeçalho do painel */}
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setShowCategories(false)}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-600"
                  aria-label="Voltar"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 leading-none">
                    Escolha um tema
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    As palavras serão filtradas pela categoria
                  </p>
                </div>
              </div>

              {/* Grade de categorias */}
              <div className="grid grid-cols-2 gap-4">
                {/* "Todas" ocupa a linha toda */}
                <button
                  onClick={() => handleSelectCategory("todas")}
                  className={`col-span-2 bg-gradient-to-r ${CATEGORIES[0].gradient} text-white rounded-2xl p-5 flex items-center gap-4 hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-md`}
                >
                  <span className="text-4xl">{CATEGORIES[0].icon}</span>
                  <div className="text-left">
                    <p className="font-bold text-lg leading-none">
                      {CATEGORIES[0].label}
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      {countByCategory("todas")} palavras
                    </p>
                  </div>
                </button>

                {/* Demais categorias em 2 colunas */}
                {CATEGORIES.slice(1).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className={`bg-gradient-to-br ${cat.gradient} text-white rounded-2xl p-5 flex flex-col items-center gap-2 hover:opacity-90 hover:scale-[1.03] transition-all duration-200 shadow-md`}
                  >
                    <span className="text-5xl">{cat.icon}</span>
                    <p className="font-bold text-lg leading-none text-center">
                      {cat.label}
                    </p>
                    <p className="text-white/70 text-sm">
                      {countByCategory(cat.id)} palavras
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
