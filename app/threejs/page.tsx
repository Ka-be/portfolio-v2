import TestContent from "@/components/TestContent";
import Overlay from "@/components/ui/Overlay";
import ThreeComponent from "@/components/ui/ThreeComponent";

export default function Home() {
	return (
		<>
			<Overlay />
			<div className="h-screen-dynamic md:h-full w-full font-lexend flex flex-col">
				<ThreeComponent /> 
			</div>
		</>
	);
}
