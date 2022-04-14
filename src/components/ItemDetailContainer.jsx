import customFetch from '../utils/customFetch'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const { products } = require ('../utils/products.js')

const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});
    const {idItem} = useParams();

    useEffect(() => {
        customFetch (1000, products.find(item => item.id === idItem))
        .then(result => setDato (result))
        .catch(err => console.log (err))
    }, []);

    return (
        <>
        <ItemDetail className='itemDetail' item={dato}/>
        </>
    )
}

export default ItemDetailContainer;