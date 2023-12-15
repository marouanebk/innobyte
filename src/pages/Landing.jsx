import React from "react";
import { Navbar } from "../component/Navbar";
import Sidebar from "../component/Sidebar";

function Landing() {
  return (
    <div className="flex flex-col gap-20 ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1"> ss</div>
      </div>
    </div>
  );
}

export default Landing;
