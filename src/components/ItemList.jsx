import { productos } from "../utils/products";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div>
        {
            productos.length > 0
            ? productos.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.price} photo={item.img}/>)
            : <p>Cargando...</p>
        }
        </div>
    );
}

export default ItemList;