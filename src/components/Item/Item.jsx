import "../Item/Item.css"
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function Item(props) {
    const {id, nombre, precio, descripcion, imagen} = props;

    return (
        
        <div className="tarjetas">
            <h1>{nombre}</h1>
            <p>Precio: $ {precio}</p>
            <p>{descripcion}</p>
            <img src={imagen} className="imagenes" />
            <Link to={`/producto/${id}`}>  
            <button className="botom">ver productos</button>
            </Link>
            <div>
             <ItemCount></ItemCount>
            </div>
        </div>
        
    )
}

export default Item;