export const HangmanDrawing = ({ wrongCount }: { wrongCount: number }) => {
  const dead = wrongCount >= 6;

  return (
    <div className="relative w-full h-full mx-auto">
      <svg viewBox="0 0 200 250" className="w-full h-full">
        {/* ── Forca ── */}
        {/* Base */}
        <line x1="10" y1="235" x2="190" y2="235" stroke="#8B5E3C" strokeWidth="6" strokeLinecap="round" />
        {/* Poste vertical */}
        <line x1="40" y1="235" x2="40" y2="15" stroke="#8B5E3C" strokeWidth="6" strokeLinecap="round" />
        {/* Viga horizontal */}
        <line x1="40" y1="15" x2="135" y2="15" stroke="#8B5E3C" strokeWidth="6" strokeLinecap="round" />
        {/* Suporte diagonal */}
        <line x1="40" y1="70" x2="85" y2="15" stroke="#8B5E3C" strokeWidth="4" strokeLinecap="round" />
        {/* Corda */}
        <line x1="135" y1="15" x2="135" y2="38" stroke="#A0856C" strokeWidth="3" strokeLinecap="round" />
        {/* Nó da corda */}
        <ellipse cx="135" cy="40" rx="4" ry="3" fill="#A0856C" />

        {/* ── Cabeça ── */}
        {wrongCount >= 1 && (
          <g className="animate-fadeInScale">
            {/* Cabeça */}
            <circle cx="135" cy="57" r="17" fill="#FDBCB4" stroke="#E8967A" strokeWidth="1.5" />
            {/* Cabelo */}
            <path d="M118,52 Q120,40 135,40 Q150,40 152,52" fill="#5C3D1E" />

            {/* Olhos — normais ou X no erro 6 */}
            {!dead ? (
              <>
                <circle cx="129" cy="54" r="2.5" fill="#3D2B1F" />
                <circle cx="141" cy="54" r="2.5" fill="#3D2B1F" />
                <circle cx="130" cy="53" r="1" fill="white" />
                <circle cx="142" cy="53" r="1" fill="white" />
              </>
            ) : (
              <>
                {/* X olho esquerdo */}
                <line x1="126" y1="51" x2="132" y2="57" stroke="#3D2B1F" strokeWidth="2" strokeLinecap="round" />
                <line x1="132" y1="51" x2="126" y2="57" stroke="#3D2B1F" strokeWidth="2" strokeLinecap="round" />
                {/* X olho direito */}
                <line x1="138" y1="51" x2="144" y2="57" stroke="#3D2B1F" strokeWidth="2" strokeLinecap="round" />
                <line x1="144" y1="51" x2="138" y2="57" stroke="#3D2B1F" strokeWidth="2" strokeLinecap="round" />
              </>
            )}

            {/* Boca */}
            {!dead ? (
              <path d="M129,63 Q135,67 141,63" stroke="#C0706A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            ) : (
              <path d="M129,67 Q135,63 141,67" stroke="#C0706A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            )}
          </g>
        )}

        {/* ── Pescoço + Torso ── */}
        {wrongCount >= 2 && (
          <g className="animate-drawLine">
            {/* Pescoço */}
            <line x1="135" y1="74" x2="135" y2="83" stroke="#FDBCB4" strokeWidth="5" strokeLinecap="round" />
            {/* Torso — camisa */}
            <rect x="118" y="83" width="34" height="58" rx="6" fill="#4B9CD3" stroke="#3A7DB5" strokeWidth="1.5" />
            {/* Detalhe da camisa — gola */}
            <path d="M127,83 L135,92 L143,83" stroke="#3A7DB5" strokeWidth="1.5" fill="none" />
          </g>
        )}

        {/* ── Braço esquerdo ── */}
        {wrongCount >= 3 && (
          <g className="animate-drawLine">
            {/* Ombro → cotovelo */}
            <line x1="120" y1="92" x2="103" y2="118" stroke="#FDBCB4" strokeWidth="5" strokeLinecap="round" />
            {/* Cotovelo → mão */}
            <line x1="103" y1="118" x2="96" y2="130" stroke="#FDBCB4" strokeWidth="4.5" strokeLinecap="round" />
            {/* Mão */}
            <circle cx="93" cy="133" r="4" fill="#FDBCB4" stroke="#E8967A" strokeWidth="1" />
          </g>
        )}

        {/* ── Braço direito ── */}
        {wrongCount >= 4 && (
          <g className="animate-drawLine">
            {/* Ombro → cotovelo */}
            <line x1="150" y1="92" x2="167" y2="118" stroke="#FDBCB4" strokeWidth="5" strokeLinecap="round" />
            {/* Cotovelo → mão */}
            <line x1="167" y1="118" x2="174" y2="130" stroke="#FDBCB4" strokeWidth="4.5" strokeLinecap="round" />
            {/* Mão */}
            <circle cx="177" cy="133" r="4" fill="#FDBCB4" stroke="#E8967A" strokeWidth="1" />
          </g>
        )}

        {/* ── Perna esquerda ── */}
        {wrongCount >= 5 && (
          <g className="animate-drawLine">
            {/* Calça esquerda */}
            <rect x="118" y="138" width="16" height="44" rx="4" fill="#3D3D6B" stroke="#2D2D5B" strokeWidth="1" />
            {/* Canela — quase reta para baixo */}
            <line x1="126" y1="180" x2="125" y2="197" stroke="#3D3D6B" strokeWidth="5" strokeLinecap="round" />
            {/* Pé — horizontal (aponta para frente) */}
            <ellipse cx="120" cy="200" rx="9" ry="3.5" fill="#2C1E0F" />
          </g>
        )}

        {/* ── Perna direita ── */}
        {wrongCount >= 6 && (
          <g className="animate-drawLine">
            {/* Calça direita */}
            <rect x="136" y="138" width="16" height="44" rx="4" fill="#3D3D6B" stroke="#2D2D5B" strokeWidth="1" />
            {/* Canela — quase reta para baixo */}
            <line x1="144" y1="180" x2="145" y2="197" stroke="#3D3D6B" strokeWidth="5" strokeLinecap="round" />
            {/* Pé — horizontal (aponta para frente) */}
            <ellipse cx="150" cy="200" rx="9" ry="3.5" fill="#2C1E0F" />
          </g>
        )}
      </svg>
    </div>
  );
};
