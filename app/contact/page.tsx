import TestContent from "@/components/TestContent";
import Overlay from "@/components/UI/Overlay";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { LiaBehance, LiaLinkedinIn, LiaGithub, LiaDribbble } from "react-icons/lia";


export default function ContactPage() {
	return (
		//HEIGHT A 100DVH
		<div className="h-[100dvh] w-[100dvw] overflow-hidden relative "> 
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

				<div className="absolute top-0 left-0 w-auto h-auto  flex items-center justify-center"
					style={{
						top: 'var(--frame-size)',
						left: 'var(--frame-size)'
					}}
				>
					<h2 className="text-5xl font-light text-foreground uppercase tracking-widest ml-10 mt-10">
						Contact
					</h2>
				</div>

				<div className="absolute bottom-0 right-0 w-[calc(100%-calc(var(--frame-size)*2))] md:w-[calc(100%-calc(var(--frame-size)*2))]"
					style={{
						bottom: 'var(--frame-size)',
						left: 'var(--frame-size)'
					}}
				>
					<section className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 justify-between px-5 md:p-0">
						<form className="flex flex-col gap-4 w-full md:w-5/12 md:pl-10 pb-5 md:pb-10">
							<div className="flex flex-col gap-2">
								<label htmlFor="email" className="text-sm font-light text-foreground/80">Email *</label>
								<input 
									type="email" 
									id="email"
									required
									className="bg-transparent border border-foreground/20 rounded-md p-2 text-foreground focus:border-foreground/60 outline-none"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="name" className="text-sm font-light text-foreground/80">Nom / Prénom</label>
								<input 
									type="text" 
									id="name"
									className="bg-transparent border border-foreground/20 rounded-md p-2 text-foreground focus:border-foreground/60 outline-none"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="message" className="text-sm font-light text-foreground/80">Message</label>
								<textarea 
									id="message"
									rows={4}
									className="bg-transparent border border-foreground/20 rounded-md p-2 text-foreground focus:border-foreground/60 outline-none resize-none"
								/>
							</div>
							<button 
								type="submit"
								className="bg-foreground text-background px-4 py-2 rounded-md mt-2 hover:bg-blue-500 transition-colors"
							>
								Envoyer
							</button>
						</form>

						<section className="flex flex-col gap-1 md:gap-2 w-full md:w-1/2 md:pr-10 md:pb-10 md:justify-end md:items-end">
							<div className="text-sm font-light text-foreground/80 flex flex-row-reverse md:flex-row justify-between md:justify-end items-center gap-2">
								<p>Bordeaux, France</p>
								<MapPin 
									size={24} strokeWidth={0.8}
								/>
							</div>
							<div className="text-sm font-light text-foreground/80 flex flex-row-reverse md:flex-row justify-between md:justify-end items-center gap-2">
								<p>kevin.bourgitteau@gmail.com</p>
								<Mail 
									size={24} strokeWidth={0.8}
								/>
								
							</div>
							<div className="text-md md:text-md font-light text-foreground/80 flex justify-end md:items-center gap-2 text-2xl md:mt-5">
								<span className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity"><LiaGithub /></span>
								<span className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity"><LiaLinkedinIn /></span>
								<span className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity"><LiaDribbble /></span>
								<span className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity"><LiaBehance /></span>
							</div>
						</section>
					</section>
				</div>
			</div>
		</div>
	);
}
