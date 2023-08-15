import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee }  from "@fortawesome/free-solid-svg-icons";
import "../CardWidget/CardWidget.css"
import { useContext } from "react";
import { cartContext } from "../../App";
import { Link } from "react-router-dom";

function CardWidget () {
    const context= useContext(cartContext);
    console.log(context);
    return (
        <div>
            <Link className="carrito" to="/cart"> 
            <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>            
            <samp> {context.getTotalItemsInCart()}</samp>
            </Link>            
        </div>
    )
}

export default CardWidget;


