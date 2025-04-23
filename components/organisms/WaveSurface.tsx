"use client";

import { Suspense, lazy, useState, useRef, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../atoms/Loader";

// Chargement différé des composants lourds
const WavingGrid = lazy(() => import("./WavingGrid"));
const CameraController = lazy(() => import("./CameraController"));

// Composant de chargement simple
const CanvasLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
  </div>
);

// Composant pour le conteneur statique
interface StaticContainerProps {
  children: ReactNode;
}

const StaticContainer = ({ children }: StaticContainerProps) => (
  <div 
    className="absolute inset-0 w-full h-full z-10"
    style={{ width: '100vw', height: '100vh' }}
  >
    {children}
  </div>
);

// Composant pour le Canvas avec chargement différé
const DynamicCanvas = () => {
  const [canvasReady, setCanvasReady] = useState(false);

  const handleLoaderComplete = () => {
    setTimeout(() => setCanvasReady(true), 200);
  };

  return (
    <>
      <AnimatePresence>
        {!canvasReady && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-background z-20"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Loader duration={1500} onComplete={handleLoaderComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        camera={{ fov: 30, near: 0.1, far: 1000 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <CameraController />
          <WavingGrid />
        </Suspense>
      </Canvas>
    </>
  );
};

// Composant principal avec rendu hybride
const WaveSurface = () => {
  return (
    <StaticContainer>
      <Suspense fallback={<CanvasLoader />}>
        <DynamicCanvas />
      </Suspense>
    </StaticContainer>
  );
};

export default WaveSurface; 