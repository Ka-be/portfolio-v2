"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DarkModeToggle from "../atoms/DarkModeToggle";
import Logo from "../atoms/Logo";
import { Home, FolderOpen, User, Mail, Menu } from "lucide-react";

const Navbar = () => {
	const pathname = usePathname();
	const [activePath, setActivePath] = useState("");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		setActivePath(pathname);
	}, [pathname]);

	// Fermer le menu si on change de page
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	// Empêcher le défilement quand le menu est ouvert
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen]);

	const links = [
		{ path: "/", label: "Accueil", icon: Home },
		{ path: "/projects", label: "Projets", icon: FolderOpen },
		{ path: "/parcours", label: "Parcours", icon: User },
		{ path: "/contact", label: "Contact", icon: Mail },
	];

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			{/* Menu plein écran pour mobile et tablette */}
			{isMenuOpen && (
				<div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center lg:hidden">
					<button 
						onClick={toggleMenu} 
						className="absolute bottom-6 opacity-100 transition-opacity text-background bg-foreground px-4 py-2 text-sm"
					>
						Fermer
					</button>
					
					<div className="flex flex-col items-center space-y-8">
						{links.map((link) => {
							const isActive = activePath === link.path;
							return (
								<Link
									key={link.path}
									href={link.path}
									className="relative group py-3 px-6 flex flex-col items-center"
									onClick={() => setIsMenuOpen(false)}
								>
									<span
										className={`transition-opacity uppercase tracking-widest text-2xl ${
											isActive
												? "opacity-100"
												: "opacity-50 group-hover:opacity-100"
										}`}
									>
										{link.label}
									</span>
									<span className="absolute bottom-0 left-0 w-full h-[0.3px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
								</Link>
							);
						})}
					</div>
				</div>
			)}

			{/* Navbar */}
			<nav
				className="fixed bottom-0 left-0 right-0 flex justify-between items-center z-40 bg-background"
				style={{
					height: "8dvmin",
					marginLeft: "8dvmin",
					marginRight: "7dvmin",
				}}
			>
				
				<div className="flex items-center w-[4dvmin]">
					<Link
						href="/"
						className="opacity-70 hover:opacity-100 transition-opacity h-[4dvmin]"
					>
						<Logo />
					</Link>
				</div>

				{/* Toggle dark/light */}
				<div className="absolute left-1/2 -translate-x-1/2 flex items-center text-xs font-light">
					<DarkModeToggle />
				</div>

				{/* Liens  */}
				<div className="flex items-center">
					{/* Liens desktop */}
					<div className="hidden lg:flex items-center space-x-4 text-xs font-light">
						{links.map((link) => {
							const isActive = activePath === link.path;
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
										{link.label}
									</span>
									<span className="absolute bottom-0 left-0 w-full h-[0.2px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
								</Link>
							);
						})}
					</div>
					
					{/* Hamburger */}
					<button 
						className="lg:hidden opacity-70 hover:opacity-100 transition-opacity"
						onClick={toggleMenu}
					>
						<Menu size={20} strokeWidth={1} />
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
