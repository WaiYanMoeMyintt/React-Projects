import React from 'react'
import "./index.css";
import Hero  from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Products/Product';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
    </div>
  )
}

export default App