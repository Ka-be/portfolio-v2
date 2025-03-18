
import TestContent from "@/components/TestContent";
import Overlay from "@/components/UI/Overlay";

export default function ContactPage() {
	return (
		<>
			<Overlay />
			<div className="h-screen-dynamic md:h-full w-full font-lexend flex flex-col">
				<TestContent textContent="Contact" />
			</div>
		</>
	);
}
