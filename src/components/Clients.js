import React from "react";

const clinetList = [
  {
    icons: require("../assets/quote.png.png"),
    comments:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    profile: require("../assets/people01.png"),
    name: "Herman Jensen",
    title: "Founder & Leader",
  },
  {
    icons: require("../assets/quote.png.png"),
    comments:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    profile: require("../assets/people02.png"),
    name: "Steve Mark",
    title: "Founder & Leader",
  },
  {
    icons: require("../assets/quote.png.png"),
    comments:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    profile: require("../assets/people03.png"),
    name: "Kenn Gallagher",
    title: "Founder & Leader",
  },
];

const Clients = () => {
  const clientItem = clinetList.map((item) => {
    return (
      <div>
        <img className=" my-8" alt="quote" src={item.icons} />
        <p className=" max-w-xs my-12 text-lg h-24 text-gray-400">
          {item.comments}
        </p>
        <div className=" flex mb-20  ">
          <img className=" w-12 h-12" alt="profile" src={item.profile} />
          <div className=" ml-4">
            <p className=" text-xl font-bold text-white ">{item.name}</p>
            <p>{item.title}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className=" flex justify-between flex-wrap mt-20 text-gray-400">
        {clientItem}
      </div>
      <Partner />
    </div>
  );
};

const PartnerList = [
  {
    name: "airbnb",
    src: require("../assets/airbnb.png"),
  },
  {
    name: "binance",
    src: require("../assets/binance.png"),
  },
  {
    name: "coinbase",
    src: require("../assets/coinbase.png"),
  },
  {
    name: "dropbox",
    src: require("../assets/dropbox.png"),
  },
];
const Partner = () => {
  const partnerItem = PartnerList.map((item) => {
    return <img className=" w-44 my-4" alt="brand" src={item.src} />;
  });
  return (
    <div className=" flex justify-between flex-wrap  mr-20 mt-20">
      {partnerItem}
    </div>
  );
};

export default Clients;
