import React from "react";
import Item from "../Item/Item"

function ItemList(props){
    return (
        <div>
        <p className="bienvenido">{props.text}</p> 
        {props.products.map((item) => (
        <Item key={item.id} {...item} />
        ))}         
        </div> 
    )   
}

export default ItemList; 

     
