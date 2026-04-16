"use client";

import { LogOut, Repeat } from "lucide-react";
import Link from "next/link";

interface GameWonScreenProps {
  score: number;
  word: string;
  letterPoints: number;
  winBonus: number;
  comboBonus: number;
  onPlayAgain: () => void;
}

const GameWonScreen = ({
  score,
  word,
  letterPoints,
  winBonus,
  comboBonus,
  onPlayAgain,
}: GameWonScreenProps) => {
  return (
    <div className="text-center text-white animate-fade-in">
      <h2 className="text-6xl font-bold mb-2 text-yellow-400">Você Venceu!</h2>
      <p className="text-2xl mb-4">🏆</p>
      <p className="text-xl mb-4">
        A palavra era: <span className="font-bold text-cyan-400">{word}</span>
      </p>

      {/* Detalhamento da pontuação */}
      <div className="bg-slate-800/50 rounded-xl p-4 mb-6 text-left max-w-xs mx-auto space-y-2">
        <p className="text-slate-300 text-sm">
          Letras corretas:{" "}
          <span className="text-cyan-400 font-bold">+{letterPoints}</span>
        </p>
        <p className="text-slate-300 text-sm">
          Vidas restantes:{" "}
          <span className="text-green-400 font-bold">+{winBonus}</span>
        </p>
        {comboBonus > 0 && (
          <p className="text-slate-300 text-sm">
            Bônus de combo:{" "}
            <span className="text-yellow-400 font-bold">+{comboBonus}</span>
          </p>
        )}
        <div className="border-t border-slate-600 pt-2">
          <p className="text-white font-bold">
            Total:{" "}
            <span className="text-yellow-400 text-lg">{score}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onPlayAgain}
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105"
        >
          <Repeat className="mr-2" />
          <p>Jogar novamente</p>
        </button>
        <Link
          href="/"
          className="flex items-center justify-center border border-slate-500 bg-slate-700/50 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
        >
          <LogOut className="mr-2" /> <p>Sair do jogo</p>
        </Link>
      </div>
    </div>
  );
};

export default GameWonScreen;
