import "../Navbar/Navbar.css"
import icono from '../logo.png' 

function Navbar(){   
    return (
      <div className="navegacion">
        <img src={icono} className="icon" alt="icono" />
          <header className="head">          
          <div className="inf"> 
          <a className="textos"> CONTACTO</a>
          <a className="textos"> INCIO</a>
          <a className="textos"> PRODUCTOS</a>
          </div>            
        </header>       
      </div>
    )
  }

  export default Navbar;