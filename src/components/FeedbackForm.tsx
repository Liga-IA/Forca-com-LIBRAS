
'use client';

import { useState } from 'react';
import { Star, Check } from 'lucide-react';

// 11 Likert-scale questions
const questions = [
  'Sinto que o jogo me ajudou a aprender novos sinais em LIBRAS.',
  'Após a partida, sinto que consigo diferenciar melhor os sinais que pratiquei.',
  'Sinto-me mais confiante para tentar reconhecer sinais de LIBRAS fora do jogo.',
  'Sinto-me mais confiante para tentar fazer os sinais que aprendi no jogo.',
  'A jogabilidade (adivinhar palavras com sinais) é uma forma eficaz de aprender.',
  'O retorno visual da câmera me ajudou a corrigir a forma como eu fazia os sinais.',
  'O jogo me deixou com mais vontade de continuar aprendendo LIBRAS.',
  'Eu recomendaria este jogo para outra pessoa que queira aprender LIBRAS.',
  'Sinto que o jogo é mais eficaz em comparação com outros métodos de aprendizado (vídeos, livros, etc.) que já usei para aprender LIBRAS.',
];

interface FeedbackFormProps {
  onSubmit: (answers: { likert: Record<number, number>, stars: number }) => void;
}

export function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const [likertAnswers, setLikertAnswers] = useState<Record<number, number>>({});
  const [starRating, setStarRating] = useState<number>(0);

  const handleLikertChange = (questionIndex: number, value: number) => {
    setLikertAnswers((prev) => ({ ...prev, [questionIndex]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(likertAnswers).length < questions.length || starRating === 0) {
      alert('Por favor, responda todas as perguntas e avalie com estrelas antes de enviar.');
      return;
    }
    onSubmit({ likert: likertAnswers, stars: starRating });
  };

  return (
     <div className="w-full max-w-6xl mx-auto bg-slate-800/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-cyan-400">Feedback da Partida</h2>
        <p className="mt-2 text-slate-300 max-w-3xl mx-auto">
          A Liga Acadêmica de Inteligência Artificial (LIA) e o Projeto IRIS estão desenvolvendo um estudo sobre educação inclusiva. Suas respostas anônimas são essenciais para entendermos quão bem nosso jogo auxilia no aprendizado de LIBRAS.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Grid for Likert-scale questions */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {questions.map((q, index) => (
    <div
      key={index}
      className="bg-slate-900/50 p-8 rounded-xl border border-slate-700 flex flex-col justify-between h-full"
    >
      <p className="mb-3 text-slate-200 text-sm font-medium">
        {index + 1}. {q}
      </p>
      <div className="mt-auto">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value} className="flex flex-col items-center cursor-pointer group p-2">
              <input
                type="radio"
                name={`question-${index}`}
                value={value}
                checked={likertAnswers[index] === value}
                onChange={() => handleLikertChange(index, value)}
                className="sr-only peer"
                required
              />
              <div className="w-10 h-10 rounded-md border-2 border-slate-600 flex items-center justify-center text-slate-400 group-hover:border-cyan-500 peer-checked:bg-cyan-500 peer-checked:border-cyan-500 peer-checked:text-white transition-all duration-200">
                {likertAnswers[index] === value ? <Check size={24} /> : value}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Star rating question */}
        <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 mt-8">
            <p className="text-center mb-4 text-slate-200 text-lg">No geral, quantas estrelas nosso jogo merece?</p>
            <div className="flex justify-center items-center gap-x-2">
                {[1, 2, 3, 4, 5].map((value) => (
                    <Star
                        key={value}
                        onClick={() => setStarRating(value)}
                        className={`h-12 w-12 cursor-pointer transition-all duration-150 ${
                            value <= starRating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-slate-600 hover:text-yellow-500'
                        }`}
                    />
                ))}
            </div>
        </div>
        
        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg text-lg"
        >
          Enviar Feedback e Jogar Novamente
        </button>
      </form>
    </div>
  );
}
