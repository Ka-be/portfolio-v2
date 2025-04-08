import React from "react";
import Badge from "@/components/atoms/Badge";
import ProjectLink from "@/components/atoms/ProjectLink";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
interface ProjectProps {
	title: string;
	description: string;
	images: string[];
	technos?: string[];
	link?: string;
	github?: string;
	isMobile?: boolean;
}

const Project = ({
	title,
	description,
	images,
	technos,
	link,
	github,
	isMobile = false,
}: ProjectProps) => {
	const containerClasses = isMobile
		? "flex flex-col gap-4 py-4"
		: "flex flex-col justify-between w-full h-full";

	const imageContainerClasses = isMobile
		? "flex justify-center items-center w-full px-12"
		: "flex justify-center items-center w-1/2 ml-12";

	const contentContainerClasses = isMobile
		? "flex flex-col gap-4"
		: "flex flex-col w-3/4 h-full justify-end pb-4";

	return (
		<section className={containerClasses}>
			<div className={imageContainerClasses}>
				<Carousel>
  					<CarouselContent >
    					{images.map((image, index) => (
							<CarouselItem key={index}>
								<img src={image} alt={`${title} - Image ${index + 1}`} className="w-full h-auto object-cover" />
							</CarouselItem>
						))}
  					</CarouselContent>
  					<CarouselPrevious />
  					<CarouselNext />
				</Carousel>
			</div>
			<div className={contentContainerClasses}>
				<div className="space-y-2">
					<h3 className="text-3xl font-light">
						{title}
					</h3>
					<p className="text-md font-light text-foreground leading-relaxed">
						{description}
					</p>
					<div className="flex flex-wrap gap-2 pt-1">
						{technos?.map((techno, index) => (
							<Badge key={index}>{techno}</Badge>
						))}
					</div>
					<div className="pt-1">
						<ProjectLink link={link} github={github} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;
