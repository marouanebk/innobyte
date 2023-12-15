import React , {useContext , useState} from 'react';
import './App.css';


import { HashRouter } from 'react-router-dom';
import { Route , Routes } from 'react-router-dom';

import { Link } from 'react-scroll';
import Landing from './pages/Landing';


function App() {
  
  
 
  return (
    <HashRouter>
    
    <Routes>
      
      <Route path="/" element={<Landing/> } />
     
      
 
      </Routes>
     
   
     </HashRouter>
  );
}

export default App;
