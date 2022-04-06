import { productos } from "../utils/products.js";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
        {
            productos.length > 0
            ? productos.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.price} photo={item.img}/>)
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemList;