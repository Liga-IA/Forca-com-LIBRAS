"use client";
import { AdviseModal } from "@/components/adviseModal";
import GameCanvas from "@/components/GameCanvas";
import GameLostScreen from "@/components/GameLostScreen";
import GameWonScreen from "@/components/GameWonScreen";
import { HangmanDrawing } from "@/components/hangManDrawing";
import { WordDisplay } from "@/components/wordDisplay";
import { WrongLettersDisplay } from "@/components/wrongLattersDisplay";
import { setMetrics } from "@/lib/metrics";
import { challenges } from "@/utils/dictionary";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const getRandomChallenge = () => {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  return challenges[randomIndex];
};

export default function GamePage() {
  const [challenge, setChallenge] = useState(getRandomChallenge());
  const [guessedLetters, setGuessedLetters] = useState(new Set<string>());
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [lives, setLives] = useState(6);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [initAdviseModal, setInitAdviseModal] = useState(false);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">(
    "playing"
  );

  const [realTimeDetectedSign, setRealTimeDetectedSign] = useState<
    string | null
  >(null);
  const [showParticles, setShowParticles] = useState(false);

  const handlePlayAgain = () => {
    setChallenge(getRandomChallenge());
    setGuessedLetters(new Set<string>());
    setWrongLetters([]);
    setLives(6);
    setCombo(0);
    setGameState("playing");
    setShowParticles(false);
    setMetrics();
  };

  const handleRealTimeSignDetected = (sign: string | null) => {
    setRealTimeDetectedSign(sign);
  };

  const handleSignDetected = useCallback(
    (sign: string) => {
      if (
        gameState !== "playing" ||
        guessedLetters.has(sign) ||
        wrongLetters.includes(sign)
      ) {
        return;
      }

      if (challenge.word.includes(sign)) {
        const newGuessedLetters = new Set(guessedLetters);
        newGuessedLetters.add(sign);
        setGuessedLetters(newGuessedLetters);

        const comboMultiplier = Math.min(combo + 1, 5);
        const points = 10 * comboMultiplier;
        setScore((prevScore) => prevScore + points);
        setCombo((prev) => prev + 1);
        setShowParticles(true);
        setTimeout(() => setShowParticles(false), 1000);
      } else {
        setWrongLetters((prev) => [...prev, sign]);
        setLives((prevLives) => prevLives - 1);
        setCombo(0);
      }
    },
    [gameState, guessedLetters, wrongLetters, challenge.word, combo]
  );

  // Abre o modal ao carregar a página e fecha automaticamente após 5s
  useEffect(() => {
    setInitAdviseModal(true);
    const timer = setTimeout(() => setInitAdviseModal(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (gameState !== "playing") return;

    if (lives <= 0) {
      setGameState("lost");
      return;
    }

    const allLettersGuessed = challenge.word
      .split("")
      .every((letter) => guessedLetters.has(letter));

    if (allLettersGuessed && guessedLetters.size > 0) {
      setGameState("won");
      setScore((prev) => prev + lives * 50 + combo * 25);
    }
  }, [lives, guessedLetters, challenge.word, gameState, combo]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <AdviseModal isOpen={initAdviseModal} />
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

          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-6 py-2">
              <span className="text-xl font-bold">✨ {score}</span>
              {combo > 1 && (
                <span className="ml-2 text-sm bg-white/20 rounded-full px-2 py-1">
                  Combo x{combo}
                </span>
              )}
            </div>
          </div>
        </header>
        {gameState === "won" && (
          <div
            className="w-full flex justify-center items-center"
            style={{ minHeight: "60vh" }}
          >
            <GameWonScreen
              score={score}
              word={challenge.word}
              onPlayAgain={handlePlayAgain}
            />
          </div>
        )}

        {gameState === "lost" && (
          <div
            className="w-full flex justify-center items-center"
            style={{ minHeight: "60vh" }}
          >
            <GameLostScreen
              word={challenge.word}
              onPlayAgain={handlePlayAgain}
            />
          </div>
        )}

        {gameState === "playing" && (
          <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Game Area */}
            <div className="xl:col-span-2">
              <div className="bg-slate-800/40 backdrop-blur rounded-2xl border border-slate-600/50 overflow-hidden shadow-2xl">
                <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
                  <GameCanvas
                    onSignDetected={handleSignDetected}
                    onRealTimeSignDetected={handleRealTimeSignDetected}
                  />

                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur rounded-lg p-3">
                    <p className="text-white text-sm font-medium">
                      Sinal:{" "}
                      <span
                        className={`font-bold ${
                          realTimeDetectedSign
                            ? "text-cyan-400"
                            : "text-gray-400"
                        }`}
                      >
                        {realTimeDetectedSign || "Aguardando..."}
                      </span>
                    </p>
                  </div>

                  {showParticles && (
                    <div className="absolute inset-0 pointer-events-none">
                      {Array.from({ length: 20 }, (_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-particle"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 0.5}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Word Display */}
              <div className="mt-8 bg-slate-800/40 backdrop-blur rounded-2xl p-6 text-center">
                <WordDisplay
                  word={challenge.word}
                  guessedLetters={guessedLetters}
                  wrongGuesses={wrongLetters}
                />

                <div className="mt-6 text-slate-400">
                  Progresso: {guessedLetters.size}/
                  {new Set(challenge.word.split("")).size} letras
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              {/* Challenge Info */}
              <div className="bg-slate-800/40 backdrop-blur rounded-2xl p-6 border border-slate-600/50">
                <div className="w-full h-48 bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={challenge.image}
                    alt={challenge.description}
                    className="h-full w-full object-contain transition-transform hover:scale-110"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        challenge.difficulty === "easy"
                          ? "bg-green-500/20 text-green-300"
                          : challenge.difficulty === "medium"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {challenge.difficulty === "easy"
                        ? "🟢 Fácil"
                        : challenge.difficulty === "medium"
                        ? "🟡 Médio"
                        : "🔴 Difícil"}
                    </span>
                  </div>

                  <p className="text-slate-300 text-center leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>

              {/* Hangman Drawing and Wrong Letters */}
              <div className="bg-slate-800/40 backdrop-blur rounded-2xl p-6 border border-slate-600/50">
                <h3 className="text-lg font-semibold text-center mb-4 text-slate-300">
                  Situação
                </h3>
                <div className="flex justify-center items-start gap-x-4">
                  <HangmanDrawing wrongCount={6 - lives} />
                  {wrongLetters.length > 0 && (
                    <WrongLettersDisplay wrongLetters={wrongLetters} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
