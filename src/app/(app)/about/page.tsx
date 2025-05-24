import { Header } from "@/components/header"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "About",
}

export default function Page() {
	return (
		<div className="py-6">
			<Header title="About" />
		</div>
	)
}
