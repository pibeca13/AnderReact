import { useState } from "react";
import "../ItemCount/ItemCount.css"

function ItemCount(){   
 
    const [clicks, setClicks] = useState(0)

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
        </div>            
     
    )
  }

  export default ItemCount;