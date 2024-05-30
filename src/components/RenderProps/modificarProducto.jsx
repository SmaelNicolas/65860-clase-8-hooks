export const modificarProducto = (ComponentRecibido) =>{

    return function cambiePrecio({nombre,precio}){
        let nuevoPrecio = precio + 500;

        return <ComponentRecibido precio={nuevoPrecio} nombre={nombre} />
    }
    
}