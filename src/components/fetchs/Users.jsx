import { useFetch } from "../../hooks/useFetch";

export const Users = () => {
	const { data } = useFetch("https://jsonplaceholder.typicode.com/users");

	return <div>
		{data.map(user=> <div key={user.id}> {user.name}</div>)}
	</div>;
};
