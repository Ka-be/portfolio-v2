"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, Canvas, useThree } from "@react-three/fiber";

// Composant pour la surface ondulante
const WavingGrid = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport, size } = useThree();
  const [peaks, setPeaks] = useState<{x: number, y: number, amplitude: number, speed: number}[]>([]);
  
  // État pour suivre la position de la souris et les perturbations
  const [mousePosition, setMousePosition] = useState<{x: number, y: number} | null>(null);
  const [mouseDisturbances, setMouseDisturbances] = useState<{x: number, y: number, startTime: number, strength: number}[]>([]);
  
  // Paramètres de la grille
  const cols = 220; // Densité doublée en largeur
  const rows = 140; // Densité doublée en hauteur
  const count = cols * rows;
  
  // Gestionnaire d'événements pour la souris
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Convertir les coordonnées de la souris en coordonnées normalisées (-1 à 1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -((event.clientY / window.innerHeight) * 2 - 1); // Inverser Y pour correspondre au système de coordonnées WebGL
      
      // Mettre à jour la position de la souris
      setMousePosition({ x, y });
      
      // Créer une nouvelle perturbation à chaque mouvement significatif
      // Limiter la fréquence des perturbations pour éviter d'en créer trop
      if (mouseDisturbances.length === 0 || 
          Date.now() - mouseDisturbances[mouseDisturbances.length - 1].startTime > 500) {
        
        // Convertir les coordonnées normalisées en coordonnées de la scène
        const sceneX = x * viewport.width;
        const sceneY = y * viewport.height;
        
        // Ajouter une nouvelle perturbation
        setMouseDisturbances(prev => [
          ...prev.slice(-3), // Garder seulement les 3 dernières perturbations pour plus de fluidité
          {
            x: sceneX,
            y: sceneY,
            startTime: Date.now(),
            strength: 0.3 + Math.random() * 0.3 // Force plus douce pour un effet plus fluide
          }
        ]);
      }
    };
    
    // Ajouter l'écouteur d'événements
    window.addEventListener('mousemove', handleMouseMove);
    
    // Nettoyer l'écouteur lors du démontage
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [viewport, mouseDisturbances]);
  
  // Créer des pics aléatoires
  useEffect(() => {
    const newPeaks = [];
    // Créer 5-8 pics aléatoires (moins de pics pour un effet plus subtil)
    const peakCount = Math.floor(Math.random() * 4) + 5;
    
    for (let i = 0; i < peakCount; i++) {
      newPeaks.push({
        x: (Math.random() - 0.5) * viewport.width * 2,
        y: (Math.random() - 0.5) * viewport.height * 2,
        amplitude: Math.random() * 10 + 5, // Amplitude plus faible pour un effet moins zoomé
        speed: Math.random() * 0.15 + 0.05
      });
    }
    
    setPeaks(newPeaks);
  }, [viewport.width, viewport.height]);
  
  // Créer la grille de points et les lignes
  useEffect(() => {
    if (!pointsRef.current || !linesRef.current) return;
    
    // Créer des positions pour les points en grille
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const opacities = new Float32Array(count);
    const randomFactors = new Float32Array(count * 4); // Pour le mouvement aléatoire
    
    // Calculer la taille des cellules pour couvrir tout l'écran avec un peu de marge
    // Réduire la largeur de la grille pour rapprocher les points
    const cellWidth = (viewport.width * 2.0) / (cols - 1);
    const cellHeight = (viewport.height * 2.0) / (rows - 1);
    
    // Créer les points en grille
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const index = i + j * cols;
        const i3 = index * 3;
        
        // Position en grille avec un léger décalage aléatoire
        positions[i3] = (i * cellWidth) - viewport.width + (Math.random() * 0.15 - 0.075) * cellWidth;
        positions[i3 + 1] = (j * cellHeight) - viewport.height + (Math.random() * 0.15 - 0.075) * cellHeight;
        positions[i3 + 2] = 0;
        
        // Taille variable (plus petite pour un effet moins zoomé et pour compenser la densité accrue)
        sizes[index] = Math.random() * 0.5 + 0.25;
        
        // Opacité variable
        opacities[index] = Math.random() * 0.4 + 0.4;
        
        // Facteurs aléatoires pour le mouvement
        const i4 = index * 4;
        randomFactors[i4] = Math.random() * 0.3 + 0.1; // Amplitude
        randomFactors[i4 + 1] = Math.random() * 0.008 + 0.001; // Fréquence
        randomFactors[i4 + 2] = Math.random() * Math.PI * 2; // Phase
        randomFactors[i4 + 3] = Math.random() * 0.2 + 0.1; // Vitesse
      }
    }
    
    // Mettre à jour la géométrie des points
    const pointGeometry = pointsRef.current.geometry;
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    pointGeometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
    pointGeometry.setAttribute('randomFactor', new THREE.BufferAttribute(randomFactors, 4));
    
    // Créer les indices pour les lignes
    const lineIndices = [];
    
    // Lignes horizontales (une ligne sur quatre pour alléger vu la densité accrue)
    for (let j = 0; j < rows; j += 4) {
      for (let i = 0; i < cols - 1; i++) {
        const index = i + j * cols;
        lineIndices.push(index, index + 1);
      }
    }
    
    // Lignes verticales (une ligne sur quatre pour alléger vu la densité accrue)
    for (let i = 0; i < cols; i += 4) {
      for (let j = 0; j < rows - 1; j++) {
        const index = i + j * cols;
        lineIndices.push(index, index + cols);
      }
    }
    
    // Mettre à jour la géométrie des lignes
    const lineGeometry = linesRef.current.geometry;
    lineGeometry.setIndex(lineIndices);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
  }, [viewport, cols, rows, count]);
  
  // Animation des points et lignes
  useFrame(({ clock }) => {
    if (!pointsRef.current || !linesRef.current || !peaks.length) return;
    
    const time = clock.getElapsedTime();
    const pointGeometry = pointsRef.current.geometry;
    const lineGeometry = linesRef.current.geometry;
    
    const positions = pointGeometry.attributes.position.array as Float32Array;
    const randomFactors = pointGeometry.attributes.randomFactor.array as Float32Array;
    
    // Mettre à jour chaque point
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const i4 = i * 4;
      
      // Position de base (sans mouvement)
      const baseX = positions[i3];
      const baseY = positions[i3 + 1];
      
      // Facteurs de mouvement pour ce point
      const amplitude = randomFactors[i4];
      const frequency = randomFactors[i4 + 1];
      const phase = randomFactors[i4 + 2];
      const speed = randomFactors[i4 + 3];
      
      // Mouvement de base - vagues océaniques (plus subtiles)
      let z = Math.sin(baseX * 0.01 + baseY * 0.01 + time * 0.2) * 1.5;
      
      // Ajouter des détails de vagues
      z += Math.sin(baseX * 0.03 - baseY * 0.02 + time * 0.3) * 0.8;
      z += Math.cos(baseX * 0.02 + baseY * 0.02 + time * 0.25) * 1;
      
      // Mouvement unique à chaque point
      z += Math.sin(time * speed + phase + baseX * frequency + baseY * frequency * 0.8) * amplitude;
      
      // Ajouter l'influence des pics aléatoires
      for (const peak of peaks) {
        const dx = baseX - peak.x;
        const dy = baseY - peak.y;
        const distSq = dx * dx + dy * dy;
        const maxDistSq = 15000; // Distance d'influence du pic
        
        if (distSq < maxDistSq) {
          // Calculer l'influence du pic (plus forte au centre)
          const influence = Math.exp(-distSq / 8000);
          
          // Ajouter un mouvement de vague qui dépend du temps
          const peakWave = Math.sin(time * peak.speed + Math.sqrt(distSq) * 0.03) * 0.5 + 0.5;
          
          // Appliquer l'influence du pic
          z += peak.amplitude * influence * peakWave;
        }
      }
      
      // Ajouter l'influence des perturbations de la souris
      for (const disturbance of mouseDisturbances) {
        const dx = baseX - disturbance.x;
        const dy = baseY - disturbance.y;
        const distSq = dx * dx + dy * dy;
        const maxDistSq = 40000; // Distance d'influence de la perturbation augmentée
        
        if (distSq < maxDistSq) {
          // Calculer le temps écoulé depuis la création de la perturbation
          const elapsedTime = (Date.now() - disturbance.startTime) / 1000;
          
          // Durée de vie plus longue pour un effet plus fluide (5 secondes)
          if (elapsedTime < 5) {
            // Calculer la distance depuis l'origine de la perturbation
            const dist = Math.sqrt(distSq);
            
            // Vitesse de propagation de l'onde plus lente pour un effet plus fluide
            const waveSpeed = 35;
            
            // Rayon de l'onde qui s'étend avec le temps
            const waveRadius = elapsedTime * waveSpeed;
            
            // Largeur de l'anneau de l'onde plus large pour un effet plus doux
            const ringWidth = 30;
            
            // Calculer l'influence de l'onde avec une fonction plus douce
            // Utiliser une fonction sinusoïdale pour un effet plus fluide
            const distFromRing = Math.abs(dist - waveRadius);
            const normalizedDist = Math.min(distFromRing / ringWidth, 1.0);
            const ringFactor = Math.cos(normalizedDist * Math.PI * 0.5);
            const smoothRingFactor = ringFactor > 0 ? ringFactor * ringFactor : 0;
            
            // Atténuation de l'amplitude avec le temps et la distance plus progressive
            const timeAttenuation = Math.pow(1.0 - elapsedTime / 5, 1.5);
            const distanceAttenuation = Math.exp(-dist / 150);
            const attenuationFactor = timeAttenuation * distanceAttenuation;
            
            // Amplitude de la perturbation plus douce
            const waveAmplitude = disturbance.strength * 12 * smoothRingFactor * attenuationFactor;
            
            // Ajouter la perturbation au mouvement
            z += waveAmplitude;
          }
        }
      }
      
      // Appliquer le mouvement (uniquement sur Z)
      positions[i3 + 2] = z;
    }
    
    // Mettre à jour les attributs
    pointGeometry.attributes.position.needsUpdate = true;
    
    // Mettre à jour les lignes avec les mêmes positions
    lineGeometry.attributes.position.needsUpdate = true;
    
    // Nettoyer les anciennes perturbations (plus de 5 secondes)
    if (mouseDisturbances.length > 0) {
      const now = Date.now();
      setMouseDisturbances(prev => prev.filter(d => now - d.startTime < 5000));
    }
  });
  
  return (
    <>
      {/* Lignes */}
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial 
          color="white" 
          transparent 
          opacity={0.06} 
          depthTest={false}
        />
      </lineSegments>
      
      {/* Points */}
      <points ref={pointsRef}>
        <bufferGeometry />
        <shaderMaterial
          transparent
          depthTest={false}
          vertexShader={`
            attribute float size;
            attribute float opacity;
            attribute vec4 randomFactor;
            
            varying float vOpacity;
            varying float vDepth;
            
            void main() {
              vOpacity = opacity;
              
              // Calculer la profondeur normalisée (0-1)
              vDepth = (position.z + 10.0) / 20.0;
              
              // Taille variable selon la profondeur
              float pointSize = size * (0.8 + vDepth * 1.2);
              
              gl_PointSize = pointSize;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying float vOpacity;
            varying float vDepth;
            
            void main() {
              // Créer un point rond avec un dégradé
              float distance = length(gl_PointCoord - vec2(0.5, 0.5));
              if (distance > 0.5) discard;
              
              // Opacité variable selon la profondeur
              float alpha = vOpacity * (0.3 + vDepth * 0.7) * (1.0 - distance * 1.5);
              
              // Couleur blanche
              gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
            }
          `}
        />
      </points>
    </>
  );
};

// Composant pour adapter la caméra
const CameraController = () => {
  const { camera, viewport, size } = useThree();
  
  useEffect(() => {
    // Fonction pour ajuster la caméra en fonction des dimensions de l'écran
    const adjustCamera = () => {
      // Calculer le ratio d'aspect de l'écran
      const aspectRatio = size.width / size.height;
      
      // Ajuster la position Y de la caméra en fonction de la hauteur de l'écran
      // Plus l'écran est petit en hauteur, plus on recule la caméra pour voir l'horizon à mi-hauteur
      const baseYPosition = -180;
      const yPosition = baseYPosition * (1 + (1 / aspectRatio) * 0.5);
      
      // Ajuster la hauteur Z de la caméra pour maintenir un angle rasant
      // Sur les écrans plus petits, on monte légèrement pour voir plus de l'océan
      const baseZPosition = 40;
      const zPosition = baseZPosition * (1 + (1 / aspectRatio) * 0.2);
      
      // Ajuster le point de visée pour que l'horizon soit à mi-hauteur
      // Sur les écrans plus petits, on vise plus haut
      const lookAtY = 30 * (1 + (1 / aspectRatio) * 0.3);
      
      // Appliquer les ajustements
      camera.position.set(0, yPosition, zPosition);
      camera.lookAt(0, lookAtY, 0);
      
      // Ajuster le champ de vision pour un effet moins zoomé sur les petits écrans
      const baseFov = 30;
      const fov = Math.min(baseFov * (1 + (1 / aspectRatio) * 0.2), 45);
      (camera as THREE.PerspectiveCamera).fov = fov;
      
      camera.updateProjectionMatrix();
    };
    
    // Ajuster la caméra immédiatement
    adjustCamera();
    
    // Ajouter un écouteur de redimensionnement pour ajuster la caméra quand la taille de l'écran change
    window.addEventListener('resize', adjustCamera);
    
    // Nettoyer l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener('resize', adjustCamera);
    };
  }, [camera, size, viewport]);
  
  return null;
};

// Composant principal
const WaveSurface = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-10">
      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]} // Optimisation pour les écrans haute résolution
        camera={{ fov: 30, near: 0.1, far: 1000 }}
        style={{ width: '100%', height: '100%' }}
      >
        <CameraController />
        <WavingGrid />
      </Canvas>
    </div>
  );
};

export default WaveSurface; 