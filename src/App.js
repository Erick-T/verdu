import React from 'react';
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import './App.css';
import { CartWidget } from './components/CartWidget/CartWidget.js';




function App() {
  return (
    <div className="App">
      <Navbar>
        <CartWidget />
      </Navbar>

      <ItemListContainer />
    </div>
  );
}

export default App;
