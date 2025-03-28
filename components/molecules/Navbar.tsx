"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DarkModeToggle from "../atoms/DarkModeToggle";
import Logo from "../atoms/Logo";
import { Home, FolderOpen, User, Mail } from "lucide-react";

const Navbar = () => {
	const pathname = usePathname();
	const [activePath, setActivePath] = useState("");
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		setActivePath(pathname);
	}, [pathname]);

	const links = [
		{ path: "/", label: "Accueil", icon: Home },
		{ path: "/projects", label: "Projets", icon: FolderOpen },
		{ path: "/about", label: "À propos", icon: User },
		{ path: "/contact", label: "Contact", icon: Mail },
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
					className="opacity-70 hover:opacity-100 transition-opacity h-[4dvmin]"
				>
					<Logo />
				</Link>
			</div>

			<div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center text-xs font-light">
				<DarkModeToggle />
			</div>

			<div className="flex items-center space-x-4 text-xs font-light">
				{links.map((link) => {
					const isActive = activePath === link.path;
					const Icon = link.icon;
					return (
						<Link
							key={link.path}
							href={link.path}
							className="relative group p-1 flex justify-center"
						>
							<span
								className={`transition-opacity uppercase tracking-widest text-xs ${
									isActive
										? "opacity-100"
										: "opacity-50 group-hover:opacity-100"
								}`}
							>
								<span className="md:hidden">
									<Icon size={16} strokeWidth={1} />
								</span>
								<span className="hidden md:inline">
									{link.label}
								</span>
							</span>
							<span className="absolute bottom-0 left-0 w-full h-[0.2px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default Navbar;
