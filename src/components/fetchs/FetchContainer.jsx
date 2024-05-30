import React from "react";
import { Comments } from "./Comments";
import { Posts } from "./Posts";
import { Users } from "./Users";

export const FetchContainer = () => {
	return (
		<>
			<Posts />
			<Users />
			<Comments />
		</>
	);
};
