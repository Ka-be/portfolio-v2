import React from "react";
import { FaGithub, FaDribbble, FaBehance, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="absolute bottom-0 left-0 right-0 flex justify-between items-center h-10 w-full px-8">
			<h2 className="text-xs opacity-70">
				Kevin Bourgitteau / {currentYear}
			</h2>
			<div className="flex gap-4 items-center">
				<a
					href="https://github.com/Ka-be"
					target="_blank"
					rel="noopener noreferrer"
					className="opacity-50 hover:opacity-100 transition-opacity"
				>
					<FaGithub size={15} />
				</a>
				<a
					href="https://dribbble.com/Kaabee"
					target="_blank"
					rel="noopener noreferrer"
					className="opacity-50 hover:opacity-100 transition-opacity"
				>
					<FaDribbble size={15} />
				</a>
				<a
					href="https://www.behance.net/kaabe"
					target="_blank"
					rel="noopener noreferrer"
					className="opacity-50 hover:opacity-100 transition-opacity"
				>
					<FaBehance size={15} />
				</a>
				<a
					href="https://www.linkedin.com/in/kevin-bourgitteau/"
					target="_blank"
					rel="noopener noreferrer"
					className="opacity-50 hover:opacity-100 transition-opacity"
				>
					<FaLinkedin size={15} />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
