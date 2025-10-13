"use client";
import { setMetrics } from "@/lib/metrics";
import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleStartGame = () => {
    router.push("/game");
    setMetrics();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Particles background */}
      <div className="absolute inset-0 bg-[url('/stars.png')] opacity-20 animate-float"></div>

      {/* Animated background shapes */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full animate-float-delayed"></div>

      <div className="relative z-10 p-4 lg:p-8">
        <header className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center mb-8 bg-slate-800/30 backdrop-blur rounded-2xl p-6">
          <div className="text-center lg:text-left mb-4 lg:mb-0 flex items-center gap-4">
            <Image
              src="/liga_logo.png"
              alt="Logo da Liga"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Forca LIBRAS
              </h1>
            </div>
          </div>
        </header>

        <div
          className="w-full flex justify-center items-center"
          style={{ minHeight: "60vh" }}
        >
          <div className=" flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <span className="text-4xl">👋</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Bem-vindo!
            </h2>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-md mx-auto">
              Teste suas habilidades em LIBRAS e descubra as palavras!
            </p>
            <button
              onClick={handleStartGame}
              className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <ThumbsUp /> <p className="ml-2">Iniciar o jogo</p>
            </button>

            {/* <Link href="/analytics">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-2xl transition-transform transform hover:scale-105">
                <p>Ver métricas</p>
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </main>
  );
}
