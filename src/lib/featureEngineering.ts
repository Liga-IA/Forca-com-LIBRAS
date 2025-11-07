/**
 * Feature Engineering functions for LIBRAS gesture recognition
 * Replicates the geometric feature extraction from train_improved_model.py
 * 
 * Features extracted:
 * - 63 original features (21 landmarks * 3 coordinates)
 * - 21 derived features (distances, angles, hand dimensions)
 * Total: 84 features
 */

import { NormalizedLandmark } from '@mediapipe/tasks-vision';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

/**
 * Calculates Euclidean distance between two 3D points
 */
function calculateDistance(p1: Point3D, p2: Point3D): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const dz = p1.z - p2.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Calculates angle between three points (p2 is the vertex)
 */
function calculateAngle(p1: Point3D, p2: Point3D, p3: Point3D): number {
  // Vector from p2 to p1
  const v1 = {
    x: p1.x - p2.x,
    y: p1.y - p2.y,
    z: p1.z - p2.z
  };
  
  // Vector from p2 to p3
  const v2 = {
    x: p3.x - p2.x,
    y: p3.y - p2.y,
    z: p3.z - p2.z
  };
  
  // Dot product
  const dot = v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  
  // Magnitudes
  const mag1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y + v1.z * v1.z);
  const mag2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y + v2.z * v2.z);
  
  // Avoid division by zero
  if (mag1 === 0 || mag2 === 0) return 0;
  
  // Cosine of angle
  const cosAngle = Math.max(-1, Math.min(1, dot / (mag1 * mag2)));
  
  return Math.acos(cosAngle);
}

/**
 * Extracts geometric features from hand landmarks
 * Returns 21 additional features
 */
function extractGeometricFeatures(landmarks: NormalizedLandmark[]): number[] {
  const features: number[] = [];
  
  // Convert landmarks to 3D points
  const points: Point3D[] = landmarks.map(lm => ({ x: lm.x, y: lm.y, z: lm.z }));
  
  // Reference point: wrist (landmark 0)
  const wrist = points[0];
  
  // 1. Distances from finger tips to wrist (5 features)
  const fingerTips = [4, 8, 12, 16, 20]; // Thumb, Index, Middle, Ring, Pinky
  for (const tipIdx of fingerTips) {
    const dist = calculateDistance(points[tipIdx], wrist);
    features.push(dist);
  }
  
  // 2. Distances between adjacent finger tips (4 features)
  for (let i = 0; i < fingerTips.length - 1; i++) {
    const dist = calculateDistance(points[fingerTips[i]], points[fingerTips[i + 1]]);
    features.push(dist);
  }
  
  // 3. Angles of finger joints (5 features)
  // For each finger: tip -> PIP -> MCP
  const fingerJoints = [
    [4, 3, 2],  // thumb
    [8, 6, 5],  // index
    [12, 10, 9], // middle
    [16, 14, 13], // ring
    [20, 18, 17]  // pinky
  ];
  
  for (const joints of fingerJoints) {
    if (joints.length === 3) {
      const angle = calculateAngle(
        points[joints[0]],
        points[joints[1]],
        points[joints[2]]
      );
      features.push(angle);
    }
  }
  
  // 4. Hand dimensions (3 features)
  const xCoords = points.map(p => p.x);
  const yCoords = points.map(p => p.y);
  const zCoords = points.map(p => p.z);
  
  const handWidth = Math.max(...xCoords) - Math.min(...xCoords);
  const handHeight = Math.max(...yCoords) - Math.min(...yCoords);
  const handDepth = Math.max(...zCoords) - Math.min(...zCoords);
  
  features.push(handWidth, handHeight, handDepth);
  
  // 5. Distances between MCP joints (base of fingers) (4 features)
  const mcpJoints = [2, 5, 9, 13, 17];
  for (let i = 0; i < mcpJoints.length - 1; i++) {
    const dist = calculateDistance(points[mcpJoints[i]], points[mcpJoints[i + 1]]);
    features.push(dist);
  }
  
  return features;
}

/**
 * Prepares input features for the improved model
 * Combines original landmarks (63) with geometric features (21) = 84 total
 */
export function prepareFeatures(landmarks: NormalizedLandmark[]): number[] {
  if (landmarks.length !== 21) {
    throw new Error(`Expected 21 landmarks, got ${landmarks.length}`);
  }
  
  // Original features: flatten landmarks [x1, y1, z1, x2, y2, z2, ...]
  const originalFeatures = landmarks.flatMap(lm => [lm.x, lm.y, lm.z]);
  
  // Geometric features
  const geometricFeatures = extractGeometricFeatures(landmarks);
  
  // Combine: original (63) + geometric (21) = 84 features
  return [...originalFeatures, ...geometricFeatures];
}

