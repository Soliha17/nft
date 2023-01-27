import React from 'react';

import "./App.scss";
import Collection from './components/layout/collection/Index';
import Gallery from './components/layout/gallery/Index';

import Hero from './components/layout/hero/Index';
import Section1 from './components/layout/section1/Index';

function App() {
  return (
    <div className='app'>
      <Hero />
      <Section1 />
      <Collection />
      <Gallery/>
    </div>
  )
}

export default App