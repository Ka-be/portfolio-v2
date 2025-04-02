import React from "react";
import Badge from "@/components/atoms/Badge";
import ProjectLink from "@/components/atoms/ProjectLink";

interface ProjectProps {
	title: string;
	description: string;
	image: string;
	technos?: string[];
	link?: string;
	github?: string;
	isMobile?: boolean;
}

const Project = ({
	title,
	description,
	image,
	technos,
	link,
	github,
	isMobile = false,
}: ProjectProps) => {
	const containerClasses = isMobile
		? "flex flex-col gap-8 py-8"
		: "flex flex-col justify-between w-full h-full";

	const imageContainerClasses = isMobile
		? "flex justify-center items-center w-full"
		: "flex justify-center items-center w-1/2";

	const contentContainerClasses = isMobile
		? "flex flex-col gap-4"
		: "flex flex-col w-3/4 h-full justify-end pb-4";

	return (
		<section className={containerClasses}>
			<div className={imageContainerClasses}>
				<img src={image} alt={title} className="w-full h-auto" />
			</div>
			<div className={contentContainerClasses}>
				<h3 className="text-3xl font-light mb-4">{title}</h3>
				<p className="text-lg font-light mb-6 text-left">
					{description}
				</p>
				<div className="flex flex-wrap gap-2">
					{technos?.map((techno, index) => (
						<Badge key={index}>{techno}</Badge>
					))}
				</div>
				<ProjectLink link={link} github={github} />
			</div>
		</section>
	);
};

export default Project;
