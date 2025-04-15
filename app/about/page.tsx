"use client";

import Overlay from "@/components/organisms/Overlay";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { Timeline } from "@mui/lab";
import useCssVariable from "@/hooks/useCssVariable";
import React, { useState } from "react";
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
	]

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
						Parcours
					</h2>
					<h3 className="text-2xl font-light text-foreground tracking-widest ml-10">
						Pas classique, mais ça me plait.
					</h3>
				</div>

				<section 
					className="absolute bottom-0 left-20 w-4/5 md:w-1/3 overflow-y-auto h-screen mt-32"
					style={{
						top: "var(--frame-size)",
						left: "var(--frame-size)",
					}}>

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
					
				</section>

				<div
					className="absolute bottom-0 right-0 w-4/5 md:w-1/3 "
					style={{
						bottom: "var(--frame-size)",
						right: "var(--frame-size)",
					}}
				>
					{/* <img src="/assets/images/portrait.jpg" alt="Profile" className="w-1/2 h-1/2 object-cover" /> */}
					<p className="text-md font-light text-foreground pr-10 pb-20 text-justify opacity-80">
						Développeur concepteur d'applications web et mobile
						fraîchement titulaire du titre professionnel RNCP.
						Passionné par la création d'expériences numériques
						innovantes, je combine expertise technique et créativité
						pour donner vie à des projets web ambitieux. Basé à
						Bordeaux.
					</p>
				</div>

				<Marquee
					speed={20}
					gradient={false}
					pauseOnHover={false}
					autoFill={true}
					direction="right"
					className="text-foreground opacity-90 hover:opacity-100 transition-opacity font-light absolute bottom-10 right-0 self-end mr-8 ml-2"
				>
					{technos.map((tech) => (
						<div key={tech.name} className="flex items-center mx-4">
							{tech.icon}
							<span className="text-sm">{tech.name}</span>
						</div>
					))}
				</Marquee>

			</div>
		</div>
	);
}
