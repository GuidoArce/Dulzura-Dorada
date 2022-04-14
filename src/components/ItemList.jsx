import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.name} price={item.price} photo={item.image}/>)
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemList;