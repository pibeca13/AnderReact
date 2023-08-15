import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/Checkout/Checkout';




const cartContext = createContext( { cart:[]} );

function CartContextProvider(props){
  const [cart, setCart] = useState([]);
  const prueba = "otra prueba"; 
  
  function addToCart(product, count){
      const newCart = [...cart];
     if (isInCart(product.id)){
      const indexUpdate = cart.findIndex( (item) => item.id === product.id)
      newCart[indexUpdate]. count += count;
      setCart(newCart);

     }
     else{
    const newCart = cart.map((item) => item);
     const newItemInCart = {count, ...product};
     newCart.push(newItemInCart);
     setCart(newCart); 
     }    

  }

  function isInCart(id){
      return cart.some((item) => item.id === id);
  }

  function removeItem(id){
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart(product, count){
    const newCart = cart.map((item) => item);
    const newItemInCart = {count, ...product};
    newCart.splice(newItemInCart);
    setCart(newCart); 
  }

function getTotalItemsInCart(){
     let total = 0;
     cart.forEach((item) => {
      total += item.count;
     })
     return total;
  }

  function getTotalPriceInCart(){
    let total = 0;
    cart.forEach((item) => {
     total += item.count * item.price;
    })
    return total;
 }

function getItem(id){

}
       

  return (
    <cartContext.Provider value={{cart, prueba, addToCart,removeItem,clearCart,getTotalItemsInCart,getTotalPriceInCart }}>
      {props.children}
    </cartContext.Provider>
  );

}


function App() {  
  return (
    <div>
    <CartContextProvider>
    <BrowserRouter>
       <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <ItemListContainer/> }></Route>
        <Route path="/category/:categoryId" element={ <ItemListContainer/>}></Route>
        <Route path="/producto/:id" element={ <ItemDetailContainer/> }></Route>
        <Route path="/cart" element={ <CartContainer/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="*" element={ <h1>Pagina no encontrada: 404 </h1>}></Route>
     </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </div>                 
  );
}



export default App;

export { cartContext};

