import React from "react";
import "../../color.css";

const stateList = [
  {
    id: 0,
    num: "3800+",
    text: "USER ACTIVE",
  },
  {
    id: 1,
    num: "230+",
    text: "TRUSTED BY COMPANY",
  },
  {
    id: 2,
    num: "$230M",
    text: "TRANSACTION",
  },
];

const State = () => {
  const stateItem = stateList.map((state) => {
    return (
      <div key={state.id} className=" flex items-center">
        <p className=" sm:text-4xl text-2xl font-bold text-white ">
          {state.num}
        </p>
        <p className="TextColor sm:text-xl text-lg ml-1  font-semibold ">
          {state.text}
        </p>
      </div>
    );
  });
  return (
    <div className=" flex justify-between flex-wrap  sm:mr-32 mr-4 mt-20">
      {stateItem}
    </div>
  );
};

export default State;
