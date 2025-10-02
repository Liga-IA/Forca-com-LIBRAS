"use client";
import GameCanvas from "@/components/GameCanvas";
import GameLostScreen from "@/components/GameLostScreen";
import GameWonScreen from "@/components/GameWonScreen";
import { setMetrics } from "@/lib/metrics";
import { challenges } from "@/utils/dictionary";
import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const getRandomChallenge = () => {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  return challenges[randomIndex];
};

const WordDisplay = ({
  word,
  guessedLetters,
  wrongGuesses,
}: {
  word: string;
  guessedLetters: Set<string>;
  wrongGuesses: string[];
}) => (
  <div className="flex flex-wrap gap-2 lg:gap-3 justify-center">
    {word.split("").map((letter, index) => (
      <div
        key={index}
        className={`
          w-10 h-12 lg:w-14 lg:h-16 
          bg-gradient-to-br from-slate-700 to-slate-800 
          rounded-xl border-2 border-slate-600
          flex items-center justify-center 
          text-2xl lg:text-4xl font-bold
          shadow-lg transform transition-all duration-500
          ${
            guessedLetters.has(letter)
              ? "border-emerald-400 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white scale-110 animate-pulse"
              : "hover:scale-105"
          }
        `}
      >
        <span
          className={`transition-all duration-300 ${
            guessedLetters.has(letter) ? "animate-bounce" : ""
          }`}
        >
          {guessedLetters.has(letter) ? letter : ""}
        </span>
      </div>
    ))}
  </div>
);

const HangmanDrawing = ({ wrongCount }: { wrongCount: number }) => {
  const parts = ["head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];

  return (
    <div className="relative w-44 h-56 lg:w-56 lg:h-57 mx-auto">
      <svg viewBox="0 0 200 250" className="w-full h-full">
        {/* Forca base */}
        <line
          x1="20"
          y1="230"
          x2="180"
          y2="230"
          stroke="#8B4513"
          strokeWidth="6"
        />
        <line
          x1="40"
          y1="230"
          x2="40"
          y2="20"
          stroke="#8B4513"
          strokeWidth="6"
        />
        <line
          x1="40"
          y1="20"
          x2="120"
          y2="20"
          stroke="#8B4513"
          strokeWidth="6"
        />
        <line
          x1="120"
          y1="20"
          x2="120"
          y2="40"
          stroke="#8B4513"
          strokeWidth="4"
        />

        {/* Partes do boneco com animações */}
        {wrongCount >= 1 && (
          <circle
            cx="120"
            cy="55"
            r="15"
            stroke="#ff4444"
            strokeWidth="3"
            fill="none"
            className="animate-fadeInScale"
          />
        )}

        {wrongCount >= 2 && (
          <line
            x1="120"
            y1="70"
            x2="120"
            y2="150"
            stroke="#ff4444"
            strokeWidth="3"
            className="animate-drawLine"
          />
        )}

        {wrongCount >= 3 && (
          <line
            x1="120"
            y1="90"
            x2="90"
            y2="120"
            stroke="#ff4444"
            strokeWidth="3"
            className="animate-drawLine"
          />
        )}

        {wrongCount >= 4 && (
          <line
            x1="120"
            y1="90"
            x2="150"
            y2="120"
            stroke="#ff4444"
            strokeWidth="3"
            className="animate-drawLine"
          />
        )}

        {wrongCount >= 5 && (
          <line
            x1="120"
            y1="150"
            x2="90"
            y2="180"
            stroke="#ff4444"
            strokeWidth="3"
            className="animate-drawLine"
          />
        )}

        {wrongCount >= 6 && (
          <line
            x1="120"
            y1="150"
            x2="150"
            y2="180"
            stroke="#ff4444"
            strokeWidth="3"
            className="animate-drawLine"
          />
        )}
      </svg>
    </div>
  );
};

const WrongLettersDisplay = ({ wrongLetters }: { wrongLetters: string[] }) => (
  <div className="flex flex-col gap-2 items-center">
    {wrongLetters.map((letter, index) => (
      <span
        key={index}
        className="bg-red-500/20 border border-red-400 rounded-full w-10 h-10 flex items-center justify-center text-red-300 text-lg font-bold animate-shake"
      >
        {letter}
      </span>
    ))}
  </div>
);

export default function GamePage() {
  const [challenge, setChallenge] = useState(getRandomChallenge());
  const [guessedLetters, setGuessedLetters] = useState(new Set<string>());
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [lives, setLives] = useState(6);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [gameState, setGameState] = useState<
    "ready" | "playing" | "won" | "lost"
  >("ready");
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

  const handleStartGame = () => {
    setGameState("playing");
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

        {gameState === "ready" && (
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

              <Link href="/metrics">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-2xl transition-transform transform hover:scale-105">
                  <p>Ver métricas</p>
                </button>
              </Link>
            </div>
          </div>
        )}

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
