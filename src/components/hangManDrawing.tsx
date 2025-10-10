export const HangmanDrawing = ({ wrongCount }: { wrongCount: number }) => {
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
