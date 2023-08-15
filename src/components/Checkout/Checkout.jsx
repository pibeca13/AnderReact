import { cartContext } from "../../App";
import { createOrder } from "../../services/firebase";
import {useContext, useState } from "react";
import Swal from 'sweetalert2'
import "../Checkout/Checkout.css"


function Checkout(){

    const [buyer, setBuyer] = useState({
        firstname:"",
        lastname:"",
        age:"",
    });
    
    const {cart, getTotalPriceInCart} = useContext(cartContext);
   
    async function handleCheckout(evt){
        evt.preventDefault();
    
        const orderData = {
            items: cart,
            buyer: buyer,
            date: new Date(),
            total: getTotalPriceInCart(),
        };
    
        const idOrder = await  createOrder(orderData);       

        Swal.fire({
            text: (`Gracias por tu compra`),  
            icon: 'success',         
            confirmButtonText: 'Compra realizada',
            confirmButtonColor: 'black'
          }) 
          
    }

    if (cart.length=== 0){
        return <div>
               <img src={process.env.PUBLIC_URL + '/carrito.png'} className="carritoVacio"  alt="" ></img>
               <h1 className="carritoTexto">CARRIO VACIO !!</h1>
               </div>       
                
    }

   
    
    function onInputChange(evt) {
       const value = evt.target.value;
       const field = evt.target.name;
       const newState = {...buyer}
       newState[field] = value;
       setBuyer(newState);
    }
    /*function onSubmit(evt) {
        evt.preventDefault();
        console.log(`gracais por tu compra ${name}`);
    }*/
    
    function resetForm(e){
        e.preventDefault();
        setBuyer({
            firstname:"",
            lastname:"",
            age:"",
        })
    }
    
    return (
        <div className="conten">
        <form className="formulario">    
            <h2>Completa tus datos para completar la compra</h2>  
        <br></br>    
        <div>
            <label>Nombre</label><br></br>
            <input className ="placeHolder" value={buyer.firstname} name="firstname" type="text" onChange={onInputChange} />
        </div>   
        <br></br>  
         <div>
            <label>Apellido</label><br></br>
            <input className="placeHolder" value={buyer.lastname} name="lastname" type="text" onChange={onInputChange} />
        </div>
        <br></br>  
        <div>
            <label>Eedad</label><br></br>
            <input className ="placeHolder" value={buyer.age} name="age" type="number" onChange={onInputChange} />
        </div>
        <br></br> 
    
        <button className="botonConfirmacion"
        disabled={!(buyer.firstname !== '' && buyer.lastname !== '' && buyer.age !== '')}
        onClick={handleCheckout}
        >
        Confirmar Compra
        </button>
        <button className="botonConfirmacion" onClick={resetForm}>cancelar</button>         
          
    </form>    
    </div>
    
    )
    
}

export default Checkout;