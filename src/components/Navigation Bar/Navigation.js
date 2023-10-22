import React from "react";

const navList = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "About Us",
    name: "About Us",
  },
  {
    id: "Features",
    name: "Features",
  },
  {
    id: "Solution",
    name: "Solution",
  },
];

const Navigation = () => {
  const navItem = navList.map((item) => {
    return (
      <p className=" rounded-md hover:text-sm mx-1 md:mx-4 px-2 rounded- self-center py-2 hover:bg-gray-700">
        {item.name}
      </p>
    );
  });
  return (
    <nav className="  flex justify-between  text-white  pt-8 ">
      <div className=" flex self-center">
        <img
          className=" w-8 h-8 mr-2  "
          src={require("./logo.png")}
          alt="logo"
        />
        <p className=" mt-1">
          Hoo
          <span className=" ">Bank</span>
        </p>
      </div>

      <div className=" flex max-w-md justify-between"> {navItem}</div>
    </nav>
  );
};

export default Navigation;
