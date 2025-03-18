"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  duration?: number; // Durée en ms pour atteindre 100%
  onComplete?: () => void; // Callback appelé lorsque le chargement est terminé
}

const Loader = ({ duration = 2000, onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simuler la progression du chargement
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(newProgress);
      
      if (newProgress < 100) {
        // Continuer à mettre à jour la progression
        requestAnimationFrame(updateProgress);
      } else if (onComplete) {
        // Appeler le callback lorsque le chargement est terminé
        onComplete();
      }
    };
    
    // Démarrer l'animation
    const animationId = requestAnimationFrame(updateProgress);
    
    // Nettoyer l'animation lors du démontage
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [duration, onComplete]);
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-64 relative">
        {/* Texte du pourcentage */}
        <div className="text-foreground text-sm font-medium mb-2 text-center">
          {progress}%
        </div>
        
        {/* Conteneur de la barre de progression */}
        <div className="h-1 w-full bg-foreground/10 rounded-full overflow-hidden">
          {/* Barre de progression animée */}
          <motion.div 
            className="h-full bg-foreground rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
