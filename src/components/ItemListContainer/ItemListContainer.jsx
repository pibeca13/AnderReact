import { useState, useEffect } from "react";

import { getData, getCategoryData } from "../../services/firebase";
import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Ripples } from '@uiball/loaders'
import "../Loader/Loader.css"


function ItemListContainer(props){

    const [products, setProducts] = useState ([]);
    const [isLoading, setIsLoading] = useState (true);
    const { categoryId } = useParams();
       
    useEffect(() =>{
      setIsLoading(true);
        async function requestProducts(){
            let respuesta = categoryId
              ? await getCategoryData(categoryId)
              : await getData();
              setProducts (respuesta);
              setIsLoading (false);
            }

            requestProducts();
        },[categoryId]);   
        
     if(isLoading){
      return<div className="loader">
        <Ripples size={200} speed={2} color="black" 
/>
</div> 
     }   
    
    return (
    <ItemList products ={products}/>     
              
    );
  }

  export default ItemListContainer;