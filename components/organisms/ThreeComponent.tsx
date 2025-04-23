'use client';

// https://www.youtube.com/watch?v=vTfMjI4rVSI

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';



const Sphere = ({ position, color, args }: { position: [number, number, number], color: string, args: [number, number, number] }) => {
    const ref = useRef<import('three').Mesh>(null);

    const [isHovered, setIsHovered] = useState(false);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta;
            ref.current.rotation.y += delta;
        }
    });
    return (
        <mesh 
        position={position} 
        ref={ref} 
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)}
        >
            <sphereGeometry args={args}  />
            <meshStandardMaterial color={isHovered ? 'red' : color} wireframe={true} />
        </mesh>
    );
};


const ThreeComponent = () => {
    return (
        <div className="min-h-screen flex items-center flex-col justify-center text-xl font-bold">
            <p>Test ThreeJS</p>
            <Canvas style={{ width: '100vw', height: '50vh' }}>
                <directionalLight position={[1, 1, 2]} />
                <ambientLight intensity={0.3} />
                <Sphere position={[0, 0, 0]} color={'white'} args={[1, 32, 20]} /> 

            </Canvas>
        </div>
    );
};

export default ThreeComponent;