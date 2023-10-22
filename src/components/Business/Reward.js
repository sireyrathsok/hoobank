import React from "react";

const RewardCollector = [
  {
    icon: require("../../assets/Star.png"),
    title: "Rewards",
    desc: "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    icon: require("../../assets/Shield.png"),
    title: "100% Secured",
    desc: "We take proactive steps make sure your information and transactions are secure.",
  },

  {
    icon: require("../../assets/Send.png"),
    title: "Balance Transfer",
    desc: "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

const Reward = () => {
  const rewardItem = RewardCollector.map((obj, index) => {
    return (
      <div className=" flex items-center  self-center mb-12 text-white">
        <img
          className=" md:ml-5 mr-3 rounded-full bg-slate-900 px-3 py-3 items-center"
          alt="icon"
          src={obj.icon}
        />
        <div className=" max-w-lg sm:mr-20">
          <p className=" font-bold"> {obj.title}</p>
          <p className=" text-gray-400">{obj.desc}</p>
        </div>
      </div>
    );
  });
  return <div className=" text-lg flex-wrap">{rewardItem}</div>;
};

export default Reward;
