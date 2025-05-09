import Overlay from "@/components/organisms/Overlay";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import {
	LiaBehance,
	LiaLinkedinIn,
	LiaGithub,
	LiaDribbble,
} from "react-icons/lia";
import ContactForm from "@/components/templates/ContactForm";

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
				<div
					className="absolute top-0 left-0 w-auto h-auto  flex items-center justify-center"
					style={{
						top: "var(--frame-size)",
						left: "var(--frame-size)",
					}}
				>
					<h2 className="text-2xl md:text-5xl font-light text-foreground uppercase tracking-widest ml-10 mt-10">
						Contact
					</h2>
				</div>

				<div
					className="absolute bottom-0 right-0 w-[calc(100%-calc(var(--frame-size)*2))] md:w-[calc(100%-calc(var(--frame-size)*2))] 2xl:h-[calc(100%-calc(var(--frame-size)*2))]"
					style={{
						bottom: "var(--frame-size)",
						left: "var(--frame-size)",
					}}
				>
					<div className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 justify-between px-5 md:p-0 2xl:justify-center 2xl:items-center 2xl:h-full 2xl:pt-[10vh] 2xl:max-w-[50vw] 2xl:mx-auto ">
						<ContactForm />

						<section className="flex flex-col gap-1 md:gap-2 w-full md:w-1/2 md:pr-10 md:pb-10 md:justify-end md:items-end 2xl:p-0 2xl:w-1/3">
							<div className="text-sm font-light text-foreground/80 flex flex-row-reverse md:flex-row justify-between md:justify-end items-center gap-2">
								<p>Bordeaux, France</p>
								<MapPin size={24} strokeWidth={0.8} />
							</div>
							<div className="text-sm font-light text-foreground/80 flex flex-row-reverse md:flex-row justify-between md:justify-end items-center gap-2">
								<p>kevin.bourgitteau@gmail.com</p>
								<Mail size={24} strokeWidth={0.8} />
							</div>
							<div className="text-lg md:text-xl font-light text-foreground/80 flex justify-between self-end w-1/2 md:items-center gap-2 md:mt-5  md:w-1/3">
								<a
									href="https://github.com/ka-be"
									className="cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
								>
									<LiaGithub />
								</a>
								<a
									href="https://www.linkedin.com/in/kevin-bourgitteau/"
									className="cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
								>
									<LiaLinkedinIn />
								</a>
								<a
									href="https://dribbble.com/kaabee"
									className="cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
								>
									<LiaDribbble />
								</a>
								<a
									href="https://www.behance.net/kaabe"
									className="cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
								>
									<LiaBehance />
								</a>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
