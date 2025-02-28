import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Kevin Bourgitteau | Développeur Full Stack & Designer UX/UI - Bordeaux",
	description:
		"Développeur Full Stack JavaScript spécialisé en design et développement d'applications web & mobile. Maîtrise de React, Next.js, TypeScript, Node.js. Basé à Bordeaux, je crée des interfaces modernes et intuitives avec une approche design-first.",
	keywords: [
		"Développeur Full Stack",
		"Designer UX/UI",
		"React",
		"Next.js",
		"TypeScript",
		"Node.js",
		"React Native",
		"Expo",
		"GraphQL",
		"Apollo",
		"Docker",
		"PostgreSQL",
		"MongoDB",
		"Prisma",
		"Jest",
		"Cypress",
		"NestJS",
		"Express",
		"Vite",
		"Design d'interface",
		"Frontend",
		"Backend",
		"Développeur Bordeaux",
		"UX Design",
		"UI Design",
		"Conception d'applications",
		"Design System",
		"Mobile First",
		"Performance Web",
	],
	authors: [{ name: "Kevin Bourgitteau" }],
	creator: "Kevin Bourgitteau",
	publisher: "Kevin Bourgitteau",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "https://kevinbourgitteau.fr",
		siteName: "Kevin Bourgitteau - Développeur Full Stack & Designer UX/UI",
		title: "Kevin Bourgitteau | Expert Full Stack JavaScript & Designer - Bordeaux",
		description:
			"Designer et développeur Full Stack spécialisé en création d'applications web & mobile modernes. Expert React, Next.js, TypeScript et design UX/UI à Bordeaux.",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Kevin Bourgitteau - Développeur Full Stack & Designer UX/UI",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Kevin Bourgitteau | Full Stack & UX/UI Designer - Bordeaux",
		description:
			"Designer et développeur Full Stack créant des applications web & mobile modernes avec React, Next.js et TypeScript. Expert UX/UI basé à Bordeaux.",
		images: ["/og-image.jpg"],
	},
	alternates: {
		canonical: "https://kevinbourgitteau.fr",
	},
	verification: {
		google: "votre-code-verification-google",
	},
	category: "technology",
	formatDetection: {
		telephone: true,
		email: true,
	},
	metadataBase: new URL("https://kevinbourgitteau.fr"),
	applicationName: "Kevin Bourgitteau Portfolio",
	generator: "Next.js",
	referrer: "origin-when-cross-origin",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
		{ media: "(prefers-color-scheme: dark)", color: "#09090b" },
	],
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 5,
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
