import "../Navbar/Navbar.css"
import icono from '../logo.png'
import CardWidget from '../CardWidget/CardWidget' 
import { Link } from "react-router-dom"

function Navbar(){   
    return (
      <div className="navegacion">
        <Link to ="/"><img src={icono} className="icon"  alt="icono" ></img></Link>
          <header className="head">          
          <div className="inf"> 
          <Link className="textos" to="/pantallas"> PANTALLAS</Link>
          <Link className="textos" to="/teclados"> TECLADOS</Link>
          <Link className="textos" to="/procesadores" > PROCESADORES</Link>
          <Link className="textos" to="/memorias" > MEMORIAS</Link>
          <Link className="textos" to="/accesorios" > ACCESORIOS</Link>
          </div>
          <CardWidget></CardWidget>            
        </header>       
      </div>
    )
  }

  export default Navbar;