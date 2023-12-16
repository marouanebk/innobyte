import React from "react";
import image1 from "../../img/Mask group (2).png";
import image2 from "../../img/Vector (10).png";
import image3 from "../../img/Vector (11).png";
import image4 from "../../img/Vector (12).png";

const colors = ["#3B82F6", "#3B82F6", "#B91C1C", "#0F766E"];

const images = [
  "../../img/Mask group (2).png",
  "../../img/Vector (10).png",
  "../../img/Vector (11).png",
  "../../img/Vector (12).png",
];
function ActivTemp(props) {
  let color = "bg-[" + colors[props.color] + "]";
  console.log("props.color");
  console.log(props.color);
  return (
    <div className="flex px-5 py-5  border-[1px] justify-start items-start w-full gap-5">
      <div
        className={
          "bg-[#0F766E] rounded-[50%] text-white   flex justify-center items-center  h-20 w-20 font-bold text-3xl"
        }
      >
        {/* <div
      className={
        "bg-[" +
        `${colors[props.color]}` +
        "] rounded-[50%] text-white   flex justify-center items-center  h-20 w-20 font-bold text-3xl"
      }
    > */}
        <img
          className="h-10 "
          alt="imagelogo"
          src={require("../../img/icon-park-solid_ticket (1).png")}
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-5">
        {props.clicked && (
          <span className="text-start  text-xl   text-[#334155]  font-bold">
            {props.context}
            <br />
            <span className="text-start text-[#6C757D] text-sm">
              23/10/2023 18:49PM
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
    </div>
  );
}

export default ActivTemp;
