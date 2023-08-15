import { useState, useEffect, useContext } from "react";
import { cartContext } from "../../App";
import {getProductData} from "../../services/firebase";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetailContainer/ItemDetailContainer.css"
import { Ripples } from '@uiball/loaders'
import "../Loader/Loader.css"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import "../ItemList/ItemList.css"


function ItemDetailContainer(){
    const [product, setProducts] = useState({});
    const {id} = useParams();
    const {addToCart} = useContext(cartContext)
    const [isLoading, setIsLoading] = useState (true);
    const [isAddedToCart, setIsAddedToCart] = useState (false);

    function handleAddToCart(clickCount){
        addToCart(product, clickCount);      
        

        Swal.fire({
            text: (`Agregaste ${clickCount} unidades`),  
            icon: 'success',         
            confirmButtonText: 'producto agregado al carrito',
            confirmButtonColor: 'black'
          }) 
          setIsAddedToCart(true);      
    }    
    

    async function requestProducts() {
        const respuesta = await getProductData(id);
        setProducts(respuesta);
        setIsLoading (false);
    }

    useEffect(() => {
        requestProducts()
        setIsLoading(true);
    },[]);

    if (isLoading){
        return <div className="loader">
           <Ripples size={200} speed={2} color="black" 
        />
        </div>
    }
    return (
        <>
        <div className="contendorDetail">
        <div className="imagenDetail">
            <img src={product.imagen}></img>
        </div>
        <div className="tarjetita">
        <div>
            <h1 className="titulo1">{product.nombre}</h1>
        </div>
        <br></br>
        <div>           
            <h2 className="titulo2">Precio: ${product.precio}</h2>
        </div>
        <br></br>
        <div>           
            <p className="parrafo">{product.descripcion}</p>
        </div>
        <br></br>
        {
        isAddedToCart? (<Link to="/cart"> <button className="botom">Ir al carrito</button></Link>
        ) : (
        
        <div className="contadorDatail">
        <ItemCount onAddToCart ={handleAddToCart}></ItemCount>
        </div>
        )}       
        </div>
        </div>
        <footer>
         <div className="ContenderRedes">
        <img src={process.env.PUBLIC_URL + '/redes.png'} className="redes"  alt="" ></img>
        </div> 
        </footer>  
               
        
        </>
    );
}

export default ItemDetailContainer;




