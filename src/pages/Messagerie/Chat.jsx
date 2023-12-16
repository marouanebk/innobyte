import React from "react";

function Chat(props) {
  return (
    <div
      className={`${
        props.clicked
          ? " flex bg-[#F8FAFC]  px-10 py-5 border-[1px] justify-center items-center gap-10"
          : " flex `${``}` px-10 py-5 border-[1px] justify-center items-center gap-10"
      } `}
    >
      <img
        className="h-20 "
        alt="imagelogo"
        src={require("../../img/Mask group (2).png")}
      />
      <div className="flex flex-col justify-start items-start gap-5">
        {props.clicked && (
          <span className="text-start text-[#0D9488] text-xl font-bold">
            {props.name}
            <br />
            <span className="text-start text-[#6C757D] text-sm">
              Salam khoya 3andi Questions Concernant cour
              <br /> hadek ila ta9dr t3awenni
            </span>
          </span>
        )}
        {!props.clicked && (
          <span className="text-start text-[#475569] text-xl font-bold">
            {props.name}
            <br />
            <span className="text-start text-[#6C757D] text-sm">
              Salam khoya 3andi Questions Concernant cour
              <br /> hadek ila ta9dr t3awenni
            </span>
          </span>
        )}
      </div>
      <div className="flex-1"></div>
      <img
        className="h-2 "
        alt="imagelogo"
        src={require("../../img/three points.png")}
      />
    </div>
  );
}

export default Chat;
