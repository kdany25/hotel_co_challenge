//React Query
import { ReactQueryHydrate } from "@/lib/ReactQueryHydrate";
import getQueryClient from "@/lib/getQueryClient";
import { getPostsQueryFn } from "@/utils/postsQueryFns";
import { dehydrate } from "@tanstack/react-query";

//Components
import Container from "@/components/Container/Container";
import { Hotels } from "@/components/Hotels/Hotels";

export default async function Home() {
	const queryClient = getQueryClient();
	await queryClient.prefetchInfiniteQuery(["posts"], getPostsQueryFn);
	const dehydratedState = dehydrate(queryClient);

	return (
		<div>
			<Container>
				<div>
					<div>
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
