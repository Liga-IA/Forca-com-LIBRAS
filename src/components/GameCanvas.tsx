"use client";

import { useEffect, useRef } from "react";
import { HandLandmarker, FilesetResolver, DrawingUtils } from "@mediapipe/tasks-vision";
import { detectSign } from "@/lib/signLogic";

let handLandmarker: HandLandmarker | undefined = undefined;

const STABILITY_TIME = 500; // 500ms para considerar um sinal como estável

interface GameCanvasProps {
  onSignDetected: (sign: string) => void;
  onRealTimeSignDetected: (sign: string | null) => void;
}

const GameCanvas = ({ onSignDetected, onRealTimeSignDetected }: GameCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameId = useRef<number | null>(null);

  const lastDetectedSign = useRef<string | null>(null);
  const stableSignStartTime = useRef<number>(0);
  const lastSentSign = useRef<string | null>(null);

  const onSignDetectedRef = useRef(onSignDetected);
  useEffect(() => {
    onSignDetectedRef.current = onSignDetected;
  }, [onSignDetected]);

  const onRealTimeSignDetectedRef = useRef(onRealTimeSignDetected);
  useEffect(() => {
    onRealTimeSignDetectedRef.current = onRealTimeSignDetected;
  }, [onRealTimeSignDetected]);

  const predictWebcam = () => {
    const video = videoRef.current;
    if (!video || !handLandmarker) return;

    if (video.videoWidth === 0 || video.videoHeight === 0) {
      animationFrameId.current = requestAnimationFrame(predictWebcam);
      return;
    }

    const now = performance.now();
    const results = handLandmarker.detectForVideo(video, now);

    const canvas = canvasRef.current;
    const canvasCtx = canvas?.getContext("2d");
    if (canvas && canvasCtx) {
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

        if (results.landmarks && results.landmarks.length > 0) {
            const landmarks = results.landmarks[0];
            
            (async () => {
                const detectedSign = await detectSign(landmarks);
                onRealTimeSignDetectedRef.current(detectedSign);
                const currentTime = performance.now();

                if (detectedSign) {
                  if (detectedSign !== lastDetectedSign.current) {
                    lastDetectedSign.current = detectedSign;
                    stableSignStartTime.current = currentTime;
                    lastSentSign.current = null;
                  } else {
                    if (currentTime - stableSignStartTime.current > STABILITY_TIME) {
                      if (detectedSign !== lastSentSign.current) {
                        onSignDetectedRef.current(detectedSign);
                        lastSentSign.current = detectedSign;
                      }
                    }
                  }
                } else {
                  lastDetectedSign.current = null;
                  stableSignStartTime.current = 0;
                  lastSentSign.current = null;
                }
            })();

            const drawingUtils = new DrawingUtils(canvasCtx);
            drawingUtils.drawLandmarks(landmarks, { color: "#0084ffff", lineWidth: 1, radius: 2 });
            drawingUtils.drawConnectors(landmarks, HandLandmarker.HAND_CONNECTIONS, { color: "#FFFFFF", lineWidth: 2 });
        }
        canvasCtx.restore();
    }

    animationFrameId.current = requestAnimationFrame(predictWebcam);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => predictWebcam();

    const setupMediaPipe = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
      );
      handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: `/hand_landmarker.task`,
          delegate: "GPU",
        },
        runningMode: "VIDEO",
        numHands: 1,
      });

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          video.srcObject = stream;
          video.addEventListener('loadeddata', handleLoadedData);
        });
      }
    };

    setupMediaPipe();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      const stream = video.srcObject as MediaStream;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      video.removeEventListener('loadeddata', handleLoadedData);
      video.srcObject = null;

      handLandmarker = undefined;
      lastDetectedSign.current = null;
      stableSignStartTime.current = 0;
      lastSentSign.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full h-full">
      <video 
        ref={videoRef} 
        autoPlay 
        playsInline
        className="w-full h-full object-cover transform scale-x-[-1]"
      ></video>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full absolute top-0 left-0 transform scale-x-[-1]"
      ></canvas>
    </div>
  );
};

export default GameCanvas;