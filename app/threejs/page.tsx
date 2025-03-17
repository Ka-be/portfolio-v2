import TestContent from "@/components/TestContent";
import Overlay from "@/components/UI/Overlay";
import AccretionRing from "@/components/UI/AccretionRing";

export default function ThreejsPage() {
	return (
		<>
			<Overlay />	
			<div className="h-screen w-full font-lexend flex flex-col">
				<div className="relative h-screen flex items-center justify-center">
					<AccretionRing />
					<div className="absolute z-20 flex flex-col items-center justify-center">
						<h1 className="text-5xl font-light text-white mb-4 text-center">
							Kevin Bourgitteau
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}
