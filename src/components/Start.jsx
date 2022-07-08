import React from "react";
import lizard from "../images/icon-lizard.svg";
import scissor from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import spock from "../images/icon-spock.svg";

const Start = () => {
  return (
    <div className="mx-auto w-max my-5">
      <div className="relative  w-[350px] h-[350px] pentagon ">
        {/* liazard */}
        <div className="absolute bottom-0 left-[10%] rounded-full shadow-lg shadow-lglt flex items-center justify-center w-[100px]  h-[100px] lizard">
          <div className="rounded-full flex items-center justify-center bg-white w-[80%] h-[80%] p-5">
            <img src={lizard} alt="lizard" />
          </div>
        </div>

        {/*scissor  */}
        <div className="rounded-full absolute  shadow-lg top-0 left-[35%] shadow-sglt flex items-center justify-center w-[100px]  h-[100px]  scissor">
          <div className="rounded-full flex items-center justify-center bg-white w-[80%] h-[80%] p-5">
            <img src={scissor} alt="scissor" />
          </div>
        </div>

        {/*rock  */}
        <div className="rounded-full  shadow-lg absolute bottom-0 right-[10%] shadow-rglt flex items-center justify-center w-[100px]  h-[100px] rock">
          <div className="rounded-full flex items-center justify-center bg-white w-[80%] h-[80%] p-5">
            <img src={rock} alt="rock" />
          </div>
        </div>

        {/*paper  */}
        <div className="rounded-full  shadow-lg absolute top-[25%] -right-[3%] shadow-pglt flex items-center justify-center w-[100px]  h-[100px] paper">
          <div className="rounded-full flex items-center justify-center bg-white w-[80%] h-[80%] p-5">
            <img src={paper} alt="paper" />
          </div>
        </div>

        {/*spock  */}
        <div className="rounded-full  shadow-lg absolute top-[25%] -left-[3%] shadow-spglt flex items-center justify-center w-[100px]  h-[100px] spock">
          <div className="rounded-full flex items-center justify-center bg-white w-[80%] h-[80%] p-5">
            <img src={spock} alt="spock" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
