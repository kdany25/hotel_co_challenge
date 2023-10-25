import { jsonPlaceholderAxios } from "@/utils/jsonPlaceholderAxios";

export const getPostsQueryFn = async ({ pageParam = 1 }) =>
	jsonPlaceholderAxios
		.get(`/hotels`, { params: { _page: pageParam } })
		.then((res) => res.data);
