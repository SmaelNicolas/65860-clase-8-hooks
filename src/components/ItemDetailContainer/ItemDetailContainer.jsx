import React, { useEffect, useState } from "react";
import { products } from "../../data/items";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading";

export const ItemDetailContainer = () => {
	const [itemFiltered, setItemFiltered] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		getItem(1) 
			.then((response) => setItemFiltered(response))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
	}, []);

	const getItem = (valueToFilter) => {
		return new Promise((resolve) => {
			resolve(products.find((item) => item.id === Number(valueToFilter)));
		});
	};

	return loading ? <Loading /> : <ItemDetail itemFiltered={itemFiltered} />;
};
