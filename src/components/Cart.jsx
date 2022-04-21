import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import '../App.css';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

const Cart = () => {
    const test = useContext(CartContext)

    return (
        <>
        <h1>CARRITO</h1>
        <section>
            <div className="topCart">
            <Link to='/'><button className="boton">mas productos</button></Link>
            {
                (test.cartList.length > 0)
                ? <button className="boton" onClick={test.clear}>borrar todo</button>
                : <p>Tu carrito esta vacío</p>
            }
            </div>
            <article>
                {
                    test.cartList.length > 0 ?
                    test.cartList.map(item =>
                        <div>
                            <p key={item.idItem}></p>
                            <div className="itemCart">
                                <img src={item.imgItem} alt="foto del producto" />
                                <p>Producto : {item.nameItem}</p>
                                <p>Cantidad: {item.cantItem}</p>
                                <p>Precio: {item.priceItem}</p>
                                <IconButton aria-label="delete">
                                    <ClearIcon color="warning" onClick={() => test.removeItem(item.idItem)} />
                                </IconButton>
                            </div>
                            <hr/>
                        </div>
                        )
                    : <h2></h2>
                }
            </article>
        </section>
        </>
    );
}

export default Cart;