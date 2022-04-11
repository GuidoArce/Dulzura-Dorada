import '../App.css';
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


const ItemCount = ({ stock = 5, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <div className='counter'>
            <IconButton onClick={increment}><AddCircleIcon/></IconButton>
            <p>{count}</p>
            <IconButton onClick={decrement}><RemoveCircleIcon/></IconButton>
            {
                stock
                ? <button className='boton' onClick={() => onAdd(count)}>añadir al carrito</button>
                : <button className='boton' disabled>añadir al carrito</button>
            }
        </div>
    );
}

export default ItemCount
