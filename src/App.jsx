import React from 'react';

import "./App.scss";
import About from './components/layout/about/Index';
import Auction from './components/layout/auction/Index';
import Category from './components/layout/category/Index';
import Collection from './components/layout/collection/Index';
import Gallery from './components/layout/gallery/Index';

import Hero from './components/layout/hero/Index';
import Seller from './components/layout/seller/Index';

function App() {
  return (
    <div className='app'>
      <Hero />
      <About />
      <Collection />
      <Gallery />
      <Category />
      <Auction />
      <Seller/>
    </div>
  )
}

export default App