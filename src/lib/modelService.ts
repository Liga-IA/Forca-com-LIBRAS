import * as tf from '@tensorflow/tfjs';
import { NormalizedLandmark } from '@mediapipe/tasks-vision';
import { prepareFeatures } from './featureEngineering';
import { loadScaler, transformFeatures } from './scalerService';

// 1. Definição das Classes (em ordem alfabética, como o LabelEncoder do Python fez)
const LIBRAS_CLASSES = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'
];

// 2. Carregador do Modelo
let model: tf.GraphModel | null = null;
let scalerLoaded = false;

export async function loadModel(): Promise<void> {
  if (model && scalerLoaded) {
    console.log('Modelo e scaler já carregados.');
    return;
  }
  
  try {
    // Carregar scaler primeiro
    if (!scalerLoaded) {
      await loadScaler();
      scalerLoaded = true;
    }
    
    // Usa caminho relativo para evitar depender de window em SSR
    const modelPath = '/libras-model/model.json';
    console.log(`Carregando modelo de: ${modelPath}`);
    model = await tf.loadGraphModel(modelPath);
    console.log('Modelo carregado com sucesso!');

    // Opcional: "Aquecer" o modelo para otimizar a primeira inferência
    // O modelo melhorado espera 84 features (63 originais + 21 derivadas)
    tf.tidy(() => {
      const warmupTensor = tf.zeros([1, 84]);
      model?.predict(warmupTensor);
    });
  } catch (error) {
    console.error('Erro ao carregar o modelo:', error);
    throw new Error('Não foi possível carregar o modelo de detecção de Libras.');
  }
}

// 3. Função de Predição
export async function predictSign(landmarks: NormalizedLandmark[]): Promise<string | null> {
  if (!model || !scalerLoaded) {
    console.warn('Modelo ou scaler ainda não foram carregados.');
    await loadModel(); // Tenta carregar se ainda não estiver pronto
    if (!model || !scalerLoaded) return null; // Se ainda assim falhar, retorna nulo
  }
  
  if (landmarks.length !== 21) {
    return null; // O modelo espera exatamente 21 landmarks
  }

  try {
    // 1. Extrair features (63 originais + 21 derivadas = 84 features)
    const features = prepareFeatures(landmarks);
    
    // 2. Aplicar normalização (RobustScaler)
    const normalizedFeatures = transformFeatures(features);
    
    // 3. Criar tensor de entrada
    const inputTensor = tf.tensor2d([normalizedFeatures]);

    // 4. Executa a predição
    const prediction = model.predict(inputTensor) as tf.Tensor;
    const predictionData = await prediction.data();
    
    // 5. Encontra o índice com a maior probabilidade
    const maxProbIndex = predictionData.indexOf(Math.max(...predictionData));

    // 6. Limpa os tensores da memória
    inputTensor.dispose();
    prediction.dispose();

    // 7. Retorna a letra correspondente
    if (maxProbIndex >= 0 && maxProbIndex < LIBRAS_CLASSES.length) {
      return LIBRAS_CLASSES[maxProbIndex];
    }

    return null;
  } catch (error) {
    console.error('Erro durante predição:', error);
    return null;
  }
}
