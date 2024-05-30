import { useFetch } from "../../hooks/useFetch";

export const Posts = () => {
	const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");

	return (
		<div>
			{data.map((post) => (
				<div key={post.id}>{post.body}</div>
			))}
		</div>
	);
};
