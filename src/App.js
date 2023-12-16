import React, { useContext, useState } from "react";
import "./App.css";

import { HashRouter } from "react-router-dom";
import { Route, Routes , Navigate} from "react-router-dom";

import { Link } from "react-scroll";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Phase1 from "./pages/Phase1";
import Phase2 from "./pages/Phase21";
import Phase21 from "./pages/Phase21";
import Phase22 from "./pages/Phase22";
import Messagerie from "./pages/Messagerie";
import GraphPage from "./pages/Graph/GraphPage";

import { AuthContext } from "./Context/AuthContext";



function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={"/"} />;
  };

  const RequireNoAuth = ({ children }) => {
    return currentUser ? <Navigate to={"/Dashboard"} /> : children;
  };

  return (
    <HashRouter>
            <Routes>
        <Route path="/Dashboard" element={<RequireAuth><Landing /></RequireAuth>} />
        {/* <Route path="/experience1/experience22/landing" element={<RequireAuth><Landing /></RequireAuth>} /> */}
        <Route
          path="/Messagerie"
          element={<RequireAuth><Messagerie /></RequireAuth>}
        />
        {/* <Route
          path="/experience1/experience22/messagerie"
          element={<RequireAuth><Messagerie /></RequireAuth>}
        /> */}
        <Route
          path="/graphauto"
          element={<RequireAuth><GraphPage /></RequireAuth>}
        />
        {/* <Route
          path="/experience1/experience22/graphauto"
          element={<RequireAuth><GraphPage /></RequireAuth>}
        /> */}
        <Route path="/" element={<RequireNoAuth><Login /></RequireNoAuth>} />
        <Route path="/join-space" element={<RequireAuth><Phase1 /></RequireAuth>} />
        <Route path="/join-space-v1" element={<RequireAuth><Phase21 /></RequireAuth>} />
        <Route path="/join-space-v2" element={<RequireAuth><Phase22 /></RequireAuth>} />
      </Routes>
{/*       
      <Routes>
        <Route path="/experience1/experience21/landing" element={<RequireAuth><Landing /></RequireAuth>} />
        <Route path="/experience1/experience22/landing" element={<RequireAuth><Landing /></RequireAuth>} />
        <Route
          path="/experience1/experience21/messagerie"
          element={<RequireAuth><Messagerie /></RequireAuth>}
        />
        <Route
          path="/experience1/experience22/messagerie"
          element={<RequireAuth><Messagerie /></RequireAuth>}
        />RequireAuth
        <Route
          path="/experience1/experience21/graphauto"
          element={<RequireAuth><GraphPage /></RequireAuth>}
        />
        <Route
          path="/experience1/experience22/graphauto"
          element={<RequireAuth><GraphPage /></RequireAuth>}
        />
        <Route path="/" element={<RequireNoAuth><Login /></RequireNoAuth>} />
        <Route path="/experience1" element={<RequireAuth><Phase1 /></RequireAuth>} />
        <Route path="/experience1/experience21" element={<RequireAuth><Phase21 /></RequireAuth>} />
        <Route path="/experience1/experience22" element={<RequireAuth><Phase22 /></RequireAuth>} />
      </Routes> */}
    </HashRouter>

    // NICE NAMES YA SOFIANE YAL BOUBOU IS EXPERIENCE YA SOFIANE LBOUBOU 

  );
}

export default App;
