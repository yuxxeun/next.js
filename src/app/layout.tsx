import { Providers } from "@/components/providers"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Toast } from "@/components/ui/toast"

import "./globals.css"

const fontSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
})
const fontMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
})

export const metadata: Metadata = {
	title: {
		template: "%s / Intent UI Starter Kit with Next",
		default: "Intent UI Starter Kit with Next",
	},
	description:
		"Next.js 15 Starter Kit with Tailwind CSS, TypeScript, React, React Aria Components, Intent UI Components, Framer Motion, and more.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true} className={`${fontSans.variable} ${fontMono.variable}`}>
			<body className="min-h-svh antialiased">
				<Toast />
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
