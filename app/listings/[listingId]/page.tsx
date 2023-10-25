"use client";

//Component
import ListingClient from "./ListingClient";
//Type
import { IParams } from "@/types";

const ListingPage = async ({ params }: { params: IParams }) => {
	const getHouse = async (): Promise<any> => {
		const data = await fetch(
			`https://6536a599bb226bb85dd27493.mockapi.io/hotels/${params.listingId}`
		);
		const posts = await data.json();
		return posts;
	};

	const listing = await getHouse();

	return <ListingClient listing={listing} />;
};

export default ListingPage;
