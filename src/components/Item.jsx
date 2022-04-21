import '../App.css';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

const Item = ({title, price, photo, id}) => {
    return (
        <div className='card tarjeta'>
            <img src={photo} alt="Foto del Producto"/>
            <div className='infoCard'>
                <h4>{title}</h4>
                <p>${price}
                <br/>
                <Button variant='contained' color='warning'><Link to={`/item/${id}`}>mas detalles</Link></Button></p>
            </div>
        </div>
    );
}

export default Item;