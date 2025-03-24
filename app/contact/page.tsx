
import TestContent from "@/components/TestContent";
import Overlay from "@/components/UI/Overlay";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function ContactPage() {
	return (
		<div className="h-screen w-screen overflow-hidden relative">
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

				<div className="absolute top-0 left-0 w-auto h-auto"
					style={{
						top: 'var(--frame-size)',
						left: 'var(--frame-size)'
					}}
				>
					<h2 className="text-5xl font-light text-foreground uppercase tracking-widest ml-10 mt-10">
						Contact
					</h2>
				</div>

				<div className="absolute bottom-0 right-0 w-4/5 md:w-1/3 "
					style={{
						bottom: 'var(--frame-size)',
						right: 'var(--frame-size)'
					}}
				>
					<form className="flex flex-col gap-4 w-full pr-10 pb-10">
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
							className="bg-foreground text-background px-4 py-2 rounded-md mt-2 hover:bg-foreground/80 transition-colors"
						>
							Envoyer
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
