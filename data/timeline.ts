interface TimelineItem {
  id: number;
  period: string;
  title: string;
  place: string;
  description: string;
  type: 'education' | 'job' | 'project' | 'other';
  skills: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    period: "2016",
    title: "Responsable qualité, sécurité et environnement (RNCP Niv. 6)",
    place: "CESI Bordeaux",
    description: "Alternance",
    type: "education",
    skills: ["Gestion de projet", "Amélioration continue", "Audit", "Analyse de risque"]
  },
  {
    id: 2,
    period: "2016 - 2022",
    title: "Spécialiste QA / Qualification - Validation",
    place: "Merck, Bordeaux",
    description: "Blablabla",
    type: "job",
    skills: ["Gestion de projet", "Assurance qualité", "GMP", "Documentation technique"]
  },
  {
    id: 3,
    period: "2022 - 2023",
    title: "Titre professionnel Développeur web / web mobile (RNCP Niv. 5)",
    place: "Studi",
    description: "Blablabla",
    type: "education",
    skills: ["HTML/CSS", "JavaScript", "jQuery", "PHP", "MySQL", "WordPress", "Git", "Github"]
  },
  {
    id: 4,
    period: "Sept. 2023 - Fev. 2025",
    title: "Titre professionnel Concepteur / Développeur d'applications (RNCP Niv. 6)",
    place: "O'Clock",
    description: "Blablabla",
    type: "education",
    skills: ["UMLs", "Figma", "Conception" ,"Cybersécurité", "Architecture logicielle", "Linux", "Docker", "React", "React Native", "Node.js", "TypeScript", "NestJS", "Prisma", "Vite", "Swagger", "Express", "API REST", "Apollo GraphQL", "PostgreSQL", "MongoDB", "Git", "GitHub", "CI/CD", "Github Actions" ]
  },
  {
    id: 5,
    period: "Sept. 2023 - Mars 2025",
    title: "Développeur de solution digitales",
    place: "Sanofi Ambarès",
    description: "Développement d'applications métier pour le service HSE",
    type: "job",
    skills: ["Microsoft PowerApps", "Microsoft PowerAutomate", "Microsoft PowerBI", "SQL", "O365", "Sharepoint", "Jira", "Confluence"]
  },
];
