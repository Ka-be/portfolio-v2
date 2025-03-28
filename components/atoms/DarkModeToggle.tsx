"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/contexts/ThemeContext";

const DarkModeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="relative h-8 w-8 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
		>
			<div
				className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
					theme === "dark" ? "rotate-180" : "rotate-0"
				}`}
			>
				<Moon
					className={`absolute w-4 h-4 transition-all duration-500 ${
						theme === "dark" ? "opacity-0" : "opacity-100"
					}`}
					strokeWidth={1}
				/>
				<Sun
					className={`absolute w-4 h-4 transition-all duration-500 ${
						theme === "dark" ? "opacity-100" : "opacity-0"
					}`}
					strokeWidth={1}
				/>
			</div>
		</button>
	);
};

export default DarkModeToggle;
