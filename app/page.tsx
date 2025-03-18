import Overlay from "@/components/UI/Overlay";
import WaveSurface from "@/components/UI/WaveSurface";
export default function Home() {
	return (
		<>
			<Overlay />
			<div className="h-screen-dynamic md:h-full w-full font-lexend flex flex-col">
				{/* <WaveSurface /> */}
				<div className="absolute top-0 left-0 w-full h-full"
					style={{
						top: 'var(--frame-size)',
						left: 'var(--frame-size)'
					}}
				>
					<h1 className="text-5xl font-light text-foreground uppercase tracking-widest ml-10 mt-10">
						Kevin <br /> Bourgitteau
					</h1>
					<h2 className="text-2xl font-light text-foreground tracking-widest ml-10">
						Développeur Full-Stack
					</h2>
				</div>

				<div className="absolute bottom-0 right-0 w-4/5 md:w-1/2 "
					style={{
						bottom: 'var(--frame-size)',
						right: 'var(--frame-size)'
					}}
				>
					<p className="text-md font-light text-foreground pr-10 pb-10 text-justify opacity-80">
					Développeur concepteur d'applications web et mobile fraîchement titulaire du titre professionnel RNCP. Passionné par la création d'expériences numériques innovantes, je combine expertise technique et créativité pour donner vie à des projets web ambitieux. Basé à Bordeaux, je suis à la recherche de nouveaux défis dans le développement d'applications modernes et performantes.
					</p>
				</div>
			</div>
		</>
	);
}
