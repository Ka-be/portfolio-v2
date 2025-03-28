"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DarkModeToggle from "./UI/DarkModeToggle";

const Navbar = () => {
	const pathname = usePathname();
	const [activePath, setActivePath] = useState("");
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		setActivePath(pathname);
	}, [pathname]);

	const links = [
		{ path: "/projects", label: "Projets" },
		{ path: "/about", label: "À propos" },
		{ path: "/contact", label: "Contact" },
	];

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

			<div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center text-xs font-light">
				<DarkModeToggle />
			</div>

			<div className="flex items-center space-x-4 text-xs font-light">
				{links.map((link) => {
					const isActive = activePath === link.path;

					// Si le lien est actif, on affiche un lien vers l'accueil
					if (isActive) {
						return (
							<Link
								key={link.path}
								href="/"
								className="relative group p-1 flex justify-center"
								// style={{ minWidth: "4rem" }}
							>
								<span className="opacity-70 group-hover:opacity-100 transition-opacity uppercase tracking-wide">
									/
								</span>
								<span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
							</Link>
						);
					}

					// Sinon on affiche le lien normal
					return (
						<Link
							key={link.path}
							href={link.path}
							className="relative group p-1 flex justify-center"
							// style={{ minWidth: "4rem" }}
						>
							<span className="opacity-70 group-hover:opacity-100 transition-opacity uppercase tracking-wide">
								{link.label}
							</span>
							<span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default Navbar;
