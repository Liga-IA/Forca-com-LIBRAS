import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import { predictSign as predictSignFromModel, loadModel } from './modelService';

// Carrega o modelo assim que este módulo for importado
loadModel().catch(console.error);

/**
 * Verifica se os landmarks da mão formam a letra 'R' em LIBRAS.
 * A principal característica é os dedos indicador e médio cruzados.
 * @param landmarks - Um array de 21 landmarks da mão.
 * @returns `true` se o gesto for 'R', `false` caso contrário.
 */
function isSignR(landmarks: NormalizedLandmark[]): boolean {
    const indexTip = landmarks[8];
    const middleTip = landmarks[12];
    const indexPip = landmarks[6];
    const middlePip = landmarks[10];
    const ringPip = landmarks[14];
    const pinkyPip = landmarks[18];

    // Condição 1: Dedos indicador e médio estão levantados (pontas acima das juntas)
    const areFingersUp = indexTip.y < indexPip.y && middleTip.y < middlePip.y;

    // Condição 2: Dedos anelar e mínimo estão dobrados (pontas abaixo das juntas)
    const areFingersDown = landmarks[16].y > ringPip.y && landmarks[20].y > pinkyPip.y;

    // Condição 3: Dedos indicador e médio estão cruzados.
    // A distância horizontal entre as pontas dos dedos deve ser muito pequena.
    // Este valor de 0.03 é um limiar experimental e pode precisar de ajuste.
    const areFingersCrossed = Math.abs(indexTip.x - middleTip.x) < 0.03;

    return areFingersUp && areFingersDown && areFingersCrossed;
}

/**
 * Verifica se os landmarks da mão formam a letra 'T' em LIBRAS.
 * A principal característica é o polegar entre o dedo indicador e o médio.
 * @param landmarks - Um array de 21 landmarks da mão.
 * @returns `true` se o gesto for 'T', `false` caso contrário.
 */
function isSignT(landmarks: NormalizedLandmark[]): boolean {
    const thumbTip = landmarks[4];
    const indexPip = landmarks[6];
    const middlePip = landmarks[10];
    const indexMcp = landmarks[5];
    const middleMcp = landmarks[9];

    // Condição 1: Polegar está "escondido" atrás ou entre os dedos.
    // Sua ponta deve estar abaixo da junta do meio do dedo indicador.
    const isThumbTucked = thumbTip.y > indexPip.y;

    // Condição 2: A ponta do polegar está horizontalmente entre o início dos dedos indicador e médio.
    const isThumbBetween = (thumbTip.x > indexMcp.x && thumbTip.x < middleMcp.x) || (thumbTip.x < indexMcp.x && thumbTip.x > middleMcp.x);

    // Condição 3: Dedo indicador está levantado.
    const isIndexUp = landmarks[8].y < indexPip.y;
    
    // Condição 4: Dedo médio, anelar e mínimo estão dobrados.
    const areOtherFingersDown = landmarks[12].y > middlePip.y &&
                                landmarks[16].y > landmarks[14].y &&
                                landmarks[20].y > landmarks[18].y;


    return isThumbTucked && isThumbBetween && isIndexUp && areOtherFingersDown;
}

/**
 * Verifica se os landmarks da mão formam a letra 'N' em LIBRAS.
 * A principal característica são os dedos indicador e médio apontando para baixo.
 * Esta versão é mais estrita para diferenciar do 'P'.
 * @param landmarks - Um array de 21 landmarks da mão.
 * @returns `true` se o gesto for 'N', `false` caso contrário.
 */
function isSignN(landmarks: NormalizedLandmark[]): boolean {
    const thumbTip = landmarks[4];
    const indexTip = landmarks[8];
    const middleTip = landmarks[12];
    const ringTip = landmarks[16];
    const pinkyTip = landmarks[20];

    const indexMcp = landmarks[5];
    const middleMcp = landmarks[9];
    const ringMcp = landmarks[13];
    const pinkyMcp = landmarks[17];

    const indexPip = landmarks[6];
    const middlePip = landmarks[10];

    // Condição 1: Dedos indicador e médio estão apontando para baixo.
    // As pontas (8, 12) devem estar abaixo das juntas PIP (6, 10).
    const areMainFingersDown = indexTip.y > indexPip.y && middleTip.y > middlePip.y;

    // Condição 2: Dedos anelar e mínimo estão dobrados/fechados.
    // As pontas (16, 20) devem estar acima das juntas MCP (13, 17).
    const areOtherFingersClosed = ringTip.y < ringMcp.y && pinkyTip.y < pinkyMcp.y;

    // Condição 3: Dedos indicador e médio estão próximos um do outro.
    const areFingersTogether = Math.abs(indexTip.x - middleTip.x) < 0.05; // Limiar experimental

    // Condição 4 (NOVA): Polegar não está entre os dedos indicador e médio (diferenciação de 'P').
    // Verifica se a ponta do polegar está à esquerda do dedo indicador ou à direita do dedo médio.
    const isThumbNotBetween = thumbTip.x < indexMcp.x || thumbTip.x > middleMcp.x;

    // Condição 5 (NOVA): Dedos indicador e médio estão relativamente retos e verticais.
    // A diferença no eixo X entre a ponta e a base do dedo deve ser pequena.
    const isIndexVertical = Math.abs(indexTip.x - indexMcp.x) < 0.04;
    const isMiddleVertical = Math.abs(middleTip.x - middleMcp.x) < 0.04;


    return areMainFingersDown && areOtherFingersClosed && areFingersTogether && isThumbNotBetween && isIndexVertical && isMiddleVertical;
}


/**
 * Detecta o sinal de Libras a partir dos landmarks da mão.
 * Primeiro, verifica regras hardcoded para gestos específicos ('R', 'T', 'N').
 * Se nenhuma regra corresponder, utiliza o modelo de IA como fallback.
 * @param landmarks - Um array de 21 landmarks da mão.
 * @returns Uma string com a letra detectada ou null se nenhum sinal for reconhecido.
 */
export async function detectSign(landmarks: NormalizedLandmark[]): Promise<string | null> {
    if (!landmarks || landmarks.length === 0) {
        return null;
    }

    // **Lógica Hardcoded (Prioridade 1)**
    if (isSignR(landmarks)) {
        return 'R';
    }
    if (isSignT(landmarks)) {
        return 'T';
    }
    if (isSignN(landmarks)) {
        return 'N';
    }

    // **Fallback para o Modelo de IA (Prioridade 2)**
    const sign = await predictSignFromModel(landmarks);
    
    return sign;
}