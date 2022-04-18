import ItemCount from "./ItemCount";
import '../App.css';
import { useState } from "react";
import BtnCart from "./BtnCart";

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (unidad) => {
        alert("Se han añadido " + unidad + " objetos al carrito")
        setItemCount(unidad);
    }

    return (
        <>
        {
            item.image
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