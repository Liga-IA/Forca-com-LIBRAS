'use client';

import { useState } from 'react';
import { LogOut, Repeat, Send } from 'lucide-react';
import Link from 'next/link';
import { FeedbackForm } from './FeedbackForm';

interface GameWonScreenProps {
  score: number;
  word: string;
  wrongGuesses: string[];
  onPlayAgain: () => void;
}

const GameWonScreen = ({ score, word, wrongGuesses, onPlayAgain }: GameWonScreenProps) => {
  const [view, setView] = useState<'result' | 'feedback'>('result');

  const handleFeedbackSubmit = async (answers: { likert: Record<number, number>, stars: number }) => {
    try {
      const payload = {
        wasSuccessful: true,
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
        wasSuccessful: true,
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
    <div className="text-center text-white animate-fade-in">
      <h2 className="text-6xl font-bold mb-2 text-yellow-400">Você Venceu!</h2>
      <p className="text-2xl mb-4">🏆</p>
      <p className="text-xl mb-2">
        A palavra era: <span className="font-bold text-cyan-400">{word}</span>
      </p>

      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={() => setView('feedback')}
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <Send className="mr-2" /> <p>Deixar Feedback</p>
        </button>
        <Link
          href="/"
          className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
        >
          <LogOut className="mr-2" /> <p>Sair do jogo</p>
        </Link>
      </div>
      <button
        onClick={handleSkipAndSave}
        className="text-sm text-slate-400 hover:text-white mt-6 bg-transparent border-none"
      >
        Pular feedback e jogar novamente
      </button>
    </div>
  );
};

export default GameWonScreen;