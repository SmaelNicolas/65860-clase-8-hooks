import { CartWidget } from "../CartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="container--navbar">
			<a href="/" className="navbar--logo">
				🪐
			</a>

			<ul className="navbar--ul">
				<li className="navbar--ul--li">
					<a href="/category/keyboard" className="navbar--ul--li--a">
						Keyboards
					</a>
				</li>
				<li className="navbar--ul--li">
					<a href="/category/mouse" className="navbar--ul--li--a">
						Mouses
					</a>
				</li>
				<li className="navbar--ul--li">
					<a href="/category/pad" className="navbar--ul--li--a">
						Pads
					</a>
				</li>
			</ul>
			<CartWidget />
		</nav>
	);
};
