"use client";

import { LogOut, Repeat } from "lucide-react";
import Link from "next/link";

interface GameWonScreenProps {
  score: number;
  word: string;
  onPlayAgain: () => void;
}

const GameWonScreen = ({ score, word, onPlayAgain }: GameWonScreenProps) => {
  return (
    <div className="text-center text-white animate-fade-in">
      <h2 className="text-6xl font-bold mb-2 text-yellow-400">Você Venceu!</h2>
      <p className="text-2xl mb-4">🏆</p>
      <p className="text-xl mb-2">
        A palavra era: <span className="font-bold text-cyan-400">{word}</span>
      </p>
      <p className="text-xl mb-6">
        Sua pontuação final:{" "}
        <span className="font-bold text-yellow-400">{score}</span>
      </p>

      <div className="flex justify-center space-x-4">
        <button
          onClick={onPlayAgain}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-2xl transition-transform transform hover:scale-105"
        >
          <Repeat className="mr-2" />
          <p>Jogar novamente</p>
        </button>
        <Link
          href="/"
          className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
        >
          <LogOut className="mr-2" /> <p>Sair do jogo</p>
        </Link>
      </div>
    </div>
  );
};

export default GameWonScreen;
