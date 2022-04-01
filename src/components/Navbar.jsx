import '../App.css';
import SimpleBadge from './CartWidget.jsx'

function Navbar() {
  return (
    <>
    <nav className="nav">
      <p className='logo'>LOGO</p>
      <div className='navegador'>
        <a href='#'>Nuestra historia</a>
        <a href='#'>Productos</a>
        <a href='#'>Galeria</a>
      </div>
      <div className='carrito'>
      <SimpleBadge />
      </div>
    </nav>
    </>
  );
}

export default Navbar;
