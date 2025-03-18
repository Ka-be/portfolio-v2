import Overlay from "@/components/UI/Overlay";
import { projects } from "@/data/projects";

interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	link: string;
	technos: string[];
}

async function getStaticProps() {
	// Simuler un délai pour démontrer le chargement asynchrone
	await new Promise(resolve => setTimeout(resolve, 100));
	
	return {
		props: {
			projects
		},
		// Revalidate toutes les heures
		revalidate: 3600
	};
}

export default async function ProjectsPage() {
	const { props } = await getStaticProps();
	
	return (
		<>
			<Overlay />
			<div className="w-[calc(100%-calc(var(--frame-size)*1.8))] h-[calc(100dvh-calc(var(--frame-size)*2))] font-lexend flex items-center justify-center m-[var(--frame-size)]">
				{props.projects.map((project) => (
					<div key={project.id} className="bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-lg p-6 w-80 hover:scale-105 transition-transform">
						<h2 className="text-xl font-light text-foreground mb-2">{project.title}</h2>
						<p className="text-sm text-foreground/70 mb-4">{project.description}</p>
						<img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
						<div className="flex flex-wrap gap-2">
							{project.technos.map((techno, index) => (
								<span key={index} className="text-xs px-2 py-1 rounded-full bg-foreground/10 text-foreground/70">
									{techno}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
}
