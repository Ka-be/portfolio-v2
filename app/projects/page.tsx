"use client";

import Overlay from "@/components/organisms/Overlay";
import { projects } from "@/data/projects";
import { ArrowDownLeft } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Project from "@/components/templates/Project";

interface Project {
	id: number;
	title: string;
	description: string;
	images: string[];
	link?: string;
	github?: string;
	technos?: string[];
}

export default function ProjectsPage() {
	const [selectedProject, setSelectedProject] = useState<Project | null>(
		null
	);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

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

				{/* Liste des projets - Centrée sur mobile */}
				<div
					className="absolute bottom-0 w-[calc(90%-calc(var(--frame-size)*2))] md:w-1/3 h-[calc(85dvh-calc(var(--frame-size)*2))] md:h-[calc(100dvh-calc(var(--frame-size)*2))] flex flex-col justify-end overflow-hidden md:right-[var(--frame-size)]"
					style={{
						bottom: "var(--frame-size)",
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
								onClick={() => handleProjectClick(project)}
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

				{/* Aperçu desktop */}
				<div
					className="absolute bottom-0 left-0 w-4/5 md:w-7/12 h-[calc(80dvh-calc(var(--frame-size)*2))] hidden md:flex flex-col justify-start px-8 transition-all duration-300"
					style={{
						bottom: "var(--frame-size)",
						left: "var(--frame-size)",
						opacity: selectedProject ? 1 : 0,
					}}
				>
					{selectedProject && <Project {...selectedProject} />}
				</div>
			</div>

			{/* Modal mobile */}
			{isModalOpen && selectedProject && (
				<div className="fixed inset-0 bg-background z-50 flex items-center justify-center p-4 md:hidden">
					<div className="relative w-full max-h-[90dvh] overflow-y-auto">
						<Project {...selectedProject} isMobile />
					</div>
					<div className="absolute bottom-0 w-full h-16 flex justify-center items-center">
						<button
							onClick={() => setIsModalOpen(false)}
							className="text-background bg-foreground px-4 py-2"
						>
							Retour
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
