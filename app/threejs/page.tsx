import TestContent from "@/components/TestContent";
import Overlay from "@/components/UI/Overlay";
import WaveSurface from "@/components/UI/WaveSurface";

export default function ThreejsPage() {
	return (
		<>
			<Overlay />	
			<div className="h-screen w-full font-lexend flex flex-col">
				<div className="relative h-screen flex items-center justify-center">
					<WaveSurface />
					<div className="absolute flex justify-center items-start">
						<h1 className="text-5xl font-light text-white mb-4 text-center">
							Kevin Bourgitteau
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}
