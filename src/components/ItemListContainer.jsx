import {useEffect, useState} from 'react';
import ItemList from "./ItemList.jsx";
import '../App.css';
import { useParams, Link } from "react-router-dom";
import { firestoreFetch } from "../utils/firestoreFetch.js";

const Catalogo = () => {
    const [datos, setDatos] = useState ([]);
    const {idCategory} = useParams ();

    useEffect(() => {
        firestoreFetch(idCategory)
        .then(result => setDatos(result))
        .catch(error => console.log (error));
    }, [idCategory]);


    useEffect(() =>{
        return (() =>{
            setDatos([]);
        });
    }, []);
    
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