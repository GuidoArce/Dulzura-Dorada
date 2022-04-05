import customFetch from "../utils/customFetch.js";
import {useEffect, useState} from 'react';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList.jsx";
const {products} = require ("../utils/products.js")

const Catalogo = ({greeting}) => {
    const [datos, setDatos] = useState ([]);

    useEffect(() => {
        customFetch (2000, products)
            .then(result => setDatos (result))
            .catch(error => console.log(error))
    }, []);

    const onAdd = (unidad) => {
        alert("Has seleccionado " + unidad + " productos.")
    }

    return (
        <>
        <h1>{greeting}</h1>
        <ItemList items={datos}/>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default Catalogo