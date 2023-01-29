import React from 'react';

import "./App.scss";

import ScrollToTop from "react-scroll-to-top";

import About from './components/layout/about/Index';
import Auction from './components/layout/auction/Index';
import Blog from './components/layout/blog/Index';
import Category from './components/layout/category/Index';
import Collection from './components/layout/collection/Index';
import Create from './components/layout/create/Index';
import Footer from './components/layout/footer/Index';
import Gallery from './components/layout/gallery/Index';

import Hero from './components/layout/hero/Index';
import Roadmap from './components/layout/roadmap/Index';
import Seller from './components/layout/seller/Index';
import Testimonials from './components/layout/testimonials/Index';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Hero />
      <About />
      <Collection />
      <Gallery />
      <Category />
      <Auction />
      <Seller />
      <Create />
      <Roadmap />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App