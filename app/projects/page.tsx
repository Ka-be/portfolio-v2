"use client";

import Overlay from "@/components/organisms/Overlay";
import { projects } from "@/data/projects";
import { ArrowDownLeft } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	link?: string;
	technos?: string[];
}

export default function ProjectsPage() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(
		projects[0]
	); // On initialise avec le premier projet

	return (
		<div className="h-[100dvh] w-[100dvw] overflow-hidden relative">
			<Link href="/contact">
				<Marquee
					speed={40}
					gradient={false}
					pauseOnHover={true}
					autoFill={true}
					className="bg-foreground text-background z-30 absolute top-1 left-0 h-6 tracking-widest cursor-pointer opacity-90 hover:opacity-100 transition-opacity font-light"
				>
					<span className="mx-4">OPEN TO WORK • DISPONIBLE</span>
				</Marquee>
			</Link>
			<Overlay />
			<div className="w-[calc(100%-calc(var(--frame-size)*1.8))] h-[calc(100dvh-calc(var(--frame-size)*2))] font-lexend flex items-center justify-center m-[var(--frame-size)]">
				<div
					className="absolute top-0 left-0 w-auto h-auto"
					style={{
						top: "var(--frame-size)",
						left: "var(--frame-size)",
					}}
				>
					<h2 className="text-5xl font-light text-foreground uppercase tracking-widest ml-10 mt-10">
						Projets
					</h2>
				</div>

				<div
					className="absolute bottom-0 right-0 w-4/5 md:w-1/3 h-[calc(100dvh-calc(var(--frame-size)*2))] flex flex-col justify-end overflow-hidden"
					style={{
						bottom: "var(--frame-size)",
						right: "var(--frame-size)",
					}}
				>
					<ul className="overflow-y-auto max-h-full scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground/20 hover:scrollbar-thumb-foreground/40 pr-4">
						{projects.map((project) => (
							<li
								key={project.id}
								className={`text-md font-light text-foreground text-justify py-4 border-t border-foreground flex items-center cursor-pointer transition-all duration-300 ${
									selectedProject?.id === project.id
										? "opacity-100"
										: "opacity-60 hover:opacity-80"
								}`}
								onMouseEnter={() => setSelectedProject(project)}
							>
								<div className="mr-2">
									<ArrowDownLeft
										size={64}
										strokeWidth={0.8}
									/>
								</div>
								{project.title}
							</li>
						))}
					</ul>
				</div>
				<div
					className="absolute bottom-0 left-0 w-4/5 md:w-7/12 h-[calc(80dvh-calc(var(--frame-size)*2))] flex flex-col justify-start px-8 transition-all duration-300 "
					style={{
						bottom: "var(--frame-size)",
						left: "var(--frame-size)",
						opacity: selectedProject ? 1 : 0,
					}}
				>
					{selectedProject && (
						<section className="flex flex-col justify-between w-full h-full">
							<div className="flex justify-center items-center  w-1/2">
								<img
									src={selectedProject.image}
									alt={selectedProject.title}
									className="w-full h-auto"
								/>
							</div>
							<div className="flex flex-col w-3/4 h-full justify-end pb-4">
								<h3 className="text-3xl font-light mb-4">
									{selectedProject.title}
								</h3>
								<p className="text-lg font-light mb-6 text-left">
									{selectedProject.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{selectedProject.technos?.map(
										(techno, index) => (
											<span
												key={index}
												className="px-3 py-1 rounded-full border border-foreground text-sm opacity-80"
											>
												{techno}
											</span>
										)
									)}
								</div>
								<a
									href={selectedProject.link}
									className="text-sm text-foreground/80 hover:text-foreground"
								>
									Voir le projet
								</a>
							</div>
						</section>
					)}
				</div>
			</div>
		</div>
	);
}
