import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import Catalogo from './components/ItemListContainer.jsx'
import ItemCount from './components/ItemCount.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Catalogo greeting='FUTURO CATALOGO' />
    <ItemCount/>
  </React.StrictMode>,
  document.getElementById('root')
);

