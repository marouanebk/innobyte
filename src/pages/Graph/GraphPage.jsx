import React from "react";
import Card from "../Landing/Card";
import Sidebar from "../../component/Sidebar";

function GraphPage() {
  return (
    <div className="flex flex-col gap-20 ">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pt-5 px-20  h-screen">
          <div className="flex flex-col gap-20">
            <div className="flex justify-end    ">
              <div className="flex justify-center items-center gap-5">
                <div className="rounded-[50%] p-5 bg-slate-500"></div>
                <span className="mr-6 text-start text-[#475569] text-md font-bold ">
                  Sofiane KARAOUNI
                  <br />
                  <span className="text-start text-[#94A3B8] text-sm">
                    s_karaouni@estin.dz
                  </span>
                </span>
                <img
                  className="h-2 "
                  alt="imagelogo"
                  src={require("../../img/Vector (6).png")}
                />
              </div>
            </div>
            <div className="flex justify-center items-start gap-40 mx-10">
              <div className="flex flex-col justify-start items-start gap-10 h-[calc(100vh-150px)] w-full ">
                <span className="text-center text-3xl font-bold">
                  Add a new feature{" "}
                </span>
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                  <label>Feature’s name</label>
                  <input
                    placeholder="Feature’s name"
                    type="text"
                    className="w-full bg-transparent h-12 border-2 px-5 py-2 text-start outline-none"
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                  <label>Feature’s description</label>
                  <textarea
                    rows={3}
                    placeholder="Feature’s description"
                    class="w-full bg-transparent border-2 px-5 py-2 text-start outline-none"
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                  <label>Assign to</label>
                  <div className=" flex justify-start rounded-sm border-[1px] w-full">
                    <div className="bg-[#E2E8F0] h-16 w-16 flex justify-center items-center ">
                      <img
                        className="h-6 "
                        alt="imagelogo"
                        src={require("../../img/Vector (9).png")}
                      />
                    </div>
                    <input
                      placeholder="Hamid"
                      type="text"
                      className="flex-1 w-full bg-transparent h-16 border-2 px-2 py-2 text-start outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-full">
                  <label>Reviewer</label>
                  <div className=" flex justify-start rounded-sm border-[1px] w-full">
                    <div className="bg-[#E2E8F0] h-16 w-16 flex justify-center items-center ">
                      <img
                        className="h-6 "
                        alt="imagelogo"
                        src={require("../../img/Vector (9).png")}
                      />
                    </div>
                    <input
                      placeholder="Hamid"
                      type="text"
                      className="flex-1 w-full bg-transparent h-16 border-2 px-2 py-2 text-start outline-none"
                    />
                  </div>
                </div>

                <button
                  className="flex justify-end bg-[#0F766E] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Automated feature
                </button>
              </div>
              <div className=" h-[calc(100vh-250px)]  w-full ">
                <div className="flex flex-col justify-start items-start gap-10 h-[calc(100vh-150px)] w-full ">
                  <span className="text-center text-3xl font-bold">
                    Dependany graph{" "}
                  </span>
                  <div className="w-full h-[calc(100vh-240px)] bg-[#E2E8F0] p-5 gap-10 flex flex-col justify-start items-center">
                    <button className="rounded-[50%] text-white  flex justify-center items-center bg-[#0D9488] h-20 w-20 font-bold text-3xl">
                      +
                    </button>
                    {/* <div class="hs-tooltip inline-block [--trigger:click] [--placement:bottom]">
                      <button
                        type="button"
                        class="hs-tooltip-toggle flex justify-center items-center h-10 w-10 text-sm font-semibold rounded-lg border border-gray-200 bg-red-500 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          class="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                        <span
                          class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border text-sm text-gray-600 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400"
                          role="tooltip"
                        >
                          Bottom popover
                        </span>
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphPage;
