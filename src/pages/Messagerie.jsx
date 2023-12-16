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
                  src={require("../img/Vector (6).png")}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="bg-[#ffffff] h-[calc(100vh-68px)] w-full ">
              <Chat context={"code1"} name={"Haithem SAIDA"} clicked={true} />
              <Chat context={"code2"} name={"Haithem SAIDA"} clicked={false} />
              <Chat context={"code3"} name={"Haithem SAIDA"} clicked={false} />
            </div>
            <div className="bg-[#ffffff] h-[calc(100vh-68px)] w-full ">
              <Chat name={"Haithem SAIDA"} clicked={false} />
              <div className="flex flex-col justify-center items-center py-20 gap-10">
                <span className="text-sm text-[#6C757D]]">FRI AT 11:03 AM</span>
                <div className="flex justify-center items-center gap-10 bg-[#ffffff] px-5">
                  <img
                    className="h-20 "
                    alt="imagelogo"
                    src={require("../img/Mask group (2).png")}
                  />
                  <div className=" bg-[#fffffff] rounded-md shadow-sm border-[0.2px] p-5">
                    <span>
                      Salam Khoya Ma3lish T3awenni ?<br />
                      Juste 3la el course hadek li rak hato fel profil ta3k win
                      interassaaani habit n3rf win ra7 yes ra et merci w bon
                      courage.
                    </span>
                  </div>
                  <div className="flex-1"></div>
                </div>
                <span className="text-sm text-[#6C757D]]">FRI AT 11:03 AM</span>
                <div className="flex justify-center items-center gap-10 bg-[#ffffff] px-5">
                  <div className="flex-1"></div>
                  <div className="w-20"></div>
                  <div className=" bg-[#CBD5E1] border-[0.2px] p-5">
                    <span>
                      Salam Khoya Ma3lish T3awenni ?<br />
                      Juste 3la el course hadek li rak hato fel profil ta3k win
                      interassaaani habit n3rf win ra7 yes ra et merci w bon
                      courage.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1"></div>
              <div className="flex justify-center items-center gap-5 mx-2">
                <div className="h-20 rounded-sm shadow-sm w-full border-[1px] flex justify-center">
                  <input
                    className="outline-none px-10 text-center"
                    type="text"
                    placeholder="Enter your text"
                  />
                </div>
                <div className="h-20 w-20 rounded-md shadow-sm bg-[#14B8A6] flex justify-center items-center">
                  <img
                    className="p-5 "
                    alt="imagelogo"
                    src={require("../img/Vector (7).png")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messagerie;
