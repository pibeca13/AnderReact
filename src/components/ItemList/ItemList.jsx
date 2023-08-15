import React from "react";
import Item from "../Item/Item"
import "../ItemList/ItemList.css"


function ItemList(props){
    return (
        <div>
        <div className="contendorAnimacion">     
        <img src={process.env.PUBLIC_URL + '/portafoliofinalprueba.png'} className="animacion"  alt="" ></img>
        </div>    
        <p className="bienvenido">{props.text}</p> 
        {props.products.map((item) => (
        <Item key={item.id} {...item} />
        ))}
          <footer>
         <div className="ContenderRedes">
        <img src={process.env.PUBLIC_URL + '/redes.png'} className="redes"  alt="" ></img>
        </div> 
        </footer>            
        </div> 
    )   
}

export default ItemList; 

     
