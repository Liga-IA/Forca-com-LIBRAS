'use client';

import { useState } from 'react';
import { LogOut, Send } from 'lucide-react';
import Link from 'next/link';
import { FeedbackForm } from './FeedbackForm';

interface GameLostScreenProps {
  word: string;
  wrongGuesses: string[];
  onPlayAgain: () => void;
}

const GameLostScreen = ({ word, wrongGuesses, onPlayAgain }: GameLostScreenProps) => {
  const [view, setView] = useState<'result' | 'feedback'>('result');

  const handleFeedbackSubmit = async (answers: { likert: Record<number, number>, stars: number }) => {
    try {
      const payload = {
        wasSuccessful: false,
        wrongGuesses,
        likertAnswers: answers.likert,
        starRating: answers.stars,
      };

      await fetch('/api/game-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

    } catch (error) {
      console.error("Failed to submit feedback:", error);
    } finally {
      onPlayAgain();
    }
  };

  const handleSkipAndSave = async () => {
    try {
      const payload = {
        wasSuccessful: false,
        wrongGuesses,
        likertAnswers: null,
        starRating: null,
      };

      await fetch('/api/game-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

    } catch (error) {
      console.error("Failed to save skipped session:", error);
    } finally {
      onPlayAgain();
    }
  };


  if (view === 'feedback') {
    return <FeedbackForm onSubmit={handleFeedbackSubmit} />;
  }

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
            onClick={() => setView('feedback')}
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Send className="mr-2" /> <p>Deixar Feedback</p>
          </button>
          <Link
            href="/"
            className="flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <LogOut className="mr-2" /> <p>Sair do jogo</p>
          </Link>
        </div>
        <button
          onClick={handleSkipAndSave}
          className="text-sm text-slate-400 hover:text-white mt-6 bg-transparent border-none"
        >
          Pular feedback e tentar novamente
        </button>
      </div>
    </div>
  );
};

export default GameLostScreen;
