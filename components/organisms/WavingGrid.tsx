"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

interface WavingGridProps {
  isMobile?: boolean;
}

const WavingGrid = ({ isMobile }: WavingGridProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport } = useThree();
  const [peaks, setPeaks] = useState<{x: number, y: number, amplitude: number, speed: number}[]>([]);
  const [foregroundColor, setForegroundColor] = useState<string>('');
  
  const [mouseDisturbances, setMouseDisturbances] = useState<{x: number, y: number, startTime: number, strength: number}[]>([]);
  
  const lastMouseMoveTime = useRef<number>(0);
  const throttleDelay = 100;
  
  const cols = isMobile ? 110 : 220;
  const rows = isMobile ? 70 : 140;
  const count = cols * rows;
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseMoveTime.current < throttleDelay) return;
      
      lastMouseMoveTime.current = now;
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -((event.clientY / window.innerHeight) * 2 - 1);
      
      if (mouseDisturbances.length === 0 || now - mouseDisturbances[mouseDisturbances.length - 1].startTime > 800) {
        const sceneX = x * viewport.width;
        const sceneY = y * viewport.height;
        
        setMouseDisturbances(prev => [
          ...prev.slice(-2),
          {
            x: sceneX,
            y: sceneY,
            startTime: now,
            strength: 0.25 + Math.random() * 0.2
          }
        ]);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [viewport, mouseDisturbances]);
  
  useEffect(() => {
    const newPeaks = [];
    const peakCount = Math.floor(Math.random() * 4) + 5;
    
    for (let i = 0; i < peakCount; i++) {
      newPeaks.push({
        x: (Math.random() - 0.5) * viewport.width * 2,
        y: (Math.random() - 0.5) * viewport.height * 2,
        amplitude: Math.random() * 12 + 5,
        speed: Math.random() * 0.15 + 0.05
      });
    }
    
    setPeaks(newPeaks);
  }, [viewport.width, viewport.height]);
  
  useEffect(() => {
    if (!pointsRef.current || !linesRef.current) return;
    
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const opacities = new Float32Array(count);
    const randomFactors = new Float32Array(count * 4);
    
    const cellWidth = (viewport.width * 2.0) / (cols - 1);
    const cellHeight = (viewport.height * 2.0) / (rows - 1);
    
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        const index = i + j * cols;
        const i3 = index * 3;
        
        positions[i3] = (i * cellWidth) - viewport.width + (Math.random() * 0.15 - 0.075) * cellWidth;
        positions[i3 + 1] = (j * cellHeight) - viewport.height + (Math.random() * 0.15 - 0.075) * cellHeight;
        positions[i3 + 2] = 0;
        
        sizes[index] = Math.random() * 0.5 + 0.25;
        opacities[index] = Math.random() * 0.45 + 0.45;
        
        const i4 = index * 4;
        randomFactors[i4] = Math.random() * 0.3 + 0.1;
        randomFactors[i4 + 1] = Math.random() * 0.008 + 0.001;
        randomFactors[i4 + 2] = Math.random() * Math.PI * 2;
        randomFactors[i4 + 3] = Math.random() * 0.2 + 0.1;
      }
    }
    
    const pointGeometry = pointsRef.current.geometry;
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    pointGeometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
    pointGeometry.setAttribute('randomFactor', new THREE.BufferAttribute(randomFactors, 4));
    
    const lineIndices = [];
    
    for (let j = 0; j < rows; j += 4) {
      for (let i = 0; i < cols - 1; i++) {
        const index = i + j * cols;
        lineIndices.push(index, index + 1);
      }
    }
    
    for (let i = 0; i < cols; i += 4) {
      for (let j = 0; j < rows - 1; j++) {
        const index = i + j * cols;
        lineIndices.push(index, index + cols);
      }
    }
    
    const lineGeometry = linesRef.current.geometry;
    lineGeometry.setIndex(lineIndices);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  }, [viewport, cols, rows, count]);
  
  useFrame(({ clock }) => {
    if (!pointsRef.current || !linesRef.current || !peaks.length) return;
    
    const time = clock.getElapsedTime();
    const pointGeometry = pointsRef.current.geometry;
    const lineGeometry = linesRef.current.geometry;
    
    const positions = pointGeometry.attributes.position.array as Float32Array;
    const randomFactors = pointGeometry.attributes.randomFactor.array as Float32Array;
    
    const now = Date.now();
    const activeDisturbances = mouseDisturbances.filter(d => now - d.startTime < 4000);
    const hasActiveDisturbances = activeDisturbances.length > 0;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const i4 = i * 4;
      
      const baseX = positions[i3];
      const baseY = positions[i3 + 1];
      
      const amplitude = randomFactors[i4];
      const frequency = randomFactors[i4 + 1];
      const phase = randomFactors[i4 + 2];
      const speed = randomFactors[i4 + 3];
      
      let z = Math.sin(baseX * 0.01 + baseY * 0.01 + time * 0.2) * 1.5;
      z += Math.sin(baseX * 0.03 - baseY * 0.02 + time * 0.3) * 0.8;
      z += Math.cos(baseX * 0.02 + baseY * 0.02 + time * 0.25) * 1;
      z += Math.sin(time * speed + phase + baseX * frequency + baseY * frequency * 0.8) * amplitude;
      
      for (const peak of peaks) {
        const dx = baseX - peak.x;
        const dy = baseY - peak.y;
        const distSq = dx * dx + dy * dy;
        const maxDistSq = 15000;
        
        if (distSq < maxDistSq) {
          const influence = Math.exp(-distSq / 8000);
          const peakWave = Math.sin(time * peak.speed + Math.sqrt(distSq) * 0.03) * 0.5 + 0.5;
          z += peak.amplitude * influence * peakWave;
        }
      }
      
      if (hasActiveDisturbances) {
        for (const disturbance of activeDisturbances) {
          const dx = baseX - disturbance.x;
          const dy = baseY - disturbance.y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = 40000;
          
          if (distSq < maxDistSq) {
            const elapsedTime = (now - disturbance.startTime) / 1000;
            const dist = Math.sqrt(distSq);
            const waveSpeed = 60;
            const waveRadius = elapsedTime * waveSpeed;
            const ringWidth = 30;
            const distFromRing = Math.abs(dist - waveRadius);
            
            if (distFromRing < ringWidth) {
              const normalizedDist = distFromRing / ringWidth;
              const ringFactor = Math.cos(normalizedDist * Math.PI * 0.5);
              const smoothRingFactor = ringFactor > 0 ? ringFactor * ringFactor : 0;
              const timeAttenuation = Math.pow(1.0 - elapsedTime / 4, 1.5);
              const distanceAttenuation = Math.exp(-dist / 150);
              const attenuationFactor = timeAttenuation * distanceAttenuation;
              const waveAmplitude = disturbance.strength * 12 * smoothRingFactor * attenuationFactor;
              z += waveAmplitude;
            }
          }
        }
      }
      
      positions[i3 + 2] = z;
    }
    
    pointGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.position.needsUpdate = true;
    
    if (mouseDisturbances.length > 0 && now % 10 === 0) {
      setMouseDisturbances(prev => prev.filter(d => now - d.startTime < 4000));
    }
  });
  
  useEffect(() => {
    const getForegroundColor = () => {
      const root = document.documentElement;
      const isDark = root.classList.contains('dark');
      const color = isDark ? 'rgb(250, 250, 250)' : 'rgb(10, 10, 10)';
      setForegroundColor(color);
    };

    getForegroundColor();

    const observer = new MutationObserver(getForegroundColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial 
          color={foregroundColor || 'currentColor'}
          transparent 
          opacity={0.1} 
          depthTest={false}
        />
      </lineSegments>
      
      <points ref={pointsRef}>
        <bufferGeometry />
        <shaderMaterial
          transparent
          depthTest={false}
          uniforms={{
            foregroundColor: { value: new THREE.Color(foregroundColor || '#ffffff') }
          }}
          vertexShader={`
            attribute float size;
            attribute float opacity;
            attribute vec4 randomFactor;
            
            varying float vOpacity;
            varying float vDepth;
            
            void main() {
              vOpacity = opacity;
              vDepth = (position.z + 10.0) / 20.0;
              float pointSize = size * (0.8 + vDepth * 1.2);
              gl_PointSize = pointSize;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform vec3 foregroundColor;
            varying float vOpacity;
            varying float vDepth;
            
            void main() {
              float distance = length(gl_PointCoord - vec2(0.5, 0.5));
              if (distance > 0.5) discard;
              float alpha = vOpacity * (0.35 + vDepth * 0.7) * (1.0 - distance * 1.4);
              gl_FragColor = vec4(foregroundColor, alpha);
            }
          `}
        />
      </points>
    </>
  );
};

export default WavingGrid; 