import React from "react";
import "../../color.css";
import StartBtn from "../../StartBtn";

const Description = () => {
  return (
    <div className=" ">
      <div className=" text-5xl font-bold text-white">
        <p> You do the business,</p>
        <p className=" my-5"> we’ll handle the money.</p>
      </div>
      <p className=" my-12 text-lg text-gray-400  max-w-lg ">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <StartBtn />
    </div>
  );
};

export default Description;
