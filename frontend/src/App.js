import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home/Home.js';
import About from '../src/components/About/About.js';
import Shop from '../src/components/Shop/Shop.js';
import Product from './components/Product/Product.js';
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
