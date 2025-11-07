import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import { predictSign as predictSignFromModel } from './modelService';

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
    const areFingersCrossed = Math.abs(indexTip.x - middleTip.x) < 0.03;

    return areFingersUp && areFingersDown && areFingersCrossed;
}

/**
 * Verifica se os landmarks da mão formam a letra 'N' em LIBRAS.
 * A principal característica são os dedos indicador e médio apontando para baixo.
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

    const areMainFingersDown = indexTip.y > indexPip.y && middleTip.y > middlePip.y;
    const areOtherFingersClosed = ringTip.y < ringMcp.y && pinkyTip.y < pinkyMcp.y;
    const areFingersTogether = Math.abs(indexTip.x - middleTip.x) < 0.05;
    const isThumbNotBetween = thumbTip.x < indexMcp.x || thumbTip.x > middleMcp.x;
    const isIndexVertical = Math.abs(indexTip.x - indexMcp.x) < 0.04;
    const isMiddleVertical = Math.abs(middleTip.x - middleMcp.x) < 0.04;

    return areMainFingersDown && areOtherFingersClosed && areFingersTogether && isThumbNotBetween && isIndexVertical && isMiddleVertical;
}

/**
 * Função heurística para diferenciar 'F' e 'T' com base na descrição do usuário.
 * Foca na posição horizontal (eixo X) do polegar.
 * @param landmarks - Os 21 landmarks da mão.
 * @returns 'F' ou 'T'.
 */
function differentiateFT(landmarks: NormalizedLandmark[]): 'F' | 'T' {
    const thumbTip = landmarks[4];
    const indexMcp = landmarks[5];    // Junta base do indicador
    const middleMcp = landmarks[9];   // Junta base do médio

    // Para lidar com mão esquerda ou direita, encontramos os limites esquerdo e direito
    // do espaço entre os dedos indicador e médio.
    const leftBoundary = Math.min(indexMcp.x, middleMcp.x);
    const rightBoundary = Math.max(indexMcp.x, middleMcp.x);

    // Se a ponta do polegar (thumbTip) está horizontalmente ENTRE as bases
    // dos dedos indicador e médio, é um 'T' (polegar para dentro).
    if (thumbTip.x > leftBoundary && thumbTip.x < rightBoundary) {
        return 'T';
    }

    // Caso contrário, o polegar está para fora, caracterizando um 'F'.
    return 'F';
}

/**
 * Detecta o sinal de Libras a partir dos landmarks da mão.
 * @param landmarks - Um array de 21 landmarks da mão.
 * @returns Uma string com a letra detectada ou null se nenhum sinal for reconhecido.
 */
export async function detectSign(landmarks: NormalizedLandmark[]): Promise<string | null> {
    if (!landmarks || landmarks.length === 0) {
        return null;
    }

    // **Lógica Hardcoded para sinais não-confusos (Prioridade 1)**
    if (isSignR(landmarks)) {
        return 'R';
    }
    if (isSignN(landmarks)) {
        return 'N';
    }

    // **Modelo de IA (Prioridade 2)**
    const modelPrediction = await predictSignFromModel(landmarks);

    // **Lógica de Desambiguação para F e T (Prioridade 3)**
    if (modelPrediction === 'F' || modelPrediction === 'T') {
        // Se o modelo previu 'F' ou 'T', usamos nossa nova heurística para a decisão final.
        return differentiateFT(landmarks);
    }
    
    // Para todas as outras letras, confiamos no modelo.
    return modelPrediction;
}