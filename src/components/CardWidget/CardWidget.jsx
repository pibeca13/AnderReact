import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee }  from "@fortawesome/free-solid-svg-icons";
import "../CardWidget/CardWidget.css"

function CardWidget () {
    return (
        <div className="carrito"> 
            <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            <samp>2</samp>            
        </div>
    )
}

export default CardWidget;
