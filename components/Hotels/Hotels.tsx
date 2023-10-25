"use client";

//React Query
import { getPostsQueryFn } from "@/utils/postsQueryFns";
import { useInfiniteQuery } from "@tanstack/react-query";

//Components
import ListingCard from "../listings/ListingCard";
import Button from "../Button/Button";
import Loader from "../Loading/Loader";

export const Hotels = () => {
	const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
		useInfiniteQuery<any[]>({
			queryKey: ["house"],
			queryFn: getPostsQueryFn,
			getNextPageParam: (_, pages) => pages.length + 1,
		});

	if (!data)
		return (
			<div>
				<Loader />
			</div>
		);

	return (
		<div>
			{data.pages.map((group, i) => (
				<div
					key={i}
					className=" 
				grid 
				grid-cols-1 
				sm:grid-cols-2 
				md:grid-cols-3 
				lg:grid-cols-4
				xl:grid-cols-5
				2xl:grid-cols-6
				gap-8"
				>
					{group.map((post: any) => (
						<ListingCard key={post.id} data={post} />
					))}
				</div>
			))}
			{isFetchingNextPage ? (
				<div>
					{" "}
					<Loader />
				</div>
			) : hasNextPage ? (
				<div className="flex justify-center items-center">
					<div className="w-[20%]">
						<Button
							label={"Load More"}
							onClick={() => fetchNextPage()}
						/>
					</div>
				</div>
			) : null}
		</div>
	);
};
