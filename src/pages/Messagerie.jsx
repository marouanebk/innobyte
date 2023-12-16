import React from "react";
import Sidebar from "../component/Sidebar";
import Chat from "./Messagerie/Chat";

function Messagerie() {
  return (
    <div className="flex flex-col gap-20 ">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pt-5 px-20  h-screen">
          <div className="flex flex-col gap-20">
            <div className="flex justify-end">
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
                  src={require("../img/Vector (6).png")}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="bg-[#ffffff] h-[calc(100vh-68px)] w-full ">
              <Chat name={"Haithem SAIDA"} clicked={true} />
              <Chat name={"Haithem SAIDA"} clicked={false} />
              <Chat name={"Haithem SAIDA"} clicked={false} />
            </div>
            <div className="bg-[#ffffff] h-[calc(100vh-68px)] w-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messagerie;
