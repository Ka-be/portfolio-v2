"use client";

import Overlay from "@/components/organisms/Overlay";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { Timeline } from "@mui/lab";
import useCssVariable from "@/hooks/useCssVariable";
import React, { useState, useMemo, useCallback } from "react";
import TimelineEventItem from "@/components/molecules/TimelineEventItem";
import { timelineData } from "@/data/timeline";
import { 
	SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, 
	SiDocker, SiGit, SiGithub, SiPrisma, SiPostgresql, SiMongodb, 
	SiRedis, SiExpress, SiLinux, SiVite, SiVitest, SiJest, SiThreedotjs, 
	SiSwagger, SiCypress, SiFigma, SiApollographql
} from "react-icons/si";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

// Type pour les sections bio
type BioSectionProps = {
	id: string;
	title: string;
	content: React.ReactNode;
};

// Type pour le titre de la page
type PageTitleProps = {
	subtitle: string;
	className?: string;
};

// Créer un contexte pour gérer l'état de la timeline séparément
const TimelineContext = React.createContext<{
	activeItemId: number | null;
	setActiveItemId: React.Dispatch<React.SetStateAction<number | null>>;
}>({
	activeItemId: null,
	setActiveItemId: () => {},
});

// Créer un contexte pour les bio sections
const BioContext = React.createContext<{
	expandedSection: string | null;
	toggleSection: (id: string) => void;
}>({
	expandedSection: null,
	toggleSection: () => {},
});

export default function ParcoursPage() {
	const foregroundColor = useCssVariable('--foreground', '#333333');
	
	// État isolé pour la timeline
	const [activeItemId, setActiveItemId] = useState<number | null>(null);
	
	// État isolé pour les bio sections
	const [expandedSection, setExpandedSection] = useState<string | null>(null);
	const toggleBioSection = useCallback((sectionId: string) => {
		setExpandedSection(prev => prev === sectionId ? null : sectionId);
	}, []);

	// Configuration des sections bio
	const bioSections: BioSectionProps[] = [
		{
			id: 'pharma',
			title: 'De la pharma au code',
			content: <>J&apos;ai commencé ma carrière dans l&apos;industrie pharmaceutique, après l&apos;obtention d&apos;une licence professionnelle orientée qualité en 2013, puis d&apos;un diplôme de Responsable Qualité Sécurité Environnement (niveau 6) en 2016, le tout en alternance. Pendant 6 ans, j&apos;ai occupé le poste de spécialiste assurance qualité qualification/validation, dans lequel j&apos;ai pu développer des compétences solides en gestion de projet, en conformité réglementaire et en rigueur opérationnelle — le tout dans un environnement ultra exigeant.</>
		},
		{
			id: 'web',
			title: 'Du process à la créativité',
			content: <>En 2018, l&apos;envie de changement s&apos;est faite sentir. Passionné de web et animé par une fibre créative, j&apos;ai commencé à me former en autodidacte, avant de franchir le cap en 2022 : quitter mon CDI pour suivre une formation de Développeur Web (niveau 5) chez <Link href="https://www.studi.com/" target="_blank" className="font-bold hover:bg-foreground hover:text-background transition-colors ">Studi</Link>. J&apos;ai ensuite poursuivi avec une formation de Concepteur Développeur d&apos;Applications (niveau 6) chez <Link href="https://www.oclock.io/" target="_blank" className="font-bold hover:bg-foreground hover:text-background transition-colors">O&apos;clock</Link>, en alternance chez <Link href="https://www.sanofi.com/" target="_blank" className="font-bold hover:bg-foreground hover:text-background transition-colors">Sanofi</Link>. J&apos;y ai allié mon ancien et nouveau monde — pharma et développement — en créant des applications métier de A à Z. Aujourd&apos;hui, fraîchement diplômé, je suis à la recherche d&apos;une nouvelle opportunité pour mettre à profit mes compétences techniques, ma créativité et mes connaissances sur les technos suivantes : </>
		}
	];

	// Composant réutilisable pour le titre de la page
	const PageTitle = ({ subtitle, className = "" }: PageTitleProps) => (
		<div className={`text-right ${className}`}>
			<h2 className="text-2xl md:text-5xl font-light text-foreground uppercase tracking-widest">
				Parcours
			</h2>
			<h3 className="text-lg md:text-2xl font-light text-foreground tracking-widest">
				{subtitle}
			</h3>
		</div>
	);

	// Composant réutilisable pour un bouton bio
	const BioButton = React.memo(({ id, title, isExpanded, onClick }: { id: string; title: string; isExpanded: boolean; onClick: () => void }) => (
		<button 
			onClick={onClick}
			className="flex items-center justify-end w-full text-right font-light text-background opacity-80 hover:opacity-100 transition-opacity group bg-foreground px-3 py-1"
		>
			<h2 className="text-xs md:text-sm group-hover:text-background/70 transition-colors uppercase md:tracking-widest">{title}</h2>
			<ArrowDownRight 
				className={`ml-2 transition-transform ${isExpanded ? 'rotate-45' : ''}`}
				size={16}
				strokeWidth={1.5}
			/>
		</button>
	));
	
	BioButton.displayName = 'BioButton';

	// Composant réutilisable pour la timeline - mémorisé
	const TimelineComponent = useMemo(() => {
		const TimelineEl = () => (
			<TimelineContext.Provider value={{ activeItemId, setActiveItemId }}>
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
			</TimelineContext.Provider>
		);
		
		TimelineEl.displayName = 'TimelineEl';
		return TimelineEl;
	}, [foregroundColor, activeItemId, setActiveItemId]);

	// Composant réutilisable pour le paragraphe bio avec état isolé
	const BioParagraph = useMemo(() => {
		const BioEl = ({ className = "" }: { className?: string }) => (
			<BioContext.Provider value={{ expandedSection, toggleSection: toggleBioSection }}>
				<div className="flex flex-col items-end self-start">
					<Image 
						src="/assets/images/portrait.jpg" 
						alt="Profile" 
						width={200}
						height={200}
						className="w-1/3 h-1/3 object-cover mb-4 filter grayscale" 
						priority
					/>
					
					{bioSections.map((section, index) => (
						<div key={section.id} className={`w-full ${index < bioSections.length - 1 ? 'mb-4' : ''}`}>
							<BioButton 
								id={section.id}
								title={section.title}
								isExpanded={expandedSection === section.id}
								onClick={() => toggleBioSection(section.id)}
							/>
							{expandedSection === section.id && (
								<p className={`mt-2 font-light text-foreground text-justify opacity-80 text-sm ${className}`}>
									{section.content}
								</p>
							)}
						</div>
					))}
				</div>
			</BioContext.Provider>
		);
		
		BioEl.displayName = 'BioEl';
		return BioEl;
	}, [bioSections, expandedSection, toggleBioSection]);
	
	// Composition des icônes et textes pour le marquee
	const technoElements = useMemo(() => {
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
				name: "Apollo",
				icon: <SiApollographql size={16} className="mr-2" />
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
			{
				name: "Linux",
				icon: <SiLinux size={16} className="mr-2" />
			},
			{
				name: "Vite",
				icon: <SiVite size={16} className="mr-2" />
			},
			{
				name: "Vitest",
				icon: <SiVitest size={16} className="mr-2" />
			},
			{
				name: "Jest",
				icon: <SiJest size={16} className="mr-2" />
			},
			{
				name: "Three.js",
				icon: <SiThreedotjs size={16} className="mr-2" />
			},
			{
				name: "Swagger",
				icon: <SiSwagger size={16} className="mr-2" />
			},
			{
				name: "Cypress",
				icon: <SiCypress size={16} className="mr-2" />
			},
			{
				name: "Figma",
				icon: <SiFigma size={16} className="mr-2" />
			},
		];
		
		return technos.map((tech) => (
			<div key={tech.name} className="flex items-center mx-4">
				{tech.icon}
				<span className="text-sm">{tech.name}</span>
			</div>
		));
	}, []);

	// Composant qui renvoie les éléments du Marquee - mémorisé pour éviter les rerenders
	const MarqueeComponent = useMemo(() => {
		const MarqueeEl = () => (
			<Marquee
				speed={30}
				gradient={false}
				pauseOnHover={true}
				direction="right"
				className="h-10 tracking-widest text-foreground/80 hover:text-foreground transition-colors duration-300 ease-in-out"
			>
				{technoElements}
			</Marquee>
		);
		
		MarqueeEl.displayName = 'MarqueeEl';
		return MarqueeEl;
	}, [technoElements]);

	// Marquee du haut mémorisé
	const HeaderMarquee = useMemo(() => (
		<Marquee
			speed={50}
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
				{/* Titre - Visible uniquement sur mobile */}
				<div
					className="md:hidden absolute top-0 right-0 w-auto h-auto pb-5 pr-10 text-right bg-background z-10"
					style={{
						top: "var(--frame-size)",
						right: "var(--frame-size)",
					}}
				>
					<PageTitle subtitle="Atypique & cohérent" className="ml-10 mt-10" />
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
					className="hidden md:flex md:flex-col md:justify-between absolute top-0 right-0 w-1/3 h-[calc(100%-var(--frame-size)*2)]"
					style={{
						top: "var(--frame-size)",
						right: "var(--frame-size)",
						bottom: "var(--frame-size)",
					}}
				>
					{/* Titre - Version Desktop */}
					<div className="text-right pr-10 pt-10 pb-5">
						<PageTitle subtitle="Atypique & cohérent" />
					</div>

					{/* Bio - Version Desktop */}
					<div className="flex-grow pr-10 overflow-y-auto">
						<BioParagraph className="text-sm" />
					</div>
				</div>
				
				{/* Marquee fixe en bas pour desktop */}
				<div 
					className="hidden md:block fixed z-10 pr-10 w-1/3 pb-4"
					style={{
						bottom: "var(--frame-size)",
						right: "var(--frame-size)",
						height: "2rem"
					}}
				>
					<MarqueeComponent />
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
						<MarqueeComponent />
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
