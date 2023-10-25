import Container from "@/components/Container/Container";
import { Hotels } from "@/components/Hotels/Hotels";
import { ReactQueryHydrate } from "@/lib/ReactQueryHydrate";
import getQueryClient from "@/lib/getQueryClient";
import { getPostsQueryFn } from "@/utils/postsQueryFns";
import { dehydrate } from "@tanstack/react-query";

export default async function Home() {
	const queryClient = getQueryClient();
	await queryClient.prefetchInfiniteQuery(["posts"], getPostsQueryFn);
	const dehydratedState = dehydrate(queryClient);

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
						border
						border-green-500
          "
				>
					<div className="border border-red-500 w-full">
						<ReactQueryHydrate state={dehydratedState}>
							<div>
								<Hotels />
							</div>
						</ReactQueryHydrate>
					</div>
				</div>
			</Container>
		</div>
	);
}
