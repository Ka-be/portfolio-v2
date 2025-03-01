import AnimatedLogo from "@/components/ui/AnimatedLogo";
import Overlay from "@/components/ui/Overlay";
export default function Home() {
	return (
		<div className="h-screen-dynamic w-full font-lexend flex flex-col relative">
			<Overlay />
			<main className="flex-1 flex flex-col items-center justify-center">
				<AnimatedLogo />
				<h1 className="text-xl uppercase font-light tracking-widest mt-4">
					Work in progress
				</h1>
			</main>
		</div>
	);
}
