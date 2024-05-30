export const addOnClick = (WrappedComponent , text = "Bienvenidos")=>{

    const handleClick = ()=>{
        alert("HOLA DESDE HoC");
    }

    const AddOnClickComponent = ()=>{
        return <WrappedComponent onClick={handleClick} text={text} />;
    }

    return AddOnClickComponent
}