import React from "react";
import StartBtn from "../../StartBtn";
const CTA = () => {
  return (
    <div className=" bg-gradient-to-t from-gray-900 to-gray-800 flex flex-wrap  justify-between items-center pt-12 px-10 mr-20 border-solid shadow-md rounded-3xl font-bold  mt-32 text-white   ">
      <div>
        <p className="  text-5xl">Let’s try our service now!</p>
        <p className="text-lg text-gray-400 my-12 max-w-md ">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <StartBtn />
    </div>
  );
};

export default CTA;
