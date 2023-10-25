import "./globals.css";
import type { Metadata } from "next";
//Query Provider
import { Providers } from "@/provider/QuerryProvider";
//Component
import SearchModal from "@/components/Modals/SearchModal";
import Navbar from "@/components/Navbar/NavBar";

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
