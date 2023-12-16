import React from "react";
import { Link } from "react-router-dom";

function Phase21() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-10">
      <span className="text-center text-[#475569] text-5xl font-bold">
        Entrez le code d'invitation pour rejoindre un espace
        <br /> de travail existant
      </span>
      <div className="h-16 rounded-md  shadow-md border-white-200 w-80">
        <input
          placeholder="Votre code"
          type="text"
          className="outline-none px-10 h-16 w-80"
        />
      </div>
      <button className="h-16 rounded-md text-white text-xl font-bold bg-[#14B8A6] w-80 shadow-md">
        <Link to="/experience1/experience21/landing" target="_blank">
          Rejoindre
        </Link>
      </button>
    </div>
  );
}

export default Phase21;
