import React from "react";
import { Link } from "react-router-dom";

function Login() {
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
        <div className="h-16 rounded-md  shadow-md border-white-800 w-80">
          <input
            placeholder="Adresse email"
            type="text"
            className="outline-none px-10 h-16 w-80"
          />
        </div>
        <div className="h-16 rounded-md  shadow-md border-white-200 w-80">
          <input
            placeholder="Mot de passe"
            type="text"
            className="outline-none px-10 h-16 w-80"
          />
        </div>
        <button className="h-16 rounded-md text-white text-xl font-bold bg-[#14B8A6] w-80 shadow-md">
          <Link to="/experience1">Se connecter</Link>
        </button>
        <span className="text-2xl text-[#64748B]">Ou se connecter avec</span>
        <div className="h-16 rounded-md  shadow-md border-white-800 w-80">
          <div className="flex justify-center items-center h-full gap-10">
            <span className="text-2xl text-bold text-center text-[#64748B]">
              Google
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
