"use client";
import ListingClient from "./ListingClient";

interface IParams {
	listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
	const listing = {
		title: "Lavonhaven",
		description:
			"Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
		imageSrc: "https://loremflickr.com/640/480/city",
		roomCount: 96,
		bathroomCount: 92,
		guestCount: 17,
		locationValue: "BG",
		price: 50,
		createdAt: 1698166784,
		category: "9702",
		id: "1",
	};
	return <ListingClient listing={listing} />;
};

export default ListingPage;
