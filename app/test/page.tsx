"use client";

import Overlay from "@/components/organisms/Overlay";
import WaveSurface from "@/components/organisms/WaveSurface";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { AboutTimeline } from "@/components/templates/AboutTimeline";
import { useRef } from "react";

export default function Test() {
	const timelineRef = useRef<HTMLDivElement>(null);

	return (
		<div className="h-[100dvh] w-[100dvw] overflow-hidden relative bg-background text-foreground">
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
					className="absolute top-0 left-0 w-full md:w-1/2 h-[calc(100dvh-calc(var(--frame-size)*2))]"
					style={{
						top: "var(--frame-size)",
						left: "var(--frame-size)",
					}}
				>
					<AboutTimeline ref={timelineRef} />
				</div>

				<div
					className="absolute bottom-0 right-0 w-4/5 md:w-1/3"
					style={{
						bottom: "var(--frame-size)",
						right: "var(--frame-size)",
					}}
				>
					<p className="text-md font-light text-foreground pr-1 pb-1 md:pr-10 md:pb-10 text-justify opacity-80">
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
