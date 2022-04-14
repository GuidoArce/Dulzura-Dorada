import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Catalogo from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Galery from '../components/Galery';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Catalogo/>}/>
                <Route path='/category/:idCategory' element={<Catalogo/>}/>
                <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
                <Route path='/Galery' element={<Galery/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    );
}

export default Home