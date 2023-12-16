import React from "react";
import { Navbar } from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Card from "./Landing/Card";

function Landing() {
  return (
    <div className="flex flex-col gap-20 ">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 pt-20 pl-20">
          <div className="flex xs:flex-col xl:flex-row justify-start gap-10">
            <Card number={1} name={"Todo"} />
            <Card number={3} name={"In progress"} />
            <Card number={2} name={"Waiting for review"} />
            <Card number={1} name={"Todo"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
