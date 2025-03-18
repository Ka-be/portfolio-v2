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
						Développeur Full-Stack, Bordeaux
					</h2>
				</div>
			</div>
		</>
	);
}
