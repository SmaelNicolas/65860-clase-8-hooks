import { useFetch } from "../../hooks/useFetch";

export const Comments = () => {
	const { data } = useFetch("https://jsonplaceholder.typicode.com/comments");

	return (
		<div>
			{data.map((comment) => (
				<div key={comment.id}>{comment.email}</div>
			))}
		</div>
	);
};
