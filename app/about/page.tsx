"use client";

import Overlay from "@/components/organisms/Overlay";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { Timeline } from "@mui/lab";
import Typography from "@mui/material/Typography";
import useCssVariable from "@/hooks/useCssVariable";
import React, { useState } from "react";
import TimelineEventItem from "@/components/molecules/TimelineEventItem";
import { timelineData } from "@/data/timeline";

export default function AboutPage() {
	const foregroundColor = useCssVariable('--foreground', '#333333');
	const [activeItemId, setActiveItemId] = useState<number | null>(null);

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
						à propos
					</h2>
					<h3 className="text-2xl font-light text-foreground tracking-widest ml-10">
						Et je développe des trucs.
					</h3>
				</div>

				<section 
					className="absolute bottom-0 left-20 w-4/5 md:w-1/3 overflow-y-auto h-screen mt-40"
					style={{
						top: "var(--frame-size)",
						left: "var(--frame-size)",
					}}>

				<Timeline position="right" className="text-foreground w-full text-sm">
                    
                    {/* Item Année fixe pour "Aujourd'hui" */}
                    <TimelineEventItem 
                        id={-1}
                        period="Aujourd'hui"
                        title=""
                        place=""
                        description=""
                        foregroundColor={foregroundColor}
                        isYear={true}
                        activeItemId={activeItemId}
                        setActiveItemId={setActiveItemId}
                    />
                    
                    {/* Items dynamiques depuis timelineData */}
                    {timelineData.map((item) => (
                        <TimelineEventItem 
                            key={item.id}
                            id={item.id}
                            period={item.period}
                            title={item.title}
                            place={item.place}
                            description={item.description}
                            foregroundColor={foregroundColor}
                            activeItemId={activeItemId}
                            setActiveItemId={setActiveItemId}
                        />
                    ))}
                    
                    {/* Item Année fixe pour 2025 */}
                    <TimelineEventItem 
                        id={-2}
                        period="2025"
                        title=""
                        place=""
                        description=""
                        foregroundColor={foregroundColor}
                        isYear={true}
                        activeItemId={activeItemId}
                        setActiveItemId={setActiveItemId}
                    />
                    
                </Timeline>
					
				</section>

				<div
					className="absolute bottom-0 right-0 w-4/5 md:w-1/3 "
					style={{
						bottom: "var(--frame-size)",
						right: "var(--frame-size)",
					}}
				>
					<p className="text-md font-light text-foreground pr-10 pb-10 text-justify opacity-80">
						Développeur concepteur d'applications web et mobile
						fraîchement titulaire du titre professionnel RNCP.
						Passionné par la création d'expériences numériques
						innovantes, je combine expertise technique et créativité
						pour donner vie à des projets web ambitieux. Basé à
						Bordeaux.
					</p>
				</div>
			</div>
		</div>
	);
}
