export const WrongLettersDisplay = ({
  wrongLetters,
}: {
  wrongLetters: string[];
}) => (
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
