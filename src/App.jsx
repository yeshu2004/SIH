import React from 'react';
import image from "./assets/bg-img.jpg";

import Nav from './components/Nav';
import Page2 from './components/Page2';
import HeroContent from './components/HeroContent';
import Blank from './components/Blank';

const App = () => {
  return (
    <div className='min-h-screen w-full font-[Neue]'>
       {/* //bg-cover */}
      <div className='relative h-screen w-full bg-cover bg-center' style={{ backgroundImage: `url(${image})` }}> 
          {/* //opacity */}
          <div className='absolute inset-0 bg-black opacity-50'></div> 
          {/* //content continer */}
          <div className='absolute inset-0 z-10 '>
            <Nav/>
            <HeroContent/>
          </div>
      </div>
      <Page2/> 
      <Blank/> 
    </div>
  );
};

export default App;
