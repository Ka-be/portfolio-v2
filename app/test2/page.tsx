"use client";

import * as React from 'react';
import useCssVariable from '@/hooks/useCssVariable';
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
    const foregroundColor = useCssVariable('--foreground', '#333333');

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
      

                    <Timeline position="right" className="text-foreground w-full text-sm">
                        
                        {/* Item Année */}
                        <TimelineItem>
                            <TimelineOppositeContent className="hidden" />
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: foregroundColor }} />
                                <TimelineDot sx={{ bgcolor: foregroundColor, borderRadius: 0, width: '0.5rem', height: '0.5rem' }} />
                                <TimelineConnector sx={{ bgcolor: foregroundColor }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '1.5rem', px: 2 }} className="md:px-3 flex align-center">
                                <Typography variant="h6" component="span" className="text-background bg-foreground px-2 py-1 shadow-none flex items-center justify-center" sx={{ fontFamily: 'Lexend', fontWeight: 'light', fontSize: '1rem' }}>
                                    Aujourd'hui
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        {/* Item Projet */}
                        <TimelineItem>
                            <TimelineOppositeContent className="hidden" />
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: foregroundColor }} />
                                <TimelineDot variant="outlined" sx={{ borderRadius: 0, borderColor: foregroundColor, width: '0.5rem', height: '0.5rem' }} />
                                <TimelineConnector sx={{ bgcolor: foregroundColor }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '1rem', px: 2 }} className="md:px-3">
                                <Typography component="span" className="text-foreground " sx={{ fontFamily: 'Lexend', fontWeight: 'medium', fontSize: '0.9rem'}}>
                                    Septembre 2025 - Octobre 2025
                                </Typography>
                                <Typography className="text-foreground" sx={{ fontFamily: 'Lexend', fontWeight: 'light', fontSize: '0.8rem' }}>
                                    Développeur web
                                </Typography>
                                <Typography className="text-foreground/60" sx={{ fontFamily: 'Inter', fontSize: '0.7rem' }}>
                                    Indépendant
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                    
                        <TimelineItem>
                            <TimelineOppositeContent className="hidden" />
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: foregroundColor }} />
                                <TimelineDot variant="outlined" sx={{ borderRadius: 0, borderColor: foregroundColor, width: '0.5rem', height: '0.5rem' }} />
                                <TimelineConnector sx={{ bgcolor: foregroundColor }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '1rem', px: 2 }} className="md:px-3">
                                <Typography component="span" className="text-foreground " sx={{ fontFamily: 'Lexend', fontWeight: 'medium', fontSize: '0.9rem'}}>
                                    Juin 2025
                                </Typography>
                                <Typography className="text-foreground" sx={{ fontFamily: 'Lexend', fontWeight: 'light', fontSize: '0.8rem' }}>
                                    Lead designer 
                                </Typography>
                                <Typography className="text-foreground/60" sx={{ fontFamily: 'Inter', fontSize: '0.7rem' }}>
                                    Worduel
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>

                        {/* Item Année */}
                        <TimelineItem>
                            <TimelineOppositeContent className="hidden" />
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: foregroundColor }} />
                                <TimelineDot sx={{ bgcolor: foregroundColor, borderRadius: 0, width: '0.5rem', height: '0.5rem' }} />
                                <TimelineConnector sx={{ bgcolor: foregroundColor }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '1.5rem', px: 2 }} className="md:px-3 flex align-center">
                                <Typography component="span" className="text-background bg-foreground px-2 py-1 shadow-none flex items-center justify-center" sx={{ fontFamily: 'Lexend', fontWeight: 'light', fontSize: '1rem'}}>
                                    2025
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
