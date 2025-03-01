"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TestCarousel = () => {
	// Crée une référence qui sera attachée à un élément DOM
	const targetRef = useRef(null);

	// useScroll suit la progression du défilement de l'élément référencé
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	// useTransform transforme la valeur du scroll en une valeur de translation X
	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

	return (
		<>
			{/* Version mobile - affichage en colonne normal */}
			<div className="lg:hidden flex flex-col space-y-16 py-16 px-4">
				{["Je conçois", "Je développe", "Je code"].map((item) => (
					<motion.div
						key={item}
						className="bg-neutral-900 h-[80vh] w-full flex items-center justify-center text-4xl font-bold"
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeIn" }}
					>
						{item}
					</motion.div>
				))}
			</div>

			{/* Version desktop - avec scroll horizontal */}
			<div
				className="hidden lg:block carousel min-h-screen h-[500vh] p-0"
				ref={targetRef}
			>
				<div className="contentContainer h-[100vh] sticky top-0 flex items-center justify-start overflow-hidden">
					<motion.div
						className="images flex flex-row py-0 pl-16 pr-16 space-x-16"
						style={{ x }}
					>
						{["Je conçois", "Je développe", "Je code"].map((item) => (
							<motion.div
								key={item}
								className="imageItem bg-neutral-900/10 h-full w-[100vw] flex items-center justify-center text-4xl font-bold"
								initial={{ opacity: 0, y: 200 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, ease: "easeIn" }}
							>
								{item}
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TestCarousel;
