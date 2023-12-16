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
            // onClick={() => setShowModal(true)}
            className="h-10 px-5 py-2 text-white text-sm bg-[#0F766E] rounded-md shadow-sm"
          >
            <Link to="/experience1/experience22/progres/depand">
              View progress
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
