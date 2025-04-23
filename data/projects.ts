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
		title: "Analog",
		description: "Horloge analogique simple et minimaliste réalisée en vanilla JS.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "https://analog-theclock.netlify.app/",
		github: "https://github.com/Ka-be/Analog-clock",
		technos: ["HTML", "Sass", "Javascript"],
	},
	{
		id: 2,
		title: "Khord",
		description: "Création du logo et développement d'un kit de batterie virtuelle en vanilla JS.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "https://khord.netlify.app/",
		github: "https://github.com/Ka-be/Khord-Drumkit",
		technos: ["HTML", "Sass", "Javascript", "Graphisme"],
	},
	{
		id: 3,
		title: "Joe's gelatos",
		description: "Création du logo & charte graphique d'une marque de glaces fictive - Intégration d'une Hero section pour le site vitrine.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "https://joesgelatos.netlify.app/",
		github: "https://github.com/Ka-be/Joes-Gelatos",
		technos: ["HTML", "CSS", "Javascript", "Graphisme"],
	},
	{
		id: 4,
		title: "Star Wars Opening",
		description: "Intégration du mythique générique de Star Wars réalisée en vanilla JS et Scss.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "https://starwars-intro.netlify.app/",
		github: "https://github.com/Ka-be/StarWars-intro/",
		technos: ["HTML", "Sass", "Javascript"],
	},
	{
		id: 5,
		title: "Weather App",
		description: "Réalisation d'une mini application météo en Javascript et API Open Weather",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "https://weather-app-ka-be.vercel.app",
		github: "https://github.com/Ka-be/weather_app",
		technos: ["HTML", "Sass", "Vite", "Javascript"],
	},
	// {
	// 	id: 6,
	// 	title: "Pokedex",
	// 	description: "Création du classique Pokedex à l'aide de l'api pokeapi.co.",
	// 	images: ["https://dummyimage.com/600x400/000/fff&text=1"],
	// 	link: "",
	// 	github: "https://github.com/Ka-be/pokedex/",
	// 	technos: ["React", "TypeScript", "Docker", "Sass"],
	// },
	{
		id: 7,
		title: "Uncoflow",
		description: "Création du logo et de la charte graphique de l'application Uncoflow.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "https://uncoflow.com/",
		technos: ["Figma, Graphisme"],
	},
	{
		id: 8,
		title: "The Archivist",
		description:
			"Création et développement d'une extension de browser pour Chrome et Firefox, permettant d'acceder a la dernière archive existante d'un site web. Création du site de présentation et du logo.",
		images: ["https://dummyimage.com/600x400/000/fff&text=1"],
		link: "https://thearchivist.vercel.app/",
		github: "https://github.com/ka-be/TheArchivist",
		technos: ["Next.js", "Typescript", "Tailwind", "Javascript", "CSS", "Graphisme"],
	},
	{
		id: 9,
		title: "Opération prospection",
		description: "Intégration de la page de vente d'une formation en ligne via Showit - Développement de composants customs en Javascript",
		images: [
			"https://dummyimage.com/600x400/000/fff&text=1",
			"https://dummyimage.com/600x400/000/fff&text=2",
		],
		link: "https://operation-prospection.holostudio.fr/",
		technos: ["Showit", "JavaScript", "CSS", "Graphisme"],
	},
	// {
	// 	id: 10,
	// 	title: "Lucette Surfwear",
	// 	description: "Design et création du site e-shop pour Lucette Surfwear, marque de vêtements de surf médocaine.",
	// 	images: [
	// 		"https://dummyimage.com/800x600/000/fff&text=1",
	// 		"https://dummyimage.com/800x600/000/fff&text=2",
	// 	],
	// 	link: "/",
	// 	github: "/",
	// 	technos: ["Javascript", "Shopify"],
	// },
	{
		id: 11,
		title: "Dishly",
		description:
			"[PROJET EN COURS] - Développent d'une application de gestion de recettes de cuisine. Création du logo et de la charte graphique.",
		images: ["https://dummyimage.com/1200x600/000/fff&text=1"],
		github: "https://github.com/Ka-be/dishly/",
		technos: [
			"React Native",
			"Expo",
			"TypeScript",
			"PostgreSQL",
			"Apollo GraphQL",
			"Prisma",
			"Docker",
			"Tailwind",
			"Nginx",
			"Cypress",
			"Jest",
		],
	},
	{
		id: 12,
		title: "Portfolio",
		description: "Pour ce portfolio, j’ai voulu un design simple mais soigné, qui met l’accent sur le contenu. Il me sert de vitrine pour présenter mes projets et compétences, le tout développé avec Next.js.",
		images: ["/assets/images/projects/portfolio/home.webp"
		],
		github: "https://github.com/Ka-be/portfolio-v2",
		technos: [
			"Next.js",
			"React",
			"TypeScript",
			"Supabase",
			"PostgreSQL",
			"Prisma",
			"Tailwind",
			"Framer Motion",
			"Three.js",
			"React Three Fiber",
		],
	},
	{
		id: 13,
		title: "Worduel",
		description:
			"Worduel est un Wordle multijoueur développé en équipe de 5 dans le cadre de notre titre professionnel CDA et présenté en soutenance. J’y ai exercé en tant que lead designer et référent technique frontend. Le jeu propose un mode solo, un mode duel en temps réel via WebSocket, la personnalisation de l’interface, un historique de parties, un classement et des statistiques détaillées.",
		images: [
			"/assets/images/projects/worduel/home.webp",
			"/assets/images/projects/worduel/game.webp",
			"/assets/images/projects/worduel/stats.webp",
			"/assets/images/projects/worduel/history.webp",
		],
		link: "https://worduel.fr",
		technos: [
			"React",
			"TypeScript",
			"Node.js",
			"Express",
			"Docker",
			"Tailwind",
			"ShadcnUI",
			"Websockets",
			"Prisma",
			"PostgreSQL",
			"OAuth",
			"Figma",
		],
	},
	
];
