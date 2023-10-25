"use client";
import { useEffect, useState } from "react";
//Dependencies
import { Range } from "react-date-range";
import { differenceInDays } from "date-fns";

//Component
import Container from "@/components/Container/Container";
import ListingHead from "@/components/listings/ListingHead";
import ListingInfo from "@/components/listings/ListingInfo";

//Type
import { ListingClientProps } from "@/types";

const initialDateRange = {
	startDate: new Date(),
	endDate: new Date(),
	key: "selection",
};

const ListingClient: React.FC<ListingClientProps> = ({ listing }) => {
	const [totalPrice, setTotalPrice] = useState(listing.price);
	const [dateRange, setDateRange] = useState<Range>(initialDateRange);

	useEffect(() => {
		if (dateRange.startDate && dateRange.endDate) {
			const dayCount = differenceInDays(
				dateRange.endDate,
				dateRange.startDate
			);

			if (dayCount && listing.price) {
				setTotalPrice(dayCount * listing.price);
			} else {
				setTotalPrice(listing.price);
			}
		}
	}, [dateRange, listing.price]);

	return (
		<Container>
			<div
				className="
          max-w-screen-lg 
          mx-auto
        "
			>
				<div className="flex flex-col gap-6">
					<ListingHead
						title={listing.title}
						imageSrc={listing.imageSrc}
						locationValue={listing.locationValue}
						id={listing.id}
					/>
					<div
						className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
					>
						<ListingInfo
							user={listing.user}
							description={listing.description}
							roomCount={listing.roomCount}
							guestCount={listing.guestCount}
							bathroomCount={listing.bathroomCount}
							locationValue={listing.locationValue}
						/>
						<div
							className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
						></div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default ListingClient;
