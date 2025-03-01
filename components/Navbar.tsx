"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
	const pathname = usePathname();
	const [activePath, setActivePath] = useState("");
	const [hoveredLink, setHoveredLink] = useState<string | null>(null);
	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setActivePath(pathname);
	}, [pathname]);

	const isActive = (path: string) => {
		return activePath === path;
	};

	const links = [
		{ path: "/projects", label: "Projets" },
		{ path: "/about", label: "À propos" },
		{ path: "/contact", label: "Contact" },
	];

	// Détermine quel lien est actif ou survolé pour l'animation
	const activeOrHoveredLink = hoveredLink || activePath;

	return (
		<nav
			className="fixed bottom-0 left-0 right-0 flex justify-between items-center z-50"
			style={{
				height: "8dvmin",
				marginLeft: "8dvmin",
				marginRight: "7dvmin",
			}}
		>
			<div className="flex items-center">
				<Link
					href="/"
					className="opacity-70 hover:opacity-100 transition-opacity h-full"
				>
					<Image
						src="/assets/images/logo.svg"
						alt="Logo"
						width={20}
						height={20}
					/>
				</Link>
			</div>

			<div
				className="flex items-center space-x-4 text-xs font-light relative"
				ref={navRef}
			>
				{links.map((link) => (
					<Link
						key={link.path}
						href={link.path}
						className={`opacity-70 hover:opacity-100 transition-opacity uppercase tracking-wide p-1 relative`}
						onMouseEnter={() => setHoveredLink(link.path)}
						onMouseLeave={() => setHoveredLink(null)}
					>
						{link.label}
					</Link>
				))}

				{/* Ligne animée qui se déplace entre les liens */}
				{links.some((link) => link.path === activeOrHoveredLink) && (
					<motion.div
						className="absolute bottom-0 h-[1px] bg-foreground"
						initial={false}
						animate={{
							width: "2rem",
							x:
								links.findIndex(
									(link) => link.path === activeOrHoveredLink
								) * 83, // Ajustez cette valeur selon l'espacement de vos liens
							opacity: 1,
						}}
						transition={{
							duration: 0.3,
							ease: "easeInOut",
						}}
					/>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
