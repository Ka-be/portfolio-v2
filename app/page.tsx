import Overlay from "@/components/organisms/Overlay";
import WaveSurface from "@/components/organisms/WaveSurface";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Home() {
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
				<WaveSurface />
				<div
					className="absolute top-0 left-0 w-auto h-auto"
					style={{
						top: "var(--frame-size)",
						left: "var(--frame-size)",
					}}
				>
					<h1 className="text-3xl md:text-5xl font-light text-foreground uppercase tracking-widest ml-4 mt-4 md:ml-10 md:mt-10 font-lexend">
						Kevin <br /> Bourgitteau
					</h1>
					<h2 className="text-xl md:text-2xl font-light text-foreground tracking-wide ml-4 md:ml-10">
						Concepteur / Développeur d&apos;applications
					</h2>
				</div>

				<div
					className="absolute bottom-0 right-0 w-4/5 md:w-1/3"
					style={{
						bottom: "var(--frame-size)",
						right: "var(--frame-size)",
					}}
				>
					<p className="text-sm font-light text-foreground pr-4 pb-4 md:pr-10 md:pb-10 text-justify opacity-80">
						Basé à Bordeaux, où l&apos;océan n&apos;est jamais bien loin, je suis développeur full stack et concepteur d&apos;applications.
						Récemment diplômé du titre professionnel CDA, passionné par la création d&apos;interfaces et d&apos;expériences fluides,
						je mets à profit mes compétences en design et en développement pour transformer idées et maquettes en projets concrets — avec le sens du détail et la régularité d&apos;une belle houle.
					</p>
				</div>
			</div>
		</div>
	);
}
