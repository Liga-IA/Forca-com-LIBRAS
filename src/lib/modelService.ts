
import * as tf from '@tensorflow/tfjs';
import { NormalizedLandmark } from '@mediapipe/tasks-vision';

// 1. Definição das Classes (em ordem alfabética, como o LabelEncoder do Python fez)
const LIBRAS_CLASSES = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'
];

// 2. Carregador do Modelo
let model: tf.GraphModel | null = null;

export async function loadModel(): Promise<void> {
  if (model) {
    console.log('Modelo já carregado.');
    return;
  }
  try {
    // Constrói a URL absoluta para o modelo
    const modelUrl = new URL('/libras-model/model.json', window.location.origin);
    console.log(`Carregando modelo de: ${modelUrl.href}`);
    model = await tf.loadGraphModel(modelUrl.href);
    console.log('Modelo carregado com sucesso!');

    // Opcional: "Aquecer" o modelo para otimizar a primeira inferência
    tf.tidy(() => {
      const warmupTensor = tf.zeros([1, 63]);
      model?.predict(warmupTensor);
    });
  } catch (error) {
    console.error('Erro ao carregar o modelo:', error);
    throw new Error('Não foi possível carregar o modelo de detecção de Libras.');
  }
}

// 3. Função de Predição
export async function predictSign(landmarks: NormalizedLandmark[]): Promise<string | null> {
  if (!model) {
    console.warn('Modelo ainda não foi carregado.');
    await loadModel(); // Tenta carregar se ainda não estiver pronto
    if (!model) return null; // Se ainda assim falhar, retorna nulo
  }
  if (landmarks.length !== 21) {
    return null; // O modelo espera exatamente 21 landmarks
  }

  // Pré-processamento dos landmarks
  const inputArray = landmarks.flatMap(lm => [lm.x, lm.y, lm.z]);
  const inputTensor = tf.tensor2d([inputArray]);

  // Executa a predição
  const prediction = model.predict(inputTensor) as tf.Tensor;
  const predictionData = await prediction.data();
  
  // Encontra o índice com a maior probabilidade
  const maxProbIndex = predictionData.indexOf(Math.max(...predictionData));

  // Limpa os tensores da memória
  inputTensor.dispose();
  prediction.dispose();

  // Retorna a letra correspondente
  if (maxProbIndex >= 0 && maxProbIndex < LIBRAS_CLASSES.length) {
    return LIBRAS_CLASSES[maxProbIndex];
  }

  return null;
}
