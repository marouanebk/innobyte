import React from "react";
import { Navbar } from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Card from "./Landing/Card";
import { Link } from "react-router-dom";

function Landing() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex flex-col gap-20 ">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pt-20 pl-20 flex flex-col justify-start items-start gap-10">
          <div className="flex justify-center items-center  w-full pr-20 ">
            <span className="text-center text-[#334155] text-3xl font-bold">
              Project1
            </span>

            <div className="flex-1 w-full"></div>
            <button
              className="bg-[#0F766E] opacity-50 p-[8px] rounded-md text-white mr-10 "
              type="button"
              onClick={() => setShowModal(true)}
              // onClick={() => setShowModal(false)}
            >
              <Link to="/experience1/experience22/messagerie">
                <img
                  alt="tt"
                  src={require("../img/Icon (5).png")}
                  className="h-6"
                />
              </Link>
            </button>
            <button
              className=" bg-[#0F766E] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
              // onClick={() => setShowModal(false)}
            >
              <Link to="/experience1/experience22/graphauto">New feature</Link>
            </button>
          </div>
          <div className="flex xs:flex-col xl:flex-row justify-start gap-10">
            <Card number={1} name={"Todo"} />
            <Card number={3} name={"In progress"} />
            <Card number={2} name={"Waiting for review"} />
            <Card number={1} name={"Todo"} />
          </div>
        </div>
        {showModal ? (
          <div onClick={() => setShowModal(false)}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-6  rounded-t">
                    <h2 className="text-2xl text-[#0F172A] font-semibold">
                      Create a new feature
                    </h2>
                  </div>
                  {/*body*/}
                  <div className="relative px-6 flex-auto">
                    <span className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      Do you want to create an automated or an organic feature ?
                    </span>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6  rounded-b">
                    <button
                      className="bg-[#ffffff] border-2 border-[#0F766E] text-[#0F766E] active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <Link to="/experience1/experience22/graphauto">
                        Organic feature
                      </Link>
                    </button>
                    <button
                      className="bg-[#0F766E] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <Link to="/experience1/experience22/graphauto">
                        Automated feature
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Landing;
