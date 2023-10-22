import React from "react";
import StartBtn from "../../StartBtn";

const CardDeal = () => {
  return (
    <div className="lg:flex justify-between  mt-32  ">
      <CardDealDesc />
      <img
        className=" lg:mr-20 lg:w-1/2 lg:max-w-2xl"
        alt="bill"
        src={require("../../assets/card.png")}
      />
    </div>
  );
};

const CardDealDesc = () => {
  return (
    <div className=" self-center  text-5xl  font-bold text-white   ">
      <p className="">Find a better card deal</p>
      <p className=" my-7"> in few easy steps.</p>
      <div></div>

      <p className="text-lg text-gray-400 my-12 max-w-md ">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <StartBtn />
    </div>
  );
};
export default CardDeal;
