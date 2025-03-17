"use client";

import React from "react";
import Navbar from "@/components/Navbar";

const Overlay = () => {
	// Utilisons une constante pour la taille du cadre
	const frameSize = "8dvmin";

	return (
		<>
			<Navbar />
			<div className="fixed inset-0 pointer-events-none z-20 w-[100dvw] h-[100dvh] overflow-hidden">
				{/* Bandes avec effet de flou - utilisons des valeurs dynamiques et équidistantes */}
				<div
					className="absolute top-0 left-0 right-0 backdrop-blur-md"
					style={{ height: frameSize }}
				></div>
				<div
					className="absolute bottom-0 left-0 right-0 backdrop-blur-md"
					style={{ height: frameSize }}
				></div>
				<div
					className="absolute left-0 backdrop-blur-md"
					style={{
						top: frameSize,
						bottom: frameSize,
						width: frameSize,
					}}
				></div>
				<div
					className="absolute right-0 backdrop-blur-md"
					style={{
						top: frameSize,
						bottom: frameSize,
						width: frameSize,
					}}
				></div>

				{/* SVG pour le cadre uniforme avec valeurs dynamiques */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						padding: frameSize,
					}}
				>
					<svg
						className="w-full h-full"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						style={{ overflow: "visible" }}
					>
						<rect
							x="0"
							y="0"
							width="100%"
							height="100%"
							fill="none"
							stroke="var(--foreground)"
							strokeWidth="0.5"
							vectorEffect="non-scaling-stroke"
						/>
					</svg>
				</div>
			</div>
		</>
	);
};

export default Overlay;
