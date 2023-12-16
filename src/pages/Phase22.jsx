import React from "react";
import { Link } from "react-router-dom";

function Phase22() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-10">
      <span className="text-center text-[#475569] text-5xl font-bold">
        Prêt à démarrer ? Créez un nouvel espace de
        <br /> travail pour débuter
      </span>
      <div className="h-16 rounded-md  shadow-md border-white-200 w-80">
        <input
          placeholder="Votre code"
          type="text"
          className="outline-none px-10 h-16 w-80"
        />
      </div>
      <div className="h-40 rounded-md bg-[#ffffff] flex justify-center items-center  border-white-200 w-80">
        <button className=" rounded-md text-slate-500 text-xl ">
          Importer un logo
        </button>
      </div>
      <button className="h-16 rounded-md text-white text-xl font-bold bg-[#14B8A6] w-80 shadow-md">
        <Link to="/experience1/experience22/landing">
          Créez votre espace de travail
        </Link>
      </button>
    </div>
  );
}

export default Phase22;
