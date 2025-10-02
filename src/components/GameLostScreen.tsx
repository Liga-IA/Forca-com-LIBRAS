"use client";

import { LogOut, Repeat } from "lucide-react";
import Link from "next/link";

interface GameLostScreenProps {
  word: string;
  onPlayAgain: () => void;
}

const GameLostScreen = ({ word, onPlayAgain }: GameLostScreenProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur">
      <div className="text-center text-white animate-fade-in mx-auto p-8">
        <div className="mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-4xl">💔</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            GAME OVER
          </h2>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-xl text-slate-300">A palavra correta era:</p>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <span className="font-bold text-cyan-400 text-3xl">{word}</span>
          </div>
          <p className="text-slate-400">Não desista! Tente novamente.</p>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onPlayAgain}
            className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <Repeat className="mr-2" />
            <p> Tentar Novamente</p>
          </button>
          <Link
            href="/"
            className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <LogOut className="mr-2" /> <p>Sair do jogo</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameLostScreen;
