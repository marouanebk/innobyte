import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="h-fit w-80 bg-[#F1F5F9]  rounded-md shadow-md flex flex-col justify-start items-start p-5 gap-5 ">
      <span className="text-center text-[#334155] text-2xl font-bold">
        {props.name}
      </span>
      {new Array(props.number).fill().map((item) => (
        <div className=" w-full bg-[#ffffff] rounded-md shadow-lg flex flex-col justify-start items-start p-5 gap-2 ">
          <div className="flex w-full items-center">
            <span className="text-center text-[#0D9488] text-lg font-bold">
              Login
            </span>
            <div className="flex-1"></div>
            <span className="text-center text-[#0D9488] text-md font-bold">
              1
              <span className="text-center text-[#334155] text-md font-bold">
                /5
              </span>
            </span>
          </div>
          <span className="text-start text-[#94A3B8] text-sm">
            Login feature from design to prod enhanced with some new options
          </span>
          <button
            onClick={() => setShowModal(true)}
            className="h-10 px-5 py-2 text-white text-sm bg-[#0F766E] rounded-md shadow-sm"
          >
            View progress
          </button>
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
                        Do you want to create an automated or an organic feature
                        ?
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
      ))}
    </div>
  );
}

export default Card;
