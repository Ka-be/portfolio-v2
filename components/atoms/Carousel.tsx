"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
	images: string[];
	alt: string;
}

const Carousel = ({ images, alt }: CarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextImage = () => {
		setCurrentIndex((prev) => (prev + 1) % images.length);
	};

	const previousImage = () => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	if (images.length === 0) return null;

	return (
		<div className="relative w-full h-full group">
			<div className="relative w-full h-full overflow-hidden">
				<AnimatePresence mode="wait">
					<motion.img
						key={currentIndex}
						src={images[currentIndex]}
						alt={`${alt} - Image ${currentIndex + 1}`}
						className="w-full h-auto shadow-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					/>
				</AnimatePresence>
			</div>

			{images.length > 1 && (
				<>
					<button
						onClick={previousImage}
						className="absolute left-2 top-1/2 -translate-y-1/2 text-foreground hover:text-background opacity-0 group-hover:opacity-100 transition-opacity border border-foreground hover:bg-foreground transition-all duration-300 z-10"
						aria-label="Image précédente"
					>
						<ChevronLeft className="w-12 h-12" />
					</button>
					<button
						onClick={nextImage}
						className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground hover:text-background opacity-0 group-hover:opacity-100 transition-opacity border border-foreground hover:bg-foreground transition-all duration-300 z-10"
						aria-label="Image suivante"
					>
						<ChevronRight className="w-12 h-12" />
					</button>
					<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-2 h-2 transition-all duration-300 ${
									index === currentIndex
										? "bg-foreground"
										: "bg-foreground opacity-20"
								}`}
								aria-label={`Aller à l'image ${index + 1}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Carousel;
