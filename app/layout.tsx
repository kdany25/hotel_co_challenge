import Navbar from "@/components/Navbar/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import SearchModal from "@/components/Modals/SearchModal";

export const metadata: Metadata = {
	title: "Hotels&Co",
	description: "Hotels&Co",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<SearchModal />
				<Navbar />
				<div className="pb-20 pt-28">{children}</div>
			</body>
		</html>
	);
}
