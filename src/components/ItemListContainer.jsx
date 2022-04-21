import customFetch from "../utils/customFetch.js";
import {useEffect, useState} from 'react';
import ItemList from "./ItemList.jsx";
import '../App.css';
import { useParams, Link } from "react-router-dom";
const {products} = require ("../utils/products.js")



const Catalogo = () => {
    const [datos, setDatos] = useState ([]);
    const {idCategory} = useParams ();

    useEffect(() => {
        if (idCategory === undefined) {
        customFetch (1000, products)
            .then(result => setDatos (result))
            .catch(error => console.log(error))
        } else {
            customFetch (1000, products.filter(item => item.categoryId === parseInt(idCategory)))
            .then(result => setDatos(result))
            .catch(error => console.log(error))
        }
    }, [idCategory]);

    return (
        <>
        <h1>NUESTROS PRODUCTOS</h1>
        <section className="productos">
            <div className="filtro">
            <Link to='/'>todos los productos</Link>
            <Link to='/category/1'>miel</Link>
            <Link to='/category/2'>caramelos</Link>
            </div>
            <div className="container">
            <ItemList items={datos}/>
            </div>
        </section>
        </>
    )
}

export default Catalogo