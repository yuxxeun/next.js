import { Header } from "@/components/header"

import { Resources } from "./resources"

export default function Home() {
	return (
		<div className="py-6">
			<Header
				title="Intent UI Starter Kit"
				description="Next.js 15 Starter Kit with Tailwind CSS, TypeScript, React, React Aria Components, Intent UI Components, Framer Motion, and more."
			/>
			<Resources />
		</div>
	)
}
