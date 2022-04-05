import '../App.css';

const Item = ({title, price, photo}) => {
    return (
        <>
            <div>
                <img className="fotoProducto" src={photo} alt="Foto del Producto"/>
            </div>
            <div>
                <p>{title}</p>
                <p>$ {price}</p>
            </div>
        </>
    );
}

export default Item;