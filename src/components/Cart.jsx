import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import '../App.css';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Numero from "../utils/numero";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = test.cartList.map(item => ({
            id: item.idItem,
            title: item.nameItem,
            price: item.priceItem,
            quantity: item.cantItem
        }));
    
        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
            stock: increment(-item.cantItem)
            });
        });
    
        let order = {
        buyer: {
            name: "Guido Arce",
            email: "guido.arce.federico@gmail.com",
            phone: "549 2494549578"
            },
            total: test.total(),
            items: itemsForDB,
            date: serverTimestamp(),
        };
        
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
    
        createOrderInFirestore()
            .then(result => alert('Tu orden fue creada!.\n Por favor, anota el numero de la orden por cualquier inconveniente\n\nOrder ID: ' + result.id))
            .catch(err => console.log(err));
    
        test.clear();
    
    }

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
                    <button onClick={createOrder} className="boton">Terminar compra</button>
                </div>
            }
        </div>
        </>
    );
}

export default Cart;