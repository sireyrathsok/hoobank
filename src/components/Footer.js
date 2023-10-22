import React from "react";
import "../color.css";

const Footer = () => {
  return (
    <div>
      <div className=" text-gray-400 mt-32 mr-20 flex flex-wrap justify-between">
        <div>
          <div className=" flex  items-center">
            <img alt="logo" src={require("../assets/hoobank.png")} />
            <p className="  text-white ml-3 text-5xl">
              Hoo<span className=" TextColor">Bank</span>
            </p>
          </div>
          <p className=" max-w-xs mt-5 mb-16">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className=" fle">
          <p className=" text-white font-bold">Useful Links </p>

          <p className=" mt-4">How it Works</p>
          <p>Create</p>
          <p>Explore</p>
          <p>Terms & Services </p>
        </div>
        <div>
          <p className=" text-white font-bold ">Community</p>
          <p className=" mt-4">Help Center</p>
          <p>Partners</p>
          <p>Suggestions</p>
          <p>Blog</p>
          <p>Newsletters</p>
        </div>
        <div>
          <p className=" text-white font-bold">Partner</p>
          <p className=" mt-4">Our Partner</p>
          <p>Become a Partner</p>
        </div>
      </div>
      <div class="flex-grow h-px bg-gray-400 mt-14 "></div>
    </div>
  );
};

// const SociaMedia = () => {
//   return (
//     <div className=" text-white mt-4  text-lg flex  justify-between mr-20">
//       <p className="  font-semibold">
//         Copyright Ⓒ 2022 HooBank. All Rights Reserved.
//       </p>
//       <div className=" bg-white flex">
//         <img
//           className=" w-7 mx-2"
//           alt="image4"
//           src={require("../assets/instagram.png")}
//         />
//         <img
//           className=" w-7 mx-2 "
//           alt="image1"
//           src={require("../assets/facebook.png")}
//         />
//         <img
//           className=" w-7 mx-2 "
//           alt="image2"
//           src={require("../assets/twitter.png")}
//         />
//         <img
//           className=" w-7 mx-2"
//           alt="image3"
//           src={require("../assets/linkedin.png")}
//         />
//       </div>
//     </div>
//   );
// };

export default Footer;
