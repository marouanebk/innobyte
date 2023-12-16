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
<<<<<<< HEAD
import GraphPage from './pages/Graph/GraphPage';
=======
>>>>>>> 10812bb29bf81620e4596c11bdb666af49e3e51f

function App() {
  return (
    <HashRouter>
<<<<<<< HEAD
    <Routes>  
      <Route path="/experience1/experience21/landing" element={<Landing/> } />
      <Route path="/experience1/experience22/landing" element={<Landing/> } />
      <Route path="/experience1/experience21/messagerie" element={<Messagerie/> } />
      <Route path="/experience1/experience22/messagerie" element={<Messagerie/> } />
      <Route path="/experience1/experience21/graphauto" element={<GraphPage/> } />
      <Route path="/experience1/experience22/graphauto" element={<GraphPage/> } />
      <Route path="/" element={<Login/> } />
      <Route path="/experience1" element={<Phase1/> } />
      <Route path="/experience1/experience21" element={<Phase21/> } />
      <Route path="/experience1/experience22" element={<Phase22/> } />
=======
    
    <Routes>
      
    <Route path="/" element={<TimelineChart/> } />
    {/* <Route path="/time" element={<Timeline/> } /> */}
     
      
 
>>>>>>> 10812bb29bf81620e4596c11bdb666af49e3e51f
      </Routes>
     
   
     </HashRouter>
  );
}

export default App;
