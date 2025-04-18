interface Project {
	id: number;
	title: string;
	description: string;
	images: string[];
	link?: string;
	github?: string;
	technos: string[];
}

export const projects: Project[] = [
	{
		id: 1,
		title: "Worduel",
		description:
			"Worduel est un jeu de type Wordle avec une interface simple et intuitive et une dimension multi-joueur.",
		images: [
			"https://dummyimage.com/600x400/ff0000/fff&text=1",
			"https://dummyimage.com/600x400/000/fff&text=2",
			"https://dummyimage.com/600x400/000/fff&text=3",
		],
		link: "https://worduel.fr",
		github: "https://github.com/Worduel/Worduel",
		technos: [
			"Next.js",
			"Tailwind",
			"Framer Motion",
			"Socket.io",
			"Supabase",
			"Prisma",
			"PostgreSQL",
			"Docker",
		],
	},
	{
		id: 2,
		title: "Opération prospection",
		description: "Encore un projet cool.",
		images: [
			"https://dummyimage.com/600x400/000/fff&text=1",
			"https://dummyimage.com/600x400/000/fff&text=2",
		],
		github: "/",
		link: "https://operation-prospection.holostudio.fr/",
		technos: ["Showit", "JavaScript"],
	},
	{
		id: 3,
		title: "The Archivist",
		description: "Extension browser pour Chrome et Firefox. Création du site et de l'extension. Création du logo.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "https://thearchivist.vercel.app/",
		github: "https://github.com/ka-be/TheArchivist",
		technos: ["Javascript", "HTML", "CSS"],
	},
	{
		id: 4,
		title: "Lucette Surfwear",
		description: "Encore un projet cool.",
		images: [
			"https://dummyimage.com/600x400/000/fff&text=1",
			"https://dummyimage.com/600x400/000/fff&text=2",
		],
		link: "/",
		github: "/",
		technos: ["React", "TypeScript"],
	},
	{
		id: 5,
		title: "Pokedex",
		description: "Encore un projet cool.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "/",
		github: "/",
		technos: ["React", "TypeScript"],
	},
	{
		id: 6,
		title: "Weather App",
		description: "Encore un projet cool.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "/",
		github: "/",
		technos: ["React", "TypeScript"],
	},
	{
		id: 7,
		title: "Star Wars intro",
		description: "Encore un projet cool.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "/",
		github: "/",
		technos: ["React", "TypeScript"],
	},
	{
		id: 8,
		title: "Metropolis",
		description: "Encore un projet cool.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "/",
		github: "/",
		technos: ["React", "TypeScript"],
	},
	{
		id: 9,
		title: "Joe's gelatos",
		description: "Encore un projet cool.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "/",
		github: "/",
		technos: ["React", "TypeScript"],
	},
	{
		id: 10,
		title: "Khord",
		description: "Encore un projet cool.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "/",
		github: "/",
		technos: ["React", "TypeScript"],
	},
	{
		id: 11,
		title: "Analog",
		description: "Encore un projet cool.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "/",
		github: "/",
		technos: ["React", "TypeScript"],
	},
	{
		id: 12,
		title: "Roll the game",
		description: "Encore un projet cool.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "/",
		github: "/",
		technos: ["React", "TypeScript"],
	},
	{
		id: 13,
		title: "Surfrider",
		description: "Encore un projet cool.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "/",
		github: "/",
		technos: ["React", "TypeScript"],
	},
	{
		id: 14,
		title: "Uncoflow",
		description: "Encore un projet cool.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "/",
		github: "/",
		technos: ["React", "TypeScript"],
	},
	{
		id: 15,
		title: "Ce portfolio",
		description: "Encore un projet cool.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "/",
		github: "/",
		technos: ["React", "TypeScript", "Supabase", "Tailwind", "Framer Motion", "Next.js"],
	}
];
