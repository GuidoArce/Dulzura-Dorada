import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Catalogo from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Galery from '../components/Galery';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import CartContextProvider from '../components/CartContext'


const Home = () => {
    return (
        <CartContextProvider>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Catalogo/>}/>
                <Route path='/category/:idCategory' element={<Catalogo/>}/>
                <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
                <Route path='/Galery' element={<Galery/>}/>
                <Route path='/Cart' element={<Cart/>}></Route>
            </Routes>
        <Footer/>
        </BrowserRouter>
        </CartContextProvider>
    );
}

export default Home