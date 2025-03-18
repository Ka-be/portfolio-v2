import TestContent from "@/components/TestContent";
import Overlay from "@/components/UI/Overlay";

export default function ProjectsPage() {
	return (
		<>
			<Overlay />
			<div className="w-[calc(100%-calc(var(--frame-size)*1.8))] h-[calc(100dvh-calc(var(--frame-size)*2))] font-lexend flex items-center justify-center bg-red-500 m-[var(--frame-size)]">
				<p className="h-1/2 w-1/2 flex items-center justify-center">
					Hello
				</p>
			</div>
			<div className="w-[calc(100%-calc(var(--frame-size)*1.8))] h-[calc(100dvh-calc(var(--frame-size)*2))] font-lexend flex items-center justify-center bg-blue-500 m-[var(--frame-size)]">
				<p className="h-1/2 w-1/2 flex items-center justify-center">
					Hello 2
				</p>
			</div>
			<div className="w-[calc(100%-calc(var(--frame-size)*1.8))] h-[calc(100dvh-calc(var(--frame-size)*2))] font-lexend flex items-center justify-center bg-green-500 m-[var(--frame-size)]">
				<p className="h-1/2 w-1/2 flex items-center justify-center">
					Hello 3
				</p>
			</div>
		</>
	);
}
