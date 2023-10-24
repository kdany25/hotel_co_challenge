import Navbar from "@/components/Navbar/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import SearchModal from "@/components/Modals/SearchModal";
import Providers from "@/provider/QuerryProvider";

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
				<Providers>
				<SearchModal />
				<Navbar />
				<div className="pb-20 pt-28">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
