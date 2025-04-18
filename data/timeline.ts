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
    place: "CESI - Bordeaux, France",
    description:
      "Formation en alternance de 18 mois réalisée chez Unither Pharmaceuticals en tant que chargé d’assurance qualité. Mon rôle : accompagner l’entreprise dans sa mise en conformité réglementaire, piloter des audits internes, déployer des systèmes de management QSE (Qualité, Sécurité, Environnement) et impulser des démarches d’amélioration continue. Une grosse part du travail reposait sur la gestion de projet et le suivi d’indicateurs de performance.",
    type: "education",
    skills: ["Gestion de projet", "Amélioration continue", "Audit", "Analyse de risque"]
  },
  {
    id: 2,
    period: "2016 - 2022",
    title: "Spécialiste QA / Qualification - Validation",
    place: "Merck - Martillac, France",
    description:
      "Pendant 6 ans, j’ai été référent assurance qualité sur les équipements de production et de laboratoire au sein d’un site pharmaceutique. Mon rôle : garantir leur conformité aux exigences GMP, que ce soit dans le cadre de projets neufs (nouveaux équipements, nouveaux bâtiments) ou pour les équipements existants. Cela impliquait l’analyse de plans, de spécifications techniques, la rédaction et le suivi de documentation, avec un vrai rôle central dans la gestion de projet transversale.",
    type: "job",
    skills: ["Gestion de projet", "Assurance qualité", "GMP", "Documentation technique"]
  },
  {
    id: 3,
    period: "2022 - 2023",
    title: "Titre professionnel Développeur web / web mobile (RNCP Niv. 5)",
    place: "Studi - En ligne",
    description:
      "Premiers pas dans le monde du développement web avec cette formation intensive. J’y ai appris les bases du front et du back : HTML, CSS, JavaScript, PHP, MySQL… De quoi poser de solides fondations pour ma reconversion, en comprenant bien les logiques web et les outils classiques d’un développeur.",
    type: "education",
    skills: ["HTML/CSS", "JavaScript", "jQuery", "PHP", "MySQL", "WordPress", "Git", "Github"]
  },
  {
    id: 4,
    period: "Sept. 2023 - Fev. 2025",
    title: "Titre professionnel Concepteur / Développeur d'applications (RNCP Niv. 6)",
    place: "O'Clock - En ligne",
    description:
      "Une formation complète en alternance, axée sur la conception logicielle, l’architecture, la cybersécurité et le développement fullstack avec des technologies modernes. Le rythme intensif m’a permis de monter rapidement en compétences sur des stacks robustes et actuelles, tout en mettant en pratique chez Sanofi dans un contexte professionnel concret.",
    type: "education",
    skills: ["UMLs", "Figma", "Conception", "Cybersécurité", "Architecture logicielle", "Linux", "Docker", "React", "React Native", "Node.js", "TypeScript", "NestJS", "Prisma", "Vite", "Swagger", "Express", "API REST", "Apollo GraphQL", "PostgreSQL", "MongoDB", "Git", "GitHub", "CI/CD", "Github Actions"]
  },
  {
    id: 5,
    period: "Sept. 2023 - Mars 2025",
    title: "Développeur de solutions digitales",
    place: "Sanofi - Ambarès-et-Lagrave, France",
    description:
      "Intégré au service HSE, j’ai eu carte blanche pour concevoir, développer et déployer trois applications métiers en totale autonomie. De l’analyse des besoins à la mise en production, en passant par la création de maquettes et la rédaction de cahiers des charges. J'ai notamment mis en place : une application permettant la digitalisation des plans de prévention et des permis de travail spécifiques, une application de demande d'accès au site industriel et enfin, une application de gestion des déchets. Ces solutions sont aujourd’hui utilisées par plus de 800 utilisateurs sur le site de Sanofi Ambarès.",
    type: "job",
    skills: ["Microsoft PowerApps", "Microsoft PowerAutomate", "Microsoft PowerBI", "SQL", "O365", "Sharepoint", "Jira", "Confluence"]
  },
];

