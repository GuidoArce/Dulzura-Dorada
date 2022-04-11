import customFetch from '../utils/customFetch'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
const { products } = require ('../utils/products.js')

const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});

    useEffect(() => {
        customFetch (3000, products[0])
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