import React from "react";
import StartBtn from "./StartBtn";
import "../../../color.css";

const IntroText = () => {
  return (
    <div className=" text-white pt-20  ">
      <div className=" text-white-400 bg-gray-400   max-w-fit px-3 py-1  rounded-lg">
        <span className=" text-white">20%</span> DISCOUNT FOR 1 MONTH ACCOUNT
      </div>
      <div className="     mt-12 ">
        <div className=" flex w-fit items-center">
          <div className=" ">
            <p className=" text-5xl  sm:text-7xl "> THE NEXT</p>
            <p className=" TextColor  text-5xl  sm:text-7xl  my-10">
              GENERATION
            </p>
          </div>
          <StartBtn />
        </div>
        <p className=" text-5xl  sm:text-7xl">Payment Method.</p>
        <p className=" text-gray-400 text-md font-semibold    mt-12 max-w-sm">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
    </div>
  );
};

export default IntroText;
