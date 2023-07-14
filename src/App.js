
import Navbar from './components/Navbar/Navbar'
import CardWidget from './components/CardWidget/CardWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {  
  return (
    <div>            
        
        <Navbar></Navbar> 
        <CardWidget></CardWidget>
        <ItemListContainer text="HOLA BIENVENDIOS"></ItemListContainer>
        <ItemCount></ItemCount>

     
    </div>
    
  );
}



export default App;
