import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import Catalogo from './components/ItemListContainer.jsx'
<style>
@import url('https://fonts.googleapis.com/css2?family=BIZ+UDGothic&family=Comfortaa:wght@300&family=Fuzzy+Bubbles&family=Prompt:wght@200&family=Staatliches&family=Teko:wght@300;700&display=swap');
</style>

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Catalogo greeting='NUESTROS PRODUCTOS' />
  </React.StrictMode>,
  document.getElementById('root')
);

