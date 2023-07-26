import { useState, useEffect } from "react";
import getData, {getCategoryData} from "../../services/asyncMock";
import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer(){

    const [products, setProducts] = useState ([]);
    const { categoryId } = useParams();
       
    useEffect(() =>{
        async function requestProducts(){
            let respuesta = categoryId
              ? await getCategoryData(categoryId)
              : await getData();
              setProducts (respuesta);
            }

            requestProducts();
        },[categoryId]);        
    
    return (
    <ItemList products ={products}/>     
              
    );
  }

  export default ItemListContainer;