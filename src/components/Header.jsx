import React from "react";
import logo from "../images/logo-bonus.svg";
const Header = ({ score }) => {
  return (
    <div className="header p-3 mt-5 w-[90%] overflow-hidden h-[100px] rounded-md flex md:w-2/4 justify-between items-center mx-auto border ">
      <img src={logo} alt="logo" className=" h-full" />
      <div className="bg-white px-8 h-full text-center tracking-wider py-1 rounded-md">
        <p className="text-stex ">SCORE</p>
        <h2 className="text-4xl text-dtex score">{score}</h2>
      </div>
    </div>
  );
};

export default Header;
