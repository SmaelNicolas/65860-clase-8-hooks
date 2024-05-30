import { useCount } from "../../hooks/useCount";
import "./itemCount.css";

export const ItemCount = ({ stock }) => {
	const {count , decrement , increment , addToCart } = useCount(stock)

	return (
		<div className="container--itemCount">
			<div className="container--itemCount--buttons">
				<button className="itemCount--button" onClick={decrement}>
					-
				</button>
				<div className="itemCount--count">{count}</div>
				<button className="itemCount--button" onClick={increment}>
					+
				</button>
			</div>
			<button onClick={addToCart} className="itemCount--buttonCart">
				Add to Cart
			</button>
		</div>
	);
};
