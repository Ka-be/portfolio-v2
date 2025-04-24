import type { Metadata, Viewport } from "next";
import { Lexend, Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/lib/contexts/ThemeContext";

const lexend = Lexend({
	variable: "--font-lexend",
	subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
		{ media: "(prefers-color-scheme: dark)", color: "#09090b" },
	],
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export const metadata: Metadata = {
	title: "Kevin Bourgitteau | Concepteur / Développeur d'applications - Bordeaux",
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
		siteName: "Kevin Bourgitteau | Concepteur / Développeur d'applications - Bordeaux",
		title: "Kevin Bourgitteau | Développeur Full Stack & Designer UX/UI - Bordeaux",
		description:
			"Designer et développeur Full Stack spécialisé en création d'applications web & mobile modernes. Expert React, Next.js, TypeScript et design UX/UI à Bordeaux.",
		images: [
			{
				url: "https://kevinbourgitteau.fr/assets/images/og-image.webp",
				width: 1200,
				height: 630,
				alt: "Kevin Bourgitteau | Concepteur / Développeur d'applications - Bordeaux",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Kevin Bourgitteau | Concepteur / Développeur d'applications - Bordeaux",
		description:
			"Développeur Full stack & Designer créant des applications web & mobile modernes avec React, Next.js et TypeScript. Expert UX/UI basé à Bordeaux.",
		images: ["https://kevinbourgitteau.fr/assets/images/og-image.webp"],
	},
	alternates: {
		canonical: "https://kevinbourgitteau.fr",
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
	icons: {
		icon: [
			{ url: "/assets/favicons/favicon.ico", sizes: "any" },
			{
				url: "/assets/favicons/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				url: "/assets/favicons/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/assets/favicons/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				url: "/assets/favicons/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
		apple: [
			{
				url: "/assets/favicons/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
		other: [
			{
				rel: "mask-icon",
				url: "/assets/favicons/safari-pinned-tab.svg",
				color: "#09090b",
			},
			{
				rel: "manifest",
				url: "/assets/favicons/site.webmanifest",
			},
		],
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
				className={`${lexend.variable} ${inter.className} antialiased`}
			>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
