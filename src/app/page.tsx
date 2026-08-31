"use client";

import { challenges, type Category } from "@/utils/dictionary";
import {
  ChevronLeft,
  Play,
  LayoutGrid,
  PawPrint,
  Leaf,
  Laptop,
  Bus,
  House,
  Telescope,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type CategoryOption = {
  id: Category | "todas";
  label: string;
  icon: React.ElementType;
  gradient: string;
  shadow?: string;
  iconBg: string;
};

const CATEGORIES: CategoryOption[] = [
  {
    id: "todas",
    label: "Todas as Categorias",
    icon: LayoutGrid,
    gradient: "from-fuchsia-600 via-purple-600 to-violet-700",
    shadow: "shadow-fuchsia-500/40",
    iconBg:
      "bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-[0_0_25px_rgba(217,70,239,0.75)]",
  },
  {
    id: "animais",
    label: "Animais",
    icon: PawPrint,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    shadow: "shadow-emerald-400/30",
    iconBg:
      "bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-[0_0_25px_rgba(16,185,129,0.75)]",
  },
  {
    id: "natureza",
    label: "Natureza",
    icon: Leaf,
    gradient: "from-lime-500 via-green-500 to-emerald-700",
    shadow: "shadow-lime-400/30",
    iconBg:
      "bg-gradient-to-br from-lime-400 to-emerald-600 shadow-[0_0_25px_rgba(132,204,22,0.75)]",
  },
  {
    id: "astronomia",
    label: "Astronomia",
    icon: Telescope,
    gradient: "from-violet-700 via-fuchsia-600 to-purple-500",
    shadow: "shadow-violet-400/30",
    iconBg:
      "bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_25px_rgba(168,85,247,0.75)]",
  },
  {
    id: "tecnologia",
    label: "Tecnologia",
    icon: Laptop,
    gradient: "from-blue-600 via-indigo-500 to-cyan-500",
    shadow: "shadow-blue-400/30",
    iconBg:
      "bg-gradient-to-br from-blue-500 to-cyan-500 shadow-[0_0_25px_rgba(59,130,246,0.75)]",
  },
  {
    id: "transporte",
    label: "Transporte",
    icon: Bus,
    gradient: "from-amber-500 via-orange-500 to-pink-500",
    shadow: "shadow-amber-400/30",
    iconBg:
      "bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_0_25px_rgba(251,146,60,0.75)]",
  },
  {
    id: "cotidiano",
    label: "Cotidiano",
    icon: House,
    gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
    shadow: "shadow-rose-400/30",
    iconBg:
      "bg-gradient-to-br from-rose-500 to-fuchsia-600 shadow-[0_0_25px_rgba(244,63,94,0.75)]",
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
    <div className="relative min-h-screen overflow-hidden bg-[#070012] p-2 sm:p-4 lg:p-6 flex items-center justify-center">
      {/* Blobs animados */}{" "}
      <div className="absolute top-0 -left-1/4 h-96 w-96 rounded-full bg-indigo-950 opacity-20 blur-3xl" />{" "}
      <div className="absolute top-0 -right-1/4 h-96 w-96 rounded-full bg-purple-950 opacity-20 blur-3xl" />{" "}
      <div className="absolute -bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-950 opacity-20 blur-3xl" />
      {/* Grid fundo */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="relative z-10 w-full max-w-[1800px] overflow-hidden rounded-[30px] border border-fuchsia-500/20 bg-[#090511]/85 backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,0.2)]">
        <div
          className="flex w-[200%] transition-transform duration-500 ease-in-out"
          style={{
            transform: showCategories ? "translateX(-50%)" : "translateX(0)",
          }}
        >
          {/* ── Painel 1: Boas-vindas ── */}
          <div
            className="grid min-h-[calc(100dvh-1rem)] max-h-[860px] grid-cols-1 lg:min-h-[700px] lg:grid-cols-2"
            style={{ width: "50%" }}
          >
            <div className="relative flex flex-col justify-between border-b border-white/5 bg-gradient-to-br from-[#12092a] via-[#090511] to-[#05030d] p-5 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl border border-[#8b5cf6]/40 bg-[#130a2d] shadow-[0_0_30px_rgba(139,92,246,0.35)]">
                  <Image
                    src="/liga_logo.png"
                    alt="Forca LIBRAS logo"
                    width={70}
                    height={70}
                    className="rounded"
                  />
                </div>

                <h1 className="text-xl sm:text-4xl font-extrabold tracking-wide text-white uppercase">
                  FORCA{" "}
                  <span className="bg-gradient-to-r from-[#5B8CFF] to-[#C45CFF] bg-clip-text text-transparent">
                    LIBRAS
                  </span>
                </h1>
              </div>

              <div className="relative flex min-h-[280px] flex-1 items-center justify-center overflow-hidden py-4 sm:min-h-[350px]">
                <div className="absolute h-[220px] w-[220px] rounded-full border border-[#8b5cf6]/15 bg-[#8b5cf6]/5 blur-3xl sm:h-[430px] sm:w-[430px]" />

                <div className="absolute h-[260px] w-[260px] rounded-full border border-[#8b5cf6]/10 sm:h-[480px] sm:w-[480px]" />

                <div className="absolute bottom-[80px] h-16 w-[200px] rounded-full bg-gradient-to-r from-[#d946ef]/40 via-[#8b5cf6]/30 to-[#3b82f6]/40 blur-3xl sm:bottom-[120px] sm:h-28 sm:w-[360px]" />

                <Image
                  src="/mao3d.png"
                  alt="Mão 3D"
                  width={900}
                  height={900}
                  className="relative z-10 h-auto max-h-[48dvh] w-auto max-w-[90%] object-contain translate-y-2 drop-shadow-[0_0_80px_rgba(139,92,246,0.45)] sm:max-h-[55dvh] sm:translate-y-6"
                />

                <div className="absolute left-4 top-20 h-4 w-4 rounded-full border-2 border-[#d946ef]/70" />
                <div className="absolute right-8 top-16 h-5 w-5 rounded-full border-2 border-[#4f7cff]/80" />
                <div className="absolute right-12 bottom-28 h-3 w-3 rounded-full bg-[#8b5cf6]/70" />
                <div className="absolute left-10 bottom-36 h-2 w-2 rounded-full bg-[#d946ef]/70" />
              </div>
            </div>

            <div className="relative flex flex-col justify-center bg-gradient-to-br from-[#090511] via-[#0b0717] to-[#05030d] px-5 py-8 sm:px-10 sm:py-12">
              <div className="absolute right-4 top-4 hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl sm:right-8 sm:top-8 sm:block">
                <span className="text-sm sm:text-xl font-medium tracking-wide text-white/70">
                  ✦ Aprenda. Jogue. Conecte-se.
                </span>
              </div>

              <div className="w-full max-w-xl">
                <span className="mb-4 block text-2xl sm:text-4xl font-medium text-[#8b5cf6]">
                  Olá, seja bem-vindo(a)!
                </span>

                <h2 className="mb-5 text-5xl sm:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight text-white">
                  Vamos
                  <br />
                  <span className="bg-gradient-to-r from-[#5B8CFF] via-[#8b5cf6] to-[#d946ef] bg-clip-text text-transparent">
                    jogar?
                  </span>
                </h2>

                <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#5B8CFF] to-[#d946ef]" />

                <p className="mb-8 text-base sm:text-2xl leading-relaxed text-white/60">
                  Teste suas habilidades em{" "}
                  <span className="font-semibold text-[#a855f7]">LIBRAS</span> e
                  descubra novas palavras! Aprenda, divirta-se e conecte-se com
                  a comunidade surda.
                </p>

                <button
                  onClick={() => setShowCategories(true)}
                  className="group flex h-14 sm:h-16 w-full items-center justify-center gap-3 sm:gap-4 rounded-2xl bg-gradient-to-r from-[#5b21b6] via-[#9333ea] to-[#d946ef] text-xl font-bold text-white shadow-[0_0_45px_rgba(168,85,247,0.45)] transition-all duration-300 hover:shadow-[0_0_65px_rgba(168,85,247,0.7)] active:scale-[0.99]"
                >
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 fill-white transition-transform duration-300 group-hover:translate-x-1" />

                  <p className="text-xl sm:text-3xl text-white">
                    Iniciar o jogo
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* ── Painel 2: Categorias ── */}
          <div
            className="relative flex min-h-[calc(100dvh-1rem)] max-h-[860px] flex-col overflow-hidden p-4 sm:p-6 lg:min-h-[700px]"
            style={{ width: "50%" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_55%)] pointer-events-none" />

            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

            <div className="absolute top-20 right-16 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
            <div className="absolute top-40 right-40 h-2 w-2 rounded-full bg-fuchsia-500 shadow-[0_0_18px_#d946ef]" />
            <div className="absolute bottom-24 left-10 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_18px_#8b5cf6]" />

            {/* Cabeçalho do painel */}
            <div className="relative z-10 mb-5 flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => setShowCategories(false)}
                className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-fuchsia-500/20 bg-white/5 text-fuchsia-300 backdrop-blur-md transition-all duration-300 hover:bg-fuchsia-500/10 hover:shadow-[0_0_25px_rgba(217,70,239,0.5)]"
                aria-label="Voltar"
              >
                <ChevronLeft className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>

              <div className="min-w-0">
                <h2 className="text-2xl sm:text-4xl font-black text-white leading-none tracking-tight">
                  Escolha um{" "}
                  <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                    tema
                  </span>
                </h2>

                <p className="mt-2 text-xs sm:text-lg text-zinc-400">
                  As palavras serão filtradas pela categoria
                </p>
              </div>
            </div>

            {/* Grade de categorias */}
            <div className="relative z-10 grid flex-1 grid-cols-1 gap-3 overflow-y-auto overflow-x-hidden pr-1 sm:grid-cols-2">
              {/* "Todas" ocupa a linha toda */}
              <button
                onClick={() => handleSelectCategory("todas")}
                className={`group relative min-h-[120px] overflow-hidden rounded-[24px] border border-fuchsia-500/20 bg-gradient-to-r ${CATEGORIES[0].gradient} p-[1px] transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(217,70,239,0.3)] sm:col-span-2 sm:min-h-[140px]`}
              >
                <div className="relative flex h-full min-h-[118px] items-center justify-between rounded-[24px] bg-[#12001d] px-4 py-5 shadow-[0_0_40px_rgba(217,70,239,0.35)] sm:min-h-[138px] sm:px-6 sm:py-6">
                  <div className="absolute inset-0 opacity-70 bg-gradient-to-r from-fuchsia-500/10 via-transparent to-violet-500/10" />

                  <div className="relative z-10 flex min-w-0 items-center gap-4 sm:gap-5">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${CATEGORIES[0].iconBg} sm:h-20 sm:w-20 sm:rounded-3xl`}
                    >
                      <LayoutGrid className="h-7 w-7 sm:h-10 sm:w-10 text-white" />
                    </div>

                    <div className="min-w-0 text-left">
                      <p className="truncate text-xl sm:text-4xl font-black leading-none text-white">
                        {CATEGORIES[0].label}
                      </p>

                      <p className="mt-2 text-xs sm:mt-3 sm:text-lg text-white/70">
                        {countByCategory("todas")} palavras disponíveis
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.7)]">
                    <ArrowRight className="h-6 w-6 text-fuchsia-300" />
                  </div>
                </div>
              </button>

              {/* Demais categorias em 2 colunas */}
              {CATEGORIES.slice(1).map((cat) => {
                const Icon = cat.icon;

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className={`group relative min-h-[150px] overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br ${cat.gradient} p-[1px] transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]`}
                  >
                    <div className="relative flex h-full min-h-[148px] flex-col justify-between rounded-[22px] bg-[#100018] p-4 shadow-[0_0_35px_rgba(168,85,247,0.18)] sm:p-5">
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent" />

                      <div className="relative z-10 flex items-start justify-between">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${cat.iconBg} sm:h-16 sm:w-16`}
                        >
                          <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                        </div>

                        <div className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:bg-white/10 group-hover:shadow-[0_0_18px_rgba(255,255,255,0.25)]">
                          <ArrowRight className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      <div className="relative z-10 mt-4 text-left sm:mt-5">
                        <p className="text-xl sm:text-3xl font-black leading-none text-white">
                          {cat.label}
                        </p>

                        <p className="mt-2 text-xs sm:text-lg text-white/65">
                          {countByCategory(cat.id)} palavras
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
