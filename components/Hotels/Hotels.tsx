"use client";
import { getPostsQueryFn } from "@/utils/postsQueryFns";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { Fragment } from "react";
import ListingCard from "../listings/ListingCard";

export const Hotels = () => {
	const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
		useInfiniteQuery<any[]>({
			queryKey: ["house"],
			queryFn: getPostsQueryFn,
			getNextPageParam: (_, pages) => pages.length + 1,
		});

	if (!data) return <div>Not found</div>;

	return (
		<div>
			{data.pages.map((group, i) => (
				<Fragment key={i}>
					{group.map((post: any) => (
						<ListingCard key={post.id} data={post} />
					))}
				</Fragment>
			))}
			{isFetchingNextPage ? (
				<div>Loading more...</div>
			) : hasNextPage ? (
				<button onClick={() => fetchNextPage()}>Load More</button>
			) : null}
		</div>
	);
};
