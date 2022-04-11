import ItemCount from "./ItemCount";
import '../App.css';

const ItemDetail = ({item}) => {
    const onAdd = (unidad) => {
        alert ("Has seleccionado " + unidad + " productos.")
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
                    <ItemCount initial={1} onAdd={onAdd}/>
                </div>
            </section>
            : <p>Cargando...</p>
        }
        </>
    )
}

export default ItemDetail;