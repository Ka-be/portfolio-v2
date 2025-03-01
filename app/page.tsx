import AnimatedLogo from "@/components/ui/AnimatedLogo";
import TestContent from "@/components/TestContent";
import TestCarousel from "@/components/TestCarousel";

export default function Home() {
	return (
		<div className="h-screen-dynamic md:h-full w-full font-lexend flex flex-col">
			<TestContent textContent="Moi c'est Kevin." />
			<TestCarousel />
			<TestContent textContent="Et c'est déjà pas mal." />
		</div>
	);
}
