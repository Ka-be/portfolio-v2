"use client";

import React, { useState } from 'react';
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    return (
            <button
					onClick={() => setIsDark(!isDark)}
					className="relative h-8 w-8 flex items-center justify-center"
				>
					<div
						className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
							isDark ? "rotate-180" : "rotate-0"
						}`}
					>
						<Moon
							className={`absolute w-4 h-4 transition-all duration-500 ${
								isDark ? "opacity-0" : "opacity-100"
							}`}
							strokeWidth={1}
						/>
						<Sun
							className={`absolute w-4 h-4 transition-all duration-500 ${
								isDark ? "opacity-100" : "opacity-0"
							}`}
							strokeWidth={1}
						/>
					</div>
			</button>
    );
};

export default DarkModeToggle;