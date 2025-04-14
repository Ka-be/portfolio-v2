"use client";

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Overlay from "@/components/organisms/Overlay";
import Marquee from "react-fast-marquee";
import Link from "next/link";


export default function Test() {

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
      

                    <Timeline position="right" className="text-foreground w-full">
                        {/* 2025 */}
                        <TimelineItem>
                            <TimelineOppositeContent color="text.foreground" className="hidden" />
                            <TimelineSeparator>
                                <TimelineConnector className="bg-foreground/30" />
                                <TimelineDot sx={{ borderRadius: 0, bgcolor: 'transparent', border: '1px solid', borderColor: 'text.foreground' }}>
                                    <Typography className="px-2 font-bold tracking-wider">2025</Typography>
                                </TimelineDot>
                                <TimelineConnector className="bg-foreground/30" />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '1.25rem', px: 2 }} className="md:px-3">
                            </TimelineContent>
                        </TimelineItem>
                        
                        <TimelineItem>
                            <TimelineOppositeContent className="hidden" />
                            <TimelineSeparator className="ml-[1.6rem]">
                                <TimelineConnector className="bg-foreground/30" />
                                <TimelineDot variant="outlined" sx={{ borderRadius: 0, borderColor: 'text.foreground/50', width: '0.5rem', height: '0.5rem' }} />
                                <TimelineConnector className="bg-foreground/30" />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '1.25rem', px: 2 }} className="md:px-3">
                                <Typography variant="h6" component="span" className="text-foreground font-medium text-sm">
                                    Projet Futur 2
                                </Typography>
                                <Typography className="text-foreground/60 font-light text-xs mt-1">
                                    Innovation prévue 🚀
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        {/* 2024 */}
                        <TimelineItem>
                            <TimelineOppositeContent color="text.foreground" className="hidden" />
                                
                            <TimelineSeparator>
                                <TimelineConnector className="bg-foreground/30" />
                                <TimelineDot sx={{ borderRadius: 0, bgcolor: 'transparent', border: '1px solid', borderColor: 'text.foreground' }}>
                                    <Typography className="px-2 font-bold tracking-wider">2024</Typography>
                                </TimelineDot>
                                <TimelineConnector className="bg-foreground/30" />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '1.25rem', px: 2 }} className="md:px-3">
                            </TimelineContent>
                        </TimelineItem>
                        
                        <TimelineItem>
                            <TimelineOppositeContent className="hidden" />
                            <TimelineSeparator className="ml-[1.6rem]">
                                <TimelineConnector className="bg-foreground/30" />
                                <TimelineDot variant="outlined" sx={{ borderRadius: 0, borderColor: 'text.foreground/50', width: '0.5rem', height: '0.5rem' }} />
                                <TimelineConnector className="bg-foreground/30" />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '1.25rem', px: 2 }} className="md:px-3">
                                <Typography variant="h6" component="span" className="text-foreground font-medium text-sm">
                                    Portfolio v2
                                </Typography>
                                <Typography className="text-foreground/60 font-light text-xs mt-1">
                                    Next.js 15 💻
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent className="hidden" />
                            <TimelineSeparator className="ml-[1.6rem]">
                                <TimelineConnector className="bg-foreground/30" />
                                <TimelineDot variant="outlined" sx={{ borderRadius: 0, borderColor: 'text.foreground/50', width: '0.5rem', height: '0.5rem' }} />
                                <TimelineConnector className="bg-foreground/30" />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '1.25rem', px: 2 }} className="md:px-3">
                                <Typography variant="h6" component="span" className="text-foreground font-medium text-sm">
                                    Portfolio v1
                                </Typography>
                                <Typography className="text-foreground/60 font-light text-xs mt-1">
                                    Next.js 15 💻
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        

                        {/* 2023 */}
                        <TimelineItem>
                            <TimelineOppositeContent color="text.foreground" className="hidden">
                                
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector className="bg-foreground/30" />
                                <TimelineDot sx={{ borderRadius: 0, bgcolor: 'transparent', border: '1px solid', borderColor: 'text.foreground' }}>
                                    <Typography className="px-2 font-bold tracking-wider">2023</Typography>
                                </TimelineDot>
                                <TimelineConnector className="bg-foreground/30" />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '1.25rem', px: 2 }} className="md:px-3">
                            </TimelineContent>
                        </TimelineItem>
                        
                        <TimelineItem>
                            <TimelineOppositeContent className="hidden" />
                            <TimelineSeparator className="ml-[1.6rem]">
                                <TimelineConnector className="bg-foreground/30" />
                                <TimelineDot variant="outlined" sx={{ borderRadius: 0, borderColor: 'text.foreground/50', width: '0.5rem', height: '0.5rem' }} />
                                <TimelineConnector className="bg-foreground/30" />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '1.25rem', px: 2 }} className="md:px-3">
                                <Typography variant="h6" component="span" className="text-foreground font-medium text-sm">
                                    Premier site web
                                </Typography>
                                <Typography className="text-foreground/60 font-light text-xs mt-1">
                                    HTML/CSS 🏆
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent className="hidden" />
                            <TimelineSeparator>
                                <TimelineConnector className="bg-foreground/30" />
                                <TimelineDot sx={{ borderRadius: 0, bgcolor: 'transparent', border: '1px solid', borderColor: 'text.foreground' }}>
                                <Typography className="px-2 font-bold tracking-wider">2024 → 2025</Typography>
                                </TimelineDot>
                                <TimelineConnector className="bg-foreground/30" />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '1.25rem', px: 2 }} className="md:px-3">
                                <Typography variant="h6" component="span" className="text-foreground font-medium text-sm">
                                Projet longue durée
                                </Typography>
                                <Typography className="text-foreground/60 font-light text-xs mt-1">
                                Développement d'une application fullstack 💼
                                </Typography>
                                <Typography className="text-foreground/50 font-light text-[0.65rem] mt-1">
                                Septembre 2024 - Février 2025
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>


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
