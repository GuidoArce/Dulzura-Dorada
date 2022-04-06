import '../App.css';

const Item = ({title, price, photo}) => {
    return (
        <div className='card tarjeta'>
            <img src={photo} alt="Foto del Producto"/>
            <div>
                <h4>{title}</h4>
                <p>$ {price}</p>
            </div>
        </div>
    );
}

export default Item;