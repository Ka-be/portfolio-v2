import TestContent from "@/components/TestContent";
import Overlay from "@/components/UI/Overlay";
import WaveSurface from "@/components/UI/WaveSurface";

export default function ThreejsPage() {
	return (
		<>
			<Overlay />	
			<div className="h-screen w-full font-lexend">
				<div className="relative h-screen w-full">
					<WaveSurface />
					<div 
						className="absolute p-10"
						style={{ 
							top: 'var(--frame-size)',
							left: 'var(--frame-size)'
						}}
					>
						<h1 className="text-8xl font-light text-foreground uppercase">
							Kevin Bourgitteau
						</h1>
						<h3 className="text-5xl font-light text-foreground">
							Développeur Full-Stack
						</h3>
					</div>
				</div>
			</div>
		</>
	);
}
