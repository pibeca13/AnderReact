import React from "react";
import { useContext } from "react";
import { cartContext } from "../../App";
import CardWidget from '../CardWidget/CardWidget'
import "../CartContainer/CartContainer.css"
import { createOrder } from "../../services/firebase"; 
import { Link } from "react-router-dom";



function CartContainer (){
    const {cart, removeItem,} = useContext(cartContext);

    if (cart.length=== 0){
        return <div>
               <img src={process.env.PUBLIC_URL + '/carrito.png'} className="carritoVacio"  alt="" ></img>
               <h1 className="carritoTexto">CARRIO VACIO !!</h1>
               </div>
        
                
    }
    return (
    <div>
        <h1 className="titularCarrito">PRODUCTOS EN CARRITO</h1>
        {cart.map(( item) => (
            <div className="cartCompra">
                <div><img src={item.imagen} className="imagenCart"></img></div>
                <div className="cont">
                <h2>{item.nombre}</h2>
                <p>Precio unitario: $ {item.precio}</p>
                <p>Cantidad del producto: {item.count}</p>
                <p>Precio total ${item.count * item.precio}</p>                
                </div>
                <div>
                <button className="botonEliminar" onClick={() => removeItem(item.id) }>Eliminar</button>
                </div>                 
            </div>
             
         ))}
         <br></br> 
         <button className="botonCompra">     
         <Link className="botonSubrrallado" to="/checkout">Comprar</Link>
         </button>  
         <div className="ContenderRedes">
        <img src={process.env.PUBLIC_URL + '/redes.png'} className="redes"  alt="" ></img>
        </div> 
         </div>
         
    );        
}
       


export default CartContainer;

