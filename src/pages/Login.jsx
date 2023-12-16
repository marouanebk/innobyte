import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);



  // State variables to manage email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login submission
  const handleLogin = async () => {
    try {
      // Make a POST request to your login endpoint with email and password
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      

      // Handle successful login - e.g., store authentication token, redirect, etc.
      console.log("Login successful:", response);
      dispatch({ type: "LOGIN", payload: response['data'] });
      navigate("/join-space");
    } catch (error) {
      // Handle login error - display an error message, redirect, etc.
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center gap-60 mx-40">
      <span className="text-center text-5xl font-bold">
        Bienvenue sur
        <br />
        <br />
        <span className="text-[#14B8A6] text-md font-bold">CollabHUB</span>
        <br />
        <br />
        <span>
          Le Tout en Un pour la
          <br />
          Gestion de vos Projets !
        </span>
      </span>
      <div className=" flex flex-col justify-center items-center gap-8">
        <p className="text-2xl text-[#64748B]">Connectez-vous</p>
        <div className="h-16 rounded-md shadow-md border-white-800 w-80">
          <input
            placeholder="Adresse email"
            type="text"
            className="outline-none px-10 h-16 w-80"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="h-16 rounded-md shadow-md border-white-200 w-80">
          <input
            placeholder="Mot de passe"
            type="password"
            className="outline-none px-10 h-16 w-80"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="h-16 rounded-md text-white text-xl font-bold bg-[#14B8A6] w-80 shadow-md"
          onClick={handleLogin}
        >
          Se connecter
        </button>
        {/* ... (existing JSX code) */}
      </div>
    </div>
  );
}

export default Login;
