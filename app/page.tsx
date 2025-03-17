import AnimatedLogo from "@/components/UI/AnimatedLogo";
import TestContent from "@/components/TestContent";
import TestCarousel from "@/components/TestCarousel";
import Overlay from "@/components/UI/Overlay";

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
