"use client";
import { AdviseModal } from "@/components/adviseModal";
import GameCanvas from "@/components/GameCanvas";
import GameLostScreen from "@/components/GameLostScreen";
import GameWonScreen from "@/components/GameWonScreen";
import { HangmanDrawing } from "@/components/hangManDrawing";
import { WordDisplay } from "@/components/wordDisplay";
import { WrongLettersDisplay } from "@/components/wrongLattersDisplay";
import { challenges, type Category } from "@/utils/dictionary";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { saveGame } from "../actions";

const CATEGORY_LABELS: Record<Category | "todas", string> = {
  todas: "Todas",
  animais: "Animais",
  natureza: "Natureza",
  astronomia: "Astronomia",
  tecnologia: "Tecnologia",
  transporte: "Transporte",
  cotidiano: "Cotidiano",
};

const CATEGORY_ICONS: Record<Category | "todas", string> = {
  todas: "🎮",
  animais: "🐾",
  natureza: "🌿",
  astronomia: "🌌",
  tecnologia: "💻",
  transporte: "🚗",
  cotidiano: "🏠",
};

function getRandomChallenge(category: string | null) {
  const pool =
    category && category !== "todas"
      ? challenges.filter((c) => c.category === category)
      : challenges;
  const safePool = pool.length > 0 ? pool : challenges;
  return safePool[Math.floor(Math.random() * safePool.length)];
}

export function GamePage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [challenge, setChallenge] = useState(() => getRandomChallenge(category));
  const [guessedLetters, setGuessedLetters] = useState(new Set<string>());
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [lives, setLives] = useState(6);
  const [score, setScore] = useState(0);
  const [letterPoints, setLetterPoints] = useState(0);
  const [combo, setCombo] = useState(0);
  const [initAdviseModal, setInitAdviseModal] = useState(true);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [realTimeDetectedSign, setRealTimeDetectedSign] = useState<string | null>(null);
  const [stabilityProgress, setStabilityProgress] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const gameEndSaved = useRef(false);

  const handlePlayAgain = () => {
    setChallenge(getRandomChallenge(category));
    setGuessedLetters(new Set<string>());
    setWrongLetters([]);
    setLives(6);
    setScore(0);
    setLetterPoints(0);
    setCombo(0);
    setGameState("playing");
    setShowParticles(false);
    setCameraError(null);
    gameEndSaved.current = false;
  };

  const handleCameraReady = useCallback(() => {
    setInitAdviseModal(false);
  }, []);

  const handleCameraError = useCallback(
    (type: "permission-denied" | "no-camera" | "unknown") => {
      setInitAdviseModal(false);
      if (type === "permission-denied") {
        setCameraError(
          "Permissão de câmera negada. Clique no ícone de câmera na barra de endereços e permita o acesso.",
        );
      } else if (type === "no-camera") {
        setCameraError(
          "Nenhuma câmera encontrada. Conecte uma câmera e recarregue a página.",
        );
      } else {
        setCameraError(
          "Não foi possível acessar a câmera. Recarregue a página e tente novamente.",
        );
      }
    },
    [],
  );

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
        setLetterPoints((prev) => prev + points);
        setCombo((prev) => prev + 1);
        setShowParticles(true);
        setTimeout(() => setShowParticles(false), 1000);
      } else {
        setWrongLetters((prev) => [...prev, sign]);
        setLives((prevLives) => prevLives - 1);
        setCombo(0);
      }
    },
    [gameState, guessedLetters, wrongLetters, challenge.word, combo],
  );

  useEffect(() => {
    if (gameState !== "playing") return;
    if (lives <= 0) { setGameState("lost"); return; }
    const allLettersGuessed = challenge.word
      .split("")
      .every((letter) => guessedLetters.has(letter));
    if (allLettersGuessed && guessedLetters.size > 0) {
      setGameState("won");
      setScore((prev) => prev + lives * 50 + combo * 25);
    }
  }, [lives, guessedLetters, challenge.word, gameState, combo]);

  useEffect(() => {
    if (gameState === "playing") return;
    if (gameEndSaved.current) return;
    gameEndSaved.current = true;
    saveGame(gameState === "won" ? "won" : "lost");
  }, [gameState]);

  const categoryKey = (category ?? "todas") as Category | "todas";

  return (
    <main className="h-screen flex flex-col overflow-hidden text-white relative">
      <AdviseModal isOpen={initAdviseModal} />
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-800/20 rounded-full filter blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-800/20 rounded-full filter blur-3xl animate-float-delayed pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 px-3 pt-3 flex-shrink-0">
        <header className="flex flex-row justify-between items-center bg-slate-800/30 backdrop-blur rounded-2xl px-5 h-[72px]">
          <div className="flex items-center gap-3">
            <Image src="/liga_logo.png" alt="Logo da Liga" width={48} height={48} className="rounded-full" />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient leading-none">
                Forca LIBRAS
              </h1>
              <span className="text-xs text-slate-400">
                {CATEGORY_ICONS[categoryKey]} {CATEGORY_LABELS[categoryKey]}
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-5 py-1.5 flex items-center gap-2">
            <span className="text-base font-bold">✨ {score}</span>
            {combo > 1 && (
              <span className="text-xs bg-white/20 rounded-full px-2 py-0.5">
                Combo x{combo}
              </span>
            )}
          </div>
        </header>
      </div>

      {/* Telas de fim de jogo */}
      {gameState === "won" && (
        <div className="relative z-10 flex-1 flex justify-center items-center p-4">
          <GameWonScreen
            score={score}
            word={challenge.word}
            letterPoints={letterPoints}
            winBonus={lives * 50}
            comboBonus={combo * 25}
            onPlayAgain={handlePlayAgain}
          />
        </div>
      )}

      {gameState === "lost" && (
        <div className="relative z-10 flex-1 flex justify-center items-center p-4">
          <GameLostScreen word={challenge.word} onPlayAgain={handlePlayAgain} />
        </div>
      )}

      {/* Área do jogo */}
      {gameState === "playing" && (
        <div className="relative z-10 flex-1 min-h-0 grid lg:grid-cols-[5fr_3fr_2fr] gap-3 p-3 overflow-hidden">

          {/* Coluna 1 — câmera + palavra */}
          <div className="flex flex-col gap-3 min-h-0">
            <div className="flex-1 min-h-0 bg-slate-800/40 backdrop-blur rounded-2xl border border-slate-600/50 overflow-hidden shadow-2xl">
              <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900">
                <GameCanvas
                  onSignDetected={handleSignDetected}
                  onRealTimeSignDetected={handleRealTimeSignDetected}
                  onReady={handleCameraReady}
                  onStabilityProgress={setStabilityProgress}
                  onCameraError={handleCameraError}
                />

                {cameraError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-xl p-6 text-center z-10">
                    <div className="space-y-4">
                      <span className="text-4xl">📷</span>
                      <p className="text-white text-sm leading-relaxed max-w-xs">{cameraError}</p>
                      <button
                        onClick={() => window.location.reload()}
                        className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                      >
                        Recarregar página
                      </button>
                    </div>
                  </div>
                )}

                {!cameraError && (
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur rounded-lg p-2 min-w-[140px]">
                    <p className="text-white text-sm font-medium mb-1">
                      Sinal:{" "}
                      <span className={`text-base font-bold ${realTimeDetectedSign ? "text-cyan-400" : "text-gray-400"}`}>
                        {realTimeDetectedSign || "Aguardando..."}
                      </span>
                    </p>
                    {realTimeDetectedSign && stabilityProgress > 0 && stabilityProgress < 1 && (
                      <div className="w-full bg-slate-700 rounded-full h-1.5">
                        <div
                          className="bg-cyan-400 h-1.5 rounded-full transition-all duration-75"
                          style={{ width: `${stabilityProgress * 100}%` }}
                        />
                      </div>
                    )}
                  </div>
                )}

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

            <div className="flex-shrink-0 bg-slate-800/40 backdrop-blur rounded-2xl p-4 text-center">
              <WordDisplay
                word={challenge.word}
                guessedLetters={guessedLetters}
                wrongGuesses={wrongLetters}
              />
              <div className="mt-2 text-slate-400 text-sm">
                Progresso: {guessedLetters.size}/{new Set(challenge.word.split("")).size} letras
              </div>
            </div>
          </div>

          {/* Coluna 2 — imagem + dica */}
          <div className="flex flex-col min-h-0 bg-slate-800/40 backdrop-blur rounded-2xl p-3 border border-slate-600/50">
            <div className="flex-1 min-h-0 bg-slate-700/50 rounded-xl overflow-hidden mb-3">
              <Image
                width={600}
                height={450}
                src={challenge.image}
                alt={challenge.description}
                className="w-full h-full object-contain transition-transform hover:scale-110"
              />
            </div>
            <div className="flex-shrink-0 space-y-2">
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                challenge.difficulty === "easy"
                  ? "bg-green-500/20 text-green-300"
                  : challenge.difficulty === "medium"
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-red-500/20 text-red-300"
              }`}>
                {challenge.difficulty === "easy" ? "🟢 Fácil" : challenge.difficulty === "medium" ? "🟡 Médio" : "🔴 Difícil"}
              </span>
              <p className="text-slate-200 text-center text-xl leading-snug font-medium">
                {challenge.description}
              </p>
            </div>
          </div>

          {/* Coluna 3 — forca */}
          <div className="flex flex-col min-h-0">
            <div className="flex-1 bg-slate-800/40 backdrop-blur rounded-2xl p-4 border border-slate-600/50 flex flex-col">
              <h3 className="text-sm font-semibold text-center mb-3 text-slate-300 uppercase tracking-wide">
                Situação
              </h3>
              <div className="flex-1 flex justify-center items-center gap-x-4">
                <HangmanDrawing wrongCount={6 - lives} />
                {wrongLetters.length > 0 && (
                  <WrongLettersDisplay wrongLetters={wrongLetters} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
