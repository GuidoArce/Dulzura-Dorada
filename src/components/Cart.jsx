import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import '../App.css';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Numero from "../utils/numero";

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
        </section>
        <div className="cartProduct">
            <div className="detail">
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
                                <IconButton aria-label="delete" color="warning" onClick={() => test.removeItem(item.idItem)}>
                                    <ClearIcon />
                                </IconButton>
                            </div>
                            <hr/>
                        </div>
                        )
                    : <h2></h2>
                }
            </div>
            {
                test.cartList.length > 0 &&
                <div className="price">
                    <p key={test.idItem}></p>
                    <h2>Resumen de compra</h2>
                    <div className="infoCart">
                        <h3>Subtotal</h3>
                        <p><Numero number={test.subTotal()}/></p>
                    </div>
                    <div className="infoCart">
                        <h3>IVA</h3>
                        <p><Numero number={test.impuestos()}/></p>
                    </div>
                    <div className="infoCart">
                        <h3>Total</h3>
                        <p><Numero number={test.subTotal() + test.impuestos()}/></p>
                    </div>
                    <button className="boton">Terminar compra</button>
                </div>
            }
        </div>
        </>
    );
}

export default Cart;