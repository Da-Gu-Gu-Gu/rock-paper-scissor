import React, { useRef } from "react";
import lizard from "../images/icon-lizard.svg";
import scissor from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import spock from "../images/icon-spock.svg";
import gsap from "gsap";

const tl = gsap.timeline();

const Start = ({ checkHandler, playing, playingHandler }) => {
  const names = [".scissor", ".paper", ".rock", ".lizard", ".spock"];

  const botLeft = window.innerWidth > 765 ? "80%" : "67%";
  const changeAnime = (name, top, left, my) => {
    const animate = (com) => {
      tl.fromTo(
        names.filter((x) => x !== name),
        {
          display: "flex",
          rotate: 0,
          scale: 1,
        },
        {
          rotate: -360,
          scale: 0,
          display: "none",
          stagger: 0.2,
          duration: 0.4,
        }
      )
        .fromTo(
          ".pentagon",
          {
            width: "350px",
            backgroundSize: "100% 100%",
          },
          {
            width: "100%",
            backgroundSize: "0% 0%",
            duration: 0.4,
          }
        )
        .fromTo(
          name,
          {
            top: top,
            left: left,
            scale: 1,
            rotate: 0,
          },
          {
            top: "40%",
            left: "5%",
            scale: 1.5,
            rotate: 360,

            duration: 0.8,
          }
        )
        .fromTo(
          ".you",
          {
            y: -10,
            display: "none",
          },
          {
            display: "block",
            y: 0,
            duration: 0.3,
          }
        )
        .fromTo(
          names[com],
          {
            rotate: -360,
            scale: 0,
            display: "none",
          },
          {
            display: "flex",
            scale: 1.5,
            rotate: 360,
            top: "40%",
            left: botLeft,
            duration: 0.5,
          }
        )
        .fromTo(
          ".com",
          {
            y: -10,
            display: "none",
          },
          {
            display: "block",
            y: 0,
            duration: 0.3,
          }
        );
    };

    const chooseHandler = (x) => {
      let com = Math.floor(Math.random() * 5);
      com === x && chooseHandler(x);
      if (com !== x) {
        animate(com);
        checkHandler(x, com);
      }
    };

    chooseHandler(my);
  };

  return (
    <div className="mx-auto  justify-self-center  md:w-2/4 w-[350px] my-5 start">
      <div className="relative mx-auto   w-[350px] h-[350px] pentagon ">
        <p className="text-white hidden you md:text-2xl tracking-wider absolute left-[5%]  md:top-[10%] top-[90%]">
          YOU PICKED
        </p>
        <p className="text-white hidden com md:text-2xl tracking-wider absolute right-[0%]  md:top-[10%] top-[90%]">
          THE HOUSE PICKED
        </p>
        {/* liazard */}
        <div
          onClick={async () => {
            if (playing) {
              changeAnime(".lizard", "70%", "10%", 3);
            }
          }}
          className="absolute top-[70%] left-[10%]  cursor-pointer rounded-full shadow-lg shadow-lglt flex items-center justify-center w-[100px]  h-[100px] lizard"
        >
          <div className="rounded-full flex items-center   justify-center bg-white w-[80%] h-[80%] p-5">
            <img src={lizard} alt="lizard" />
          </div>
        </div>

        {/*scissor  */}
        <div
          onClick={() => {
            if (playing) {
              changeAnime(".scissor", "0%", "35%", 0);
            }
          }}
          className="rounded-full absolute  cursor-pointer shadow-lg top-0 left-[35%] shadow-sglt flex items-center justify-center w-[100px]  h-[100px]  scissor"
        >
          <div className="rounded-full flex items-center justify-center bg-white w-[80%] h-[80%] p-5">
            <img src={scissor} alt="scissor" />
          </div>
        </div>

        {/*rock  */}
        <div
          onClick={() => {
            if (playing) {
              changeAnime(".rock", "70%", "65%", 2);
            }
          }}
          className="rounded-full  shadow-lg absolute cursor-pointer top-[70%] left-[65%] shadow-rglt flex items-center justify-center w-[100px]  h-[100px] rock"
        >
          <div className="rounded-full flex items-center justify-center bg-white w-[80%] h-[80%] p-5">
            <img src={rock} alt="rock" />
          </div>
        </div>

        {/*paper  */}
        <div
          onClick={() => {
            if (playing) {
              changeAnime(".paper", "25%", "75%", 1);
            }
          }}
          className="rounded-full  shadow-lg cursor-pointer absolute top-[25%] left-[75%] shadow-pglt flex items-center justify-center w-[100px]  h-[100px] paper"
        >
          <div className="rounded-full flex items-center justify-center bg-white w-[80%] h-[80%] p-5">
            <img src={paper} alt="paper" />
          </div>
        </div>

        {/*spock  */}
        <div
          onClick={() => {
            if (playing) {
              changeAnime(".spock", "25%", "-3%", 4);
            }
          }}
          className="rounded-full  shadow-lg cursor-pointer absolute top-[25%] -left-[3%] shadow-spglt flex items-center justify-center w-[100px]  h-[100px] spock"
        >
          <div className="rounded-full flex items-center justify-center bg-white w-[80%] h-[80%] p-5">
            <img src={spock} alt="spock" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
