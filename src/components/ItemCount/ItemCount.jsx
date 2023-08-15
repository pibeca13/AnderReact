import { useState } from "react";
import "../ItemCount/ItemCount.css"
import { useContext } from "react";
import { cartContext } from "../../App";


function ItemCount({stock, onAddToCart}){ 
    const context= useContext(cartContext);  
 
    const [clicks, setClicks] = useState(1)

    function handleClickSuma(){
        if (clicks<5){
        setClicks(clicks +1);
        }     
        
    }

    function handleClickResta(){
        if (clicks >1){
        setClicks(clicks -1);  
        }     
        
    }

    return (
        
        <div className="contador">        
        <button className="boton" onClick={handleClickSuma}>
        <h1>+ </h1>
        </button> 
        <h1 >{clicks}</h1>
        <button className="boton "onClick={handleClickResta}>
        <h1>- </h1>
        </button>       
        <div >
        <button onClick={ () => onAddToCart(clicks)}className="agregarCarrito" >Agregar a carrito</button>
        </div>       
        </div>
        
                   
     
    )
  }

  export default ItemCount;