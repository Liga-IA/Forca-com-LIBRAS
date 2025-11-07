/**
 * RobustScaler implementation for JavaScript
 * Replicates sklearn.preprocessing.RobustScaler behavior
 * 
 * Formula: (x - median) / IQR
 */

interface ScalerParams {
  center: number[];  // Median values
  scale: number[];   // IQR values
}

let scalerParams: ScalerParams | null = null;

/**
 * Loads scaler parameters from JSON file
 */
export async function loadScaler(): Promise<void> {
  if (scalerParams) {
    return; // Already loaded
  }

  try {
    const scalerUrl = new URL('/libras-model/scaler_params.json', window.location.origin);
    const response = await fetch(scalerUrl.href);
    
    if (!response.ok) {
      throw new Error(`Failed to load scaler: ${response.statusText}`);
    }
    
    scalerParams = await response.json();
    console.log('Scaler parameters loaded successfully');
  } catch (error) {
    console.error('Error loading scaler parameters:', error);
    throw new Error('Failed to load scaler parameters. Model may not work correctly.');
  }
}

/**
 * Applies RobustScaler transformation to features
 * Formula: (x - median) / IQR
 */
export function transformFeatures(features: number[]): number[] {
  if (!scalerParams) {
    throw new Error('Scaler not loaded. Call loadScaler() first.');
  }

  if (features.length !== scalerParams.center.length) {
    throw new Error(
      `Feature count mismatch: expected ${scalerParams.center.length}, got ${features.length}`
    );
  }

  const transformed = features.map((value, index) => {
    const center = scalerParams!.center[index];
    const scale = scalerParams!.scale[index];
    
    // Avoid division by zero
    if (scale === 0) {
      return 0;
    }
    
    return (value - center) / scale;
  });

  return transformed;
}

