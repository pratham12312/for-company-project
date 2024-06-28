

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contactform from './Components/Contactform';

import React from 'react';

import {
  BrowserRouter,Route,Routes,
  Link
} from "react-router-dom";



function App() {

  return (
    <div>
 

 <BrowserRouter>
    <Navbar  />
      <Routes>
      <Route path='/' element={<Home />} />

      
          <Route path="ContactForm.js" element={<Contactform/>} />


        <Route path="About.js" element={<About />}></Route>
      
        
     
      </Routes>
      
    </BrowserRouter>
    



    </div>
  );
}

export default App;
