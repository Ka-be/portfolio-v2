"use client";

import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
const CameraController = () => {
  const { camera, size } = useThree();
  const isInitialized = useRef(false);
  
  useEffect(() => {
    const adjustCamera = () => {
      const aspectRatio = size.width / size.height;
      const baseYPosition = -180;
      const yPosition = baseYPosition * (1 + (1 / aspectRatio) * 0.5);
      const baseZPosition = 40;
      const zPosition = baseZPosition * (1 + (1 / aspectRatio) * 0.2);
      const lookAtY = 30 * (1 + (1 / aspectRatio) * 0.3);
      
      camera.position.set(0, yPosition, zPosition);
      camera.lookAt(0, lookAtY, 0);
      
      const baseFov = 30;
      const fov = Math.min(baseFov * (1 + (1 / aspectRatio) * 0.2), 45);
      (camera as THREE.PerspectiveCamera).fov = fov;
      
      camera.updateProjectionMatrix();
      isInitialized.current = true;
    };
    
    adjustCamera();
    window.addEventListener('resize', adjustCamera);
    
    return () => {
      window.removeEventListener('resize', adjustCamera);
    };
  }, [camera, size]);
  
  return null;
};

export default CameraController; 