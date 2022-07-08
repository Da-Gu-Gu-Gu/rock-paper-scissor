import React from "react";
import logo from "../images/logo-bonus.svg";
const Header = () => {
  return (
    <div className="p-3 mt-10 w-[90%] rounded-md flex md:w-2/4 justify-between items-center mx-auto border ">
      <img src={logo} alt="logo" />
      <div className="bg-white px-8 h-full text-center tracking-wider p-3 rounded-md">
        <p className="text-stex ">SCORE</p>
        <h2 className="text-4xl text-dtex">12</h2>
      </div>
    </div>
  );
};

export default Header;
