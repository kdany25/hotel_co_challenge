"use client"
import Image from "next/image";
import { QueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import Container from "@/components/Container/Container";
import ListingCard from "@/components/listings/ListingCard";

const queryClient = new QueryClient();

export default function Home() {
	const fetchPosts = async () => {
		const response = await fetch(
			"https://6536a599bb226bb85dd27493.mockapi.io/hotels"
		);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	};
	const qss = "hotels";
	//@ts-ignore
	const { data, error, isLoading } = useQuery({queryKey:["qss"], queryFn: fetchPosts});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}
	console.log(data)

	return (
		<div>
			<Container>
				<div
					className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
				>
					{data.map((listing: any) => (
						<ListingCard key={listing.id} data={listing} />
					))}
				</div>
			</Container>
		</div>
	);
}
