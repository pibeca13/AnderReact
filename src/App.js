import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {  
  return (
    <div>
    <BrowserRouter>
       <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <ItemListContainer/> }></Route>
        <Route path="/category/:categoryId" element={ <ItemListContainer/>}></Route>
        <Route path="/producto/:id" element={ <ItemDetailContainer/> }></Route>
        <Route path="*" element={ <h1>Pagina no encontrada: 404 </h1>}></Route>
     </Routes>
    </BrowserRouter>
    </div>                 
  );
}



export default App;
