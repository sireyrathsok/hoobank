import React from "react";

const Billing = () => {
  return (
    <div className="lg:flex justify-between  mt-32  ">
      <img
        className=" lg:w-1/2 lg:max-w-2xl"
        alt="bill"
        src={require("../../assets/bill.png")}
      />
      <BillingDesc />
    </div>
  );
};

const BillingDesc = () => {
  return (
    <div className=" lg:mr-28 self-center text-5xl  font-bold text-white  ">
      <p className="">Easily control your</p>
      <p className=" my-7">billing & invoicing.</p>
      <div></div>

      <p className="text-lg text-gray-400 my-12 max-w-lg ">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className=" flex">
        <img alt="img" src={require("../../assets/appStore.png")} />
        <img alt="img" src={require("../../assets/ggPlay.png")} />
      </div>
    </div>
  );
};
export default Billing;
