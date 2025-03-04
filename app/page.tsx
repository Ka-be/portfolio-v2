import AnimatedLogo from "@/components/ui/AnimatedLogo";
import TestContent from "@/components/TestContent";
import TestCarousel from "@/components/TestCarousel";
import Overlay from "@/components/ui/Overlay";
import ParticlesPortrait from "@/components/ui/ParticlesPortrait";

export default function Home() {
	return (
		<>
			<Overlay />
			<div className="h-screen-dynamic md:h-full w-full font-lexend flex flex-col">
				<TestContent textContent="Moi c'est Kevin." />
				<TestCarousel />
				<TestContent textContent="Et c'est déjà pas mal." />
			</div>
		</>
	);
}
