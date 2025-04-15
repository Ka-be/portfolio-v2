interface TimelineItem {
  id: number;
  period: string;
  title: string;
  place: string;
  description: string;
  type: 'education' | 'job' | 'project' | 'other';
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    period: "2016",
    title: "Responsable qualité, sécurité et environnement",
    place: "CESI Bordeaux",
    description: "Alternance",
    type: "education"
  },
  {
    id: 2,
    period: "2016 - 2022",
    title: "Spécialiste QA",
    place: "Merck, Bordeaux",
    description: "Blablabla",
    type: "job"
  },
  {
    id: 3,
    period: "2022 - 2023",
    title: "Titre professionnel Développeur web / web mobile",
    place: "Studi",
    description: "Blablabla",
    type: "education"
  },
  {
    id: 4,
    period: "Sept. 2023 - Fev. 2025",
    title: "Titre professionnel Concepteur / Développeur d'applications",
    place: "O'Clock",
    description: "Blablabla",
    type: "education"
  },
  {
    id: 5,
    period: "Sept. 2023 - Mars 2025",
    title: "Développeur de solution digitales",
    place: "Sanofi Ambarès",
    description: "Blablabla",
    type: "job"
  },
];
