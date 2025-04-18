"use client";

import Overlay from "@/components/organisms/Overlay";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { Timeline } from "@mui/lab";
import useCssVariable from "@/hooks/useCssVariable";
import React, { useState, useMemo } from "react";
import TimelineEventItem from "@/components/molecules/TimelineEventItem";
import { timelineData } from "@/data/timeline";
import { 
	SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, 
	SiDocker, SiGit, SiGithub, SiPrisma, SiPostgresql, SiMongodb, 
	SiRedis, SiExpress
} from "react-icons/si";

export default function AboutPage() {
	const foregroundColor = useCssVariable('--foreground', '#333333');
	const [activeItemId, setActiveItemId] = useState<number | null>(null);

	const technos = [
		{
			name: "React",
			icon: <SiReact size={16} className="mr-2" />
		},
		{
			name: "Next.js",
			icon: <SiNextdotjs size={16} className="mr-2" />
		},
		{
			name: "Tailwind CSS",
			icon: <SiTailwindcss size={16} className="mr-2" />
		},
		{
			name: "TypeScript",
			icon: <SiTypescript size={16} className="mr-2" />
		},
		{
			name: "Node.js",
			icon: <SiNodedotjs size={16} className="mr-2" />
		},
		{
			name: "Docker",
			icon: <SiDocker size={16} className="mr-2" />
		},
		{
			name: "Git",
			icon: <SiGit size={16} className="mr-2" />
		},
		{
			name: "GitHub",
			icon: <SiGithub size={16} className="mr-2" />
		},
		{
			name: "Prisma",
			icon: <SiPrisma size={16} className="mr-2" />
		},
		{
			name: "PostgreSQL",
			icon: <SiPostgresql size={16} className="mr-2" />
		},
		{
			name: "MongoDB",
			icon: <SiMongodb size={16} className="mr-2" />
		},
		{
			name: "Redis",
			icon: <SiRedis size={16} className="mr-2" />
		},
		{
			name: "Express",
			icon: <SiExpress size={16} className="mr-2" />
		},
	];

	// Composant réutilisable pour la timeline
	const TimelineComponent = () => (
		<Timeline position="right" className="text-foreground w-full text-sm">
			{/* Item Année fixe pour "Aujourd'hui" */}
			<TimelineEventItem 
				id={-1}
				period="En recherche active"
				title=""
				place=""
				description=""
				foregroundColor={foregroundColor}
				isYear={true}
				activeItemId={activeItemId}
				setActiveItemId={setActiveItemId}
			/>
			
			{/* Items dynamiques depuis timelineData */}
			{[...timelineData]
				.sort((a, b) => b.id - a.id) 
				.map((item) => (
				<TimelineEventItem 
					key={item.id}
					id={item.id}
					period={item.period}
					title={item.title}
					place={item.place}
					description={item.description}
					type={item.type}
					skills={item.skills}
					foregroundColor={foregroundColor}
					activeItemId={activeItemId}
					setActiveItemId={setActiveItemId}
				/>
			))}
		</Timeline>
	);

	// Composant réutilisable pour le paragraphe bio
	const BioParagraph = ({ className = "" }) => (
		<div className="flex flex-col items-end">
			<img 
				src="/assets/images/portrait.jpg" 
				alt="Profile" 
				className="w-1/2 h-1/2 object-cover mb-4 filter grayscale" 
			/>
			<p className={`font-light text-foreground text-justify opacity-80 mb-4 ${className}`}>
				Développeur concepteur d'applications web et mobile
				fraîchement titulaire du titre professionnel RNCP.
				Passionné par la création d'expériences numériques
				innovantes, je combine expertise technique et créativité
				pour donner vie à des projets web ambitieux. Basé à
				Bordeaux.
			</p>
			<p className={`font-light text-foreground text-justify opacity-80 ${className}`}>
				Développeur concepteur d'applications web et mobile
				fraîchement titulaire du titre professionnel RNCP.
				Passionné par la création d'expériences numériques
				innovantes, je combine expertise technique et créativité
				pour donner vie à des projets web ambitieux. Basé à
				Bordeaux.
			</p>
		</div>
	);

	// Composition des icônes et textes pour le marquee
	const technoElements = useMemo(() => {
		return technos.map((tech) => (
			<div key={tech.name} className="flex items-center mx-4">
				{tech.icon}
				<span className="text-sm">{tech.name}</span>
			</div>
		));
	}, []);

	// Composant mémorisé pour le marquee des technologies
	const TechnoMarquee = useMemo(() => {
		return ({ className = "" }) => (
			<Marquee
				speed={20}
				gradient={false}
				pauseOnHover={false}
				autoFill={true}
				direction="right"
				className={`text-foreground opacity-90 hover:opacity-100 transition-opacity font-light ${className}`}
			>
				{technoElements}
			</Marquee>
		);
	}, [technoElements]);

	// Marquee du haut mémorisé
	const HeaderMarquee = useMemo(() => (
		<Marquee
			speed={40}
			gradient={false}
			pauseOnHover={true}
			autoFill={true}
			className="bg-foreground text-background z-30 absolute top-1 left-0 h-6 tracking-widest cursor-pointer opacity-90 hover:opacity-100 transition-opacity font-light"
		>
			<span className="mx-4">OPEN TO WORK • DISPONIBLE</span>
		</Marquee>
	), []);

	return (
		<div className="h-[100dvh] w-[100dvw] overflow-hidden relative">
			<Link href="/contact">
				{HeaderMarquee}
			</Link>
			<Overlay />
			<div className="w-[calc(100%-calc(var(--frame-size)*1.8))] h-[calc(100dvh-calc(var(--frame-size)*2))] font-lexend flex items-center justify-center m-[var(--frame-size)]">
				{/* Titre - Toujours visible en haut */}
				<div
					className="absolute top-0 right-0 w-auto h-auto pb-5 pr-10 text-right bg-background z-10"
					style={{
						top: "var(--frame-size)",
						right: "var(--frame-size)",
					}}
				>
					<h2 className="text-2xl md:text-5xl font-light text-foreground uppercase tracking-widest ml-10 mt-10">
						Parcours
					</h2>
					<h3 className="text-lg md:text-2xl font-light text-foreground tracking-widest ml-10">
						Pas classique, mais ça me plait.
					</h3>
				</div>

				{/* VERSION DESKTOP - Partie gauche avec Timeline */}
				<section 
					className="hidden md:flex absolute bottom-0 left-20 w-1/3 overflow-y-auto h-[calc(100dvh-calc(var(--frame-size)*2))] items-center justify-center"
					style={{
						top: "var(--frame-size)",
						left: "var(--frame-size)",
					}}>
					<div className="self-start md:ml-5 w-full h-full pt-10 overflow-y-auto">
						<TimelineComponent />
					</div>
				</section>

				{/* VERSION DESKTOP - Partie droite avec Bio et Marquee */}
				<div
					className="hidden md:block absolute bottom-0 right-0 w-1/3"
					style={{
						bottom: "var(--frame-size)",
						right: "var(--frame-size)",
					}}
				>
					{/* <img src="/assets/images/portrait.jpg" alt="Profile" className="w-1/2 h-1/2 object-cover" /> */}
					<div className="pr-10 pb-12 md:pb-20">
						<BioParagraph className="text-sm md:text-md" />
					</div>

					<div className="absolute bottom-0 right-0 pb-4 pt-2 w-full self-center pr-10">
						<TechnoMarquee />
					</div>
				</div>

				{/* VERSION MOBILE - Contenu empilé */}
				<section 
					className="md:hidden absolute top-0 left-0 w-[calc(100%-calc(var(--frame-size)*1.8))] overflow-y-auto h-[calc(100dvh-calc(var(--frame-size)*2))] flex flex-col"
					style={{
						top: "calc(var(--frame-size) + 8rem)", // Espace pour le titre
						left: "var(--frame-size)",
						paddingBottom: "calc(var(--frame-size) + 10rem)", // Espace pour le défilement complet
					}}>
					
					{/* Paragraphe bio - mobile */}
					<div className="w-full pl-10 pr-12 mb-4 mt-8">
						<BioParagraph className="text-sm" />
					</div>

					{/* Marquee - mobile */}
					<div className="w-full mb-10 mt-4 px-4 pr-12 pl-10">
						<TechnoMarquee />
					</div>

					{/* Timeline - mobile */}
					<div className="w-full flex-grow mb-4 px-4">
						<TimelineComponent />
					</div>
				</section>
			</div>
		</div>
	);
}
