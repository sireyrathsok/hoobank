import React from "react";
import "../../color.css";

const IntroImage = () => {
  return (
    <div className=" w-1/2 mt-5">
      <img
        alt="robot"
        src={require("../Introduction/TectCollection/images/robot.png")}
      />
    </div>
  );
};

export default IntroImage;
