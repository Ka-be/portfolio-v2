"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
}

export const Timeline = ({ data }: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [bulletPositions, setBulletPositions] = useState<number[]>([]);
  const [activeIndices, setActiveIndices] = useState<boolean[]>([]);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start 0", "end 1"]
  });

  // Calculer les positions des bullet points une fois que la hauteur est connue
  useEffect(() => {
    if (height > 0 && data.length > 0) {
      // Calculer où chaque bullet point se trouve sur la ligne
      const positions = data.map((_, index) => {
        // Les bullet points sont régulièrement espacés
        const itemHeight = height / data.length;
        // Ajouter un petit offset pour que le bullet s'allume juste quand la ligne le touche
        return (index * itemHeight) + 10; // 10px est l'offset pour toucher le bullet
      });
      setBulletPositions(positions);
      setActiveIndices(new Array(data.length).fill(false));
    }
  }, [height, data.length]);

  // Suivre la progression du scroll et mettre à jour les bullet points en conséquence
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Position actuelle de la ligne rouge
    const linePosition = latest * height;
    
    // Vérifier chaque bullet point
    const newActiveIndices = bulletPositions.map(position => linePosition >= position);
    
    // Ne mettre à jour que si nécessaire
    if (JSON.stringify(newActiveIndices) !== JSON.stringify(activeIndices)) {
      setActiveIndices(newActiveIndices);
    }
  });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  return (
    <div className="relative w-full h-full overflow-y-auto md:overflow-y-auto scrollbar-hide" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-foreground max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className={`h-4 absolute left-6 w-4 flex items-center justify-center transition-colors duration-300 ${activeIndices[index] ? 'bg-foreground' : 'bg-neutral-800'}`}>
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 font-lexend">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500 font-lexend">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              width: "100%",
              backgroundColor: "hsl(var(--foreground))",
              boxShadow: "0 0 8px hsl(var(--foreground)), 0 0 15px hsl(var(--foreground))",
              position: "absolute",
              top: 0,
              left: 0,
              transformOrigin: "bottom",
            }}
          />
        </div>
      </div>
    </div>
  );
};
