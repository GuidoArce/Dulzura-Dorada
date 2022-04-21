import ItemCount from "./ItemCount";
import '../App.css';
import { useState, useContext } from "react";
import BtnCart from "./BtnCart";
import { CartContext } from "./CartContext";

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (cantidad) => {
        alert("Se han añadido " + cantidad + " objetos al carrito")
        setItemCount(cantidad);
        test.addItem(item, cantidad)
    }

    return (
        <>
        {
            item && item.image
            ?
            <section className="itemDetail">
                <img className="itemDetailImg" src={item.image} alt='foto del producto'/>
                <div>
                    <h2>{item.name}</h2>
                    <br/>
                    <p>{item.description}</p>
                    <br/>
                    <p>$ {item.price}</p>
                    <br/>
                    {
                        itemCount === 0
                        ?<ItemCount initial={itemCount} onAdd={onAdd}/>
                        :<BtnCart/>
                    }
                </div>
            </section>
            : <p>Cargando...</p>
        }
        </>
    )
}

export default ItemDetail;