import React from "react";
import { PiShootingStarThin } from "react-icons/pi";
import "../../../color.css";
const StartBtn = () => {
  return (
    <div className="BoderColor   text-2xl w-fit rounded-full mb-12  px-4 py-6 ml-8 ">
      <div className=" flex justify-between  ">
        Get
        <PiShootingStarThin className=" bor  " />
      </div>
      <p>Started</p>
    </div>
  );
};

export default StartBtn;
