export const WordDisplay = ({
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
