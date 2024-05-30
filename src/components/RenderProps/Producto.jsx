import React from "react";

export const Producto = ({ precio, nombre }) => {
	return (
		<div>
			<div>Nombre : {nombre}</div>
			<div>Precio : {precio}</div>
		</div>
	);
};
