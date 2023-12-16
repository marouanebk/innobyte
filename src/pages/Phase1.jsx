import React from "react";
import { Link, NavLink } from "react-router-dom";

function Phase1() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-10">
      <span className="text-center text-[#475569] text-5xl font-bold">
        Accéder à une expérience complète de
        <br /> gestion de projets
      </span>

      <button className="h-16 rounded-md text-white text-xl font-bold bg-[#14B8A6] w-80 shadow-md">
        <NavLink to="/experience1/experience21">
          Créez un espace de travail
        </NavLink>
      </button>
      <button className="h-16 rounded-md text-slate-900 text-xl font-bold bg-white-900 w-80 shadow-md">
        <Link to="experience22">Rejoindre un espace de travail</Link>
      </button>
    </div>
  );
}

export default Phase1;
