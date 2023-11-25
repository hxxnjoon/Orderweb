import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from './components/pages/Home.jsx';
import Mainmenu from './components/pages/Mainmenu.jsx';
import Sidemenu from './components/pages/Sidemenu.jsx';
import Beverage from './components/pages/Beverage.jsx';
import Alcohol from './components/pages/Alcohol.jsx';
import Cart from './components/pages/Cart.jsx';
import Purchase from './components/pages/Purchase.jsx';
import Orderdetails from './components/pages/Orderdetails.jsx';
import Header from './components/Header.jsx';
import store from './store/store.js';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mainmenu" element={<Mainmenu />} />
              <Route path="/sidemenu" element={<Sidemenu />} />
              <Route path="/beverage" element={<Beverage />} />
              <Route path="/alcohol" element={<Alcohol />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orderdetails" element={<Orderdetails />} />
              <Route path="/cart/purchase" element={<Purchase />} />
            </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}



export default App;
