"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
			<img
				src={images[currentIndex]}
				alt={`${alt} - Image ${currentIndex + 1}`}
				className="w-full h-auto rounded-sm shadow-sm transition-opacity duration-300"
			/>

			{images.length > 1 && (
				<>
					<button
						onClick={previousImage}
						className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/10 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						aria-label="Image précédente"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>
					<button
						onClick={nextImage}
						className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/10 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						aria-label="Image suivante"
					>
						<ChevronRight className="w-6 h-6" />
					</button>
					<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${
									index === currentIndex
										? "bg-foreground"
										: "bg-foreground/30"
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
