import Link from "next/link";
import TestContent from "@/components/TestContent";
import TestCarousel from "@/components/TestCarousel";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <p>Kevin Bourgitteau / Software Engineer</p>
      <TestContent textContent="Start" />
      <TestCarousel />
      <TestContent textContent="End" />
    </div>
  );
}

