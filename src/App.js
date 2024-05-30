import "./App.css";
// import { Button } from "./components/HoC/Button";
// import { addOnClick } from "./components/HoC/addOnClick";
// import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
// import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
// import { FetchContainer } from "./components/fetchs/FetchContainer";

import { Navbar } from "./components/Navbar/Navbar";
import { FetchContainer } from "./components/fetchs/FetchContainer";
// import { Producto } from "./components/RenderProps/Producto";
// import { modificarProducto } from "./components/RenderProps/modificarProducto";

function App() {

	// const ButtonHoC = addOnClick(Button, "HOLA");

	// const ProductoModificado = modificarProducto(Producto)

	return (
		<div className="container--app">
			<Navbar />
			<FetchContainer />
			{/* <ItemListContainer /> */}
			{/* <ItemDetailContainer /> */}
			{/* <Button /> */}
			{/* <ButtonHoC /> */}
			{/* <Producto nombre={"Producto 1"} precio={1000} /> */}
			{/* <ProductoModificado nombre={"Producto 2"} precio={1000} /> */}
			{/* <FetchContainer /> */}
		</div>
	);
}

export default App;
