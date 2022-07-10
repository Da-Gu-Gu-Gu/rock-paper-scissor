import React from "react";
import close from "../images/icon-close.svg";
import rule from "../images/image-rules-bonus.svg";

const Modal = ({ open, modalClose }) => {
  return (
    <div
      className={`fixed flex flex-col justify-around md:w-[400px] w-screen overflow-hidden transition-all ease-in duration-200
        ${
          open ? "md:h-max  h-screen p-5" : "h-0"
        }  z-10 top-0 left-0 md:top-1/2 md:left-1/2  md:-translate-x-1/2 md:-translate-y-1/2 bg-white rounded-md`}
    >
      <div className="flex md:justify-between items-center justify-center">
        <p className="text-3xl font-extrabold text-dtex">RULES</p>
        <img
          src={close}
          alt="close"
          onClick={() => modalClose(false)}
          className="md:block hidden cursor-pointer w-[20px] h-[20px]"
        />
      </div>
      <img src={rule} alt="rule" className="md:my-3 mx-auto" />
      <img
        src={close}
        alt="close"
        onClick={() => modalClose(false)}
        className="md:hidden block mx-auto cursor-pointer"
      />
    </div>
  );
};

export default Modal;
