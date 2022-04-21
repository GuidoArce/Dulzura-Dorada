import '../App.css';
import {Link} from 'react-router-dom'
import SimpleBadge from './CartWidget.jsx'

function Navbar() {
  return (
    <>
    <nav className="nav">
      <Link to='/'><img  className='logo' src='../../images/logo.png' alt='logo'></img></Link>
      <div className='navegador'>
        <Link to='/About'>sobre nosotros</Link>
        <Link to='/Galery'>galeria</Link>
        <Link to='/Contact'>contacto</Link>
      </div>
      <div className='carrito'>
      <SimpleBadge />
      </div>
    </nav>
    <img className='honeyDrop' src='../../images/wave.svg' alt='waves'></img>
    </>
  );
}

export default Navbar;
