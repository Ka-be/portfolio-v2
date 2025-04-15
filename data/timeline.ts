interface TimelineItem {
  id: number;
  period: string;
  title: string;
  place: string;
  description: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    period: "Septembre 2025 - Octobre 2025",
    title: "Content for 2024",
    place: "Paris",
    description: "Description du poste avec les principales missions ici, lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    period: "Novembre 2025 - Décembre 2025",
    title: "Content for 2025",
    place: "Bordeaux",
    description: "Blablabla",
  },
  {
    id: 3,
    period: "Janvier 2026 - Février 2026",
    title: "Content for 2026",
    place: "Grenoble",
    description: "Blablabla",
  },
];
