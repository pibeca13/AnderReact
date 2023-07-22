import { useState, useEffect } from "react";
import {getProductData} from "../../services/asyncMock";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetailContainer(){
    const [product, setProducts] = useState({});
    const {id} = useParams();

    async function requestProducts() {
        const respuesta = await getProductData(id);
        setProducts(respuesta);
    }

    useEffect(() => {
        requestProducts()
    },[]);

    return (
        <>
        <div>
            <img src={product.imagen}></img>
        </div>
        <div>
            <h2>{product.nombre}</h2>
        </div>
        <div>
            <h2>{product.precio}</h2>
        </div>
        <div>
            <h2>{product.descripcion}</h2>
        </div>
        <div>
        <button>ver roducto</button>
        </div>       
        
        </>
    );
}

export default ItemDetailContainer;