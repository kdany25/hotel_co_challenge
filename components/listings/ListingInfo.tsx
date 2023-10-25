"use client";
//Dependencies
import dynamic from "next/dynamic";
//Hooks
import useCountries from "@/hooks/useGetCountries";
//Type
import { ListingInfoProps } from "@/types";

const Map = dynamic(() => import("@/components/map/Map"), {
	ssr: false,
});

const ListingInfo: React.FC<ListingInfoProps> = ({
	user,
	description,
	guestCount,
	roomCount,
	bathroomCount,

	locationValue,
}) => {
	const { getByValue } = useCountries();

	const coordinates = getByValue(locationValue)?.latlng;

	return (
		<div className="col-span-4 flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<div
					className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
				>
					<div>{guestCount} guests</div>
					<div>{roomCount} rooms</div>
					<div>{bathroomCount} bathrooms</div>
				</div>
			</div>
			<hr />
			<hr />
			<div
				className="
      text-lg font-light text-neutral-500"
			>
				{description}
			</div>
			<hr />
			<Map center={coordinates} />
		</div>
	);
};

export default ListingInfo;
