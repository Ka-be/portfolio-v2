import Footer from "@/components/Footer";
import AnimatedLogo from "@/components/UI/AnimatedLogo";

export default function Home() {
  return (
    <div className="min-h-screen font-lexend flex flex-col items-center justify-center">
      <AnimatedLogo />
      <h1 className="text-xl uppercase font-light tracking-widest">Work in progress</h1>
      <Footer />
    </div>
  );
}

