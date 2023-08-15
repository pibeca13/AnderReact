import "../Navbar/Navbar.css"
import icono from '../logo.png'
import CardWidget from '../CardWidget/CardWidget' 
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Navbar(){   
    return (
      <div className="navegacion">
        <Link to ="/"><img src={icono} className="icon"  alt="icono" ></img></Link>
          <header className="head">          
          <div className="inf"> 
          <Link className="textos" to="/category/pantallas"> PANTALLAS</Link>
          <Link className="textos" to="/category/teclados"> TECLADOS</Link>
          <Link className="textos" to="/category/procesadores" > PROCESADORES</Link>
          <Link className="textos" to="/category/memorias" > MEMORIAS</Link>
          <Link className="textos" to="/category/accesorios" > ACCESORIOS</Link>
          </div>
          <CardWidget></CardWidget>            
        </header>          
      </div>
    )
  }

  export default Navbar;

  