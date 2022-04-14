import '../App.css';
import {Link} from 'react-router-dom'

const Item = ({title, price, photo, id}) => {
    return (
        <div className='card tarjeta'>
            <img src={photo} alt="Foto del Producto"/>
            <div>
                <h4>{title}</h4>
                <p>${price} <Link to={`/item/${id}`}>mas detalles</Link></p>
            </div>
        </div>
    );
}

export default Item;