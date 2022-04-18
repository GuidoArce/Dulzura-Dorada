import '../App.css';
import {Link} from 'react-router-dom'
import SimpleBadge from './CartWidget.jsx'
import SearchForm from './SearchForm';

function Navbar() {
  return (
    <>
    <nav className="nav">
      <Link to='/'><img  className='logo' src='../../images/logo.png' alt='logo'></img></Link>
      <div className='navegador'>
        <Link to='/category/1'>miel</Link>
        <Link to='/category/2'>caramelos</Link>
        <Link to='/Galery'>galeria</Link>
      </div>
      <div className='carrito'>
      <SearchForm/>
      <SimpleBadge />
      </div>
    </nav>
    <img className='honeyDrop' src='../../images/wave.svg' alt='waves'></img>
    </>
  );
}

export default Navbar;
