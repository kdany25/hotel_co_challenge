"use client";

import Image from "next/image";
//Hooks
import useCountries from "@/hooks/useGetCountries";
//components
import Heading from "@/components/Heading/Heading";
import HeartButton from "@/components/Button/HeartButton";

//Type
import { ListingHeadProps }  from "@/types";

const ListingHead: React.FC<ListingHeadProps> = ({
	title,
	locationValue,
	imageSrc,
	id,
	currentUser,
}) => {
	const { getByValue } = useCountries();

	const location = getByValue(locationValue);

	return (
		<>
			<Heading
				title={title}
				subtitle={`${location?.region}, ${location?.label}`}
			/>
			<div
				className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
			>
				<Image
					src={imageSrc}
					fill
					className="object-cover w-full"
					alt="Image"
				/>
				<div
					className="
            absolute
            top-5
            right-5
          "
				>
					<HeartButton listingId={id} currentUser={currentUser} />
				</div>
			</div>
		</>
	);
};

export default ListingHead;
