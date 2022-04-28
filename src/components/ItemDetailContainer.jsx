import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});
    const {idItem} = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(error => console.log(error))
    }, []);

    return (
        <>
        <ItemDetail className='itemDetail' item={dato}/>
        </>
    )
}

export default ItemDetailContainer;