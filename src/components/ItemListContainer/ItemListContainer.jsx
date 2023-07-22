import { useState, useEffect } from "react";
import getData, {getCategoryData} from "../../services/asyncMock";
import "../ItemListContainer/ItemListContainer.css";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";


function ItemListContainer(props){

    const [products, setProducts] = useState ([]);
    const { categoryId } = useParams();
    
    async function requestProducts(){

        let respuesta = [];
        if(categoryId === undefined) {
            respuesta = await getData();
        }
        else {
            
            respuesta = await getData(categoryId );
        }
        setProducts (respuesta);
    }

    useEffect(() =>{
        requestProducts();
    },[]);   
    
    return (
    <div>
        <p className="bienvenido">{props.text}</p> 
        {products.map((item) => (
        <Item key={item.id} {...item} />
        ))}         
    </div>      
              
    );
  }

  export default ItemListContainer;