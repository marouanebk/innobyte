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
            <div className="flex justify-center items-center gap-40 mx-10">
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
              <div className="bg-[#ffffff] h-[calc(100vh-68px)] w-full "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphPage;
