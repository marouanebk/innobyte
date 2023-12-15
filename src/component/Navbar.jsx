import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Navbar = () => {
  return (
    <nav class="flex text-red-500 z-20 top-0 left-0 right-0 lg:px-40 2xl:px-80 px-6 sm:px-10 h-24 shadow-[#ef4444] shadow-sm items-center top-0 space-x-4 sticky w-full bg-white">
      <div class="flex-auto text-red-500 max-[480px]: text-[12px] text-md sm:text-xl font-bold">
        <Link to="/">EURL</Link>
      </div>
      <button
        aria-expanded="false"
        aria-controls="navbar-default"
        data-collapse-toggle="navbar-default"
        type="button"
        class="md:hidden bg-[#ffffff] hover:bg-[#6645AE]"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-8 h-8"
          aria-hidden="true"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div id="navbar-default">
        <ul class="flex space-x-4">
          {/* <li
            aria-current="page"
            class="hidden text-white md:block focus:bg-[#6645AE] hover:text-[#6645AE] text-xl"
          >
            Home
          </li> */}
          <Link
            className="hidden text-slate-900 cursor-pointer active:text-[#ef4444] md:block  hover:text-[#ef4444] text-xl"
            activeClass="active"
            to="/factures"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Factures
          </Link>
          <Link
            className="hidden cursor-pointer text-slate-900 active:text-[#ef4444] md:block  hover:text-[#ef4444] text-xl"
            activeClass="active"
            to="/attachements"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Attachements
          </Link>
          {/* <li class="hidden text-white md:block focus:bg-[#6645AE] hover:text-[#6645AE] text-xl ">
            Projects
          </li> */}

          {/* <li class="hidden text-white md:block focus:bg-[#6645AE] hover:text-[#6645AE] text-xl ">
            Skills
          </li> */}
          <Link
            className="hidden text-slate-900 cursor-pointer active:text-[#ef4444] md:block  hover:text-[#ef4444] text-xl"
            activeClass="active"
            to="/ajouter"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Ajout
          </Link>
          <Link
            className="hidden cursor-pointer text-slate-900 active:text-[#ef4444] md:block  hover:text-[#ef4444] text-xl"
            activeClass="active"
            to="/dashboard"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Dashboard
          </Link>
          {/* <li class="hidden text-white md:block focus:bg-[#6645AE] hover:text-[#6645AE] text-xl">
            About
          </li> */}
          <Link
            className="hidden cursor-pointer text-slate-900 active:text-[#ef4444] md:block  hover:text-[#ef4444] text-xl"
            activeClass="active"
            to="/dettes"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Dettes
          </Link>
          {/* <li class="hidden text-white md:block focus:bg-[#6645AE] hover:text-[#6645AE] text-xl ">
            Contact
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
