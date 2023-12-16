import React , {useContext , useState} from 'react';
import './App.css';


import { HashRouter } from 'react-router-dom';
import { Route , Routes } from 'react-router-dom';

import { Link } from 'react-scroll';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Phase1 from './pages/Phase1';
import Phase2 from './pages/Phase21';
import Phase21 from './pages/Phase21';
import Phase22 from './pages/Phase22';
import Messagerie from './pages/Messagerie';

function App() {
  
  
 
  return (
    <HashRouter>
    
    <Routes>
      
    <Route path="/" element={<TimelineChart/> } />
    {/* <Route path="/time" element={<Timeline/> } /> */}
     
      
 
      </Routes>
     
   
     </HashRouter>
  );
}

export default App;
