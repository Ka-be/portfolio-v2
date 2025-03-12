"use client";

import { useEffect, useState, useRef } from "react";

interface Particle {
	position: {
		x: number;
		y: number;
	};
	size: number;
	color: string;
	angle: number;
	speed: number;
	distanceFromCenter: number;
}

const AccretionRing = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const particlesRef = useRef<Particle[]>([]);
	const animationFrameRef = useRef<number | null>(null);
	const mousePositionRef = useRef({ x: 0, y: 0 });
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	// Initialisation et gestion des dimensions
	useEffect(() => {
		const updateDimensions = () => {
			if (containerRef.current) {
				const { width, height } =
					containerRef.current.getBoundingClientRect();
				setDimensions({ width, height });

				// Mettre à jour les dimensions du canvas
				if (canvasRef.current) {
					canvasRef.current.width = width;
					canvasRef.current.height = height;
				}
			}
		};

		// Initialiser les dimensions
		updateDimensions();

		// Mettre à jour les dimensions lors du redimensionnement
		window.addEventListener("resize", updateDimensions);

		return () => {
			window.removeEventListener("resize", updateDimensions);
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, []);

	// Suivi de la position de la souris
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				mousePositionRef.current = {
					x: e.clientX - rect.left,
					y: e.clientY - rect.top,
				};
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	// Initialisation des particules
	useEffect(() => {
		if (!dimensions.width || !dimensions.height) return;

		const centerX = dimensions.width / 2;
		const centerY = dimensions.height / 2;
		const minRadius = Math.min(dimensions.width, dimensions.height) * 0.2;
		const maxRadius = Math.min(dimensions.width, dimensions.height) * 0.4;
		const particles: Particle[] = [];

		// Couleurs pour l'anneau d'accrétion (du bleu au blanc chaud)
		const colors = [
			"rgba(70, 130, 255, 0.8)", // Bleu
			"rgba(120, 170, 255, 0.8)", // Bleu clair
			"rgba(170, 200, 255, 0.8)", // Bleu très clair
			"rgba(220, 220, 255, 0.8)", // Blanc bleuté
			"rgba(255, 230, 200, 0.8)", // Blanc chaud
			"rgba(255, 200, 150, 0.8)", // Orange clair
		];

		// Créer 800 particules disposées en anneau
		for (let i = 0; i < 800; i++) {
			// Distribution non uniforme pour créer un anneau plus dense au milieu
			const t = Math.pow(Math.random(), 0.5); // Distribution non linéaire
			const radius = minRadius + t * (maxRadius - minRadius);

			// Angle aléatoire
			const angle = Math.random() * Math.PI * 2;

			// Taille variable selon la distance
			const size = Math.random() * 1.5 + 0.5;

			// Vitesse de rotation variable (plus rapide à l'intérieur)
			const speed = 0.005 + 0.02 * (1 - t);

			// Couleur selon la distance (gradient du centre vers l'extérieur)
			const colorIndex = Math.floor(t * colors.length);
			const color = colors[Math.min(colorIndex, colors.length - 1)];

			particles.push({
				position: {
					x: centerX + radius * Math.cos(angle),
					y: centerY + radius * Math.sin(angle),
				},
				size,
				color,
				angle,
				speed,
				distanceFromCenter: radius,
			});
		}

		particlesRef.current = particles;
	}, [dimensions]);

	// Animation des particules
	useEffect(() => {
		if (!dimensions.width || !dimensions.height || !canvasRef.current)
			return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const centerX = dimensions.width / 2;
		const centerY = dimensions.height / 2;

		// Point d'accélération (à droite du centre)
		const accelerationPoint = {
			x: centerX + Math.min(dimensions.width, dimensions.height) * 0.3,
			y: centerY,
		};
		const accelerationRadius = 50;

		const animate = () => {
			const particles = particlesRef.current;
			if (!particles.length) return;

			// Effacer le canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Dessiner le "trou noir" central
			const blackHoleRadius =
				Math.min(dimensions.width, dimensions.height) * 0.08;

			// Gradient pour le trou noir
			const gradient = ctx.createRadialGradient(
				centerX,
				centerY,
				0,
				centerX,
				centerY,
				blackHoleRadius * 1.5
			);
			gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
			gradient.addColorStop(0.7, "rgba(0, 0, 0, 0.8)");
			gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

			ctx.beginPath();
			ctx.arc(centerX, centerY, blackHoleRadius, 0, Math.PI * 2);
			ctx.fillStyle = gradient;
			ctx.fill();

			// Mettre à jour et dessiner chaque particule
			particles.forEach((particle) => {
				// Vitesse de rotation de base (dépend de la distance au centre)
				let rotationSpeed = particle.speed;

				// Vérifier si la particule est proche du point d'accélération
				const dxAccel = particle.position.x - accelerationPoint.x;
				const dyAccel = particle.position.y - accelerationPoint.y;
				const distanceFromAccelPoint = Math.sqrt(
					dxAccel * dxAccel + dyAccel * dyAccel
				);

				// Accélérer si proche du point d'accélération
				if (distanceFromAccelPoint < accelerationRadius) {
					rotationSpeed *= 5; // Accélération x5
				}

				// Effet de distorsion basé sur la position de la souris
				const dxMouse =
					particle.position.x - mousePositionRef.current.x;
				const dyMouse =
					particle.position.y - mousePositionRef.current.y;
				const distanceFromMouse = Math.sqrt(
					dxMouse * dxMouse + dyMouse * dyMouse
				);

				if (distanceFromMouse < 100) {
					// Effet de répulsion/attraction
					const force = (100 - distanceFromMouse) / 1000;
					particle.position.x += dxMouse * force;
					particle.position.y += dyMouse * force;
				}

				// Mise à jour de l'angle (rotation dans le sens horaire)
				particle.angle -= rotationSpeed;

				// Mise à jour de la position en orbite
				particle.position.x =
					centerX +
					particle.distanceFromCenter * Math.cos(particle.angle);
				particle.position.y =
					centerY +
					particle.distanceFromCenter * Math.sin(particle.angle);

				// Dessiner la particule
				ctx.beginPath();
				ctx.arc(
					particle.position.x,
					particle.position.y,
					particle.size,
					0,
					Math.PI * 2
				);
				ctx.fillStyle = particle.color;
				ctx.fill();

				// Ajouter un effet de lueur pour certaines particules
				if (Math.random() < 0.05) {
					ctx.beginPath();
					ctx.arc(
						particle.position.x,
						particle.position.y,
						particle.size * 2,
						0,
						Math.PI * 2
					);
					ctx.fillStyle = particle.color.replace("0.8", "0.2");
					ctx.fill();
				}
			});

			animationFrameRef.current = requestAnimationFrame(animate);
		};

		animationFrameRef.current = requestAnimationFrame(animate);

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [dimensions]);

	return (
		<div ref={containerRef} className="relative w-full h-full">
			<canvas ref={canvasRef} className="absolute inset-0 z-10" />
		</div>
	);
};

export default AccretionRing;
