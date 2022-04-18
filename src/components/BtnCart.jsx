import { Link } from "react-router-dom"

const BtnCart = () => {
    return (
        <Link to='/cart'><button className="boton">ir al carrito</button></Link>
    )
}

export default BtnCart;