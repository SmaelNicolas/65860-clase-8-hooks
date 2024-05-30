import { useEffect, useState } from "react";

export const useFetch = () =>{
    const [data, setData] = useState([]);

    	useEffect(() => {
			fetch("https://jsonplaceholder.typicode.com/posts")
				.then((res) => res.json())
				.then((res) => setData(res))
				.catch((err) => console.log(err));
		}, []);

        return {data}

}