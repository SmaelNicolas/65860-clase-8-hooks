import { useEffect, useState } from "react";
import { products } from "../../data/items";
import { ItemList } from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading";
import "./itemListContainer.css";

export const ItemListContainer = () => {
	const [loading, setLoading] = useState(true);

	const [myProducts, setMyProducts] = useState();

	useEffect(() => {
		setLoading(true);

		getItems()
			.then((response) => setMyProducts(response))
			.finally(
				setTimeout(() => {
					setLoading(false);
				}, 2000)
			);
	}, []);

	const getItems = () => {
		return new Promise((resolve) => {
			resolve(products);
		});
	};

	return loading ? (
		<Loading />
	) : (
		<section className="container--ItemListContainer">
			{/* TITULO DINAMICO SEGUN LA URL DONDE ESTEMOS */}
			<h2 className="itemListContainer--title">
				 home
			</h2>
			<div className="container--cards">
				<ItemList myProducts={myProducts} />
			</div>
		</section>
	);
};
