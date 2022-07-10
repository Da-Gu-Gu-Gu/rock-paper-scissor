import React, { useEffect } from "react";
import gsap from "gsap";

const Result = ({ win, playingHandler, reverseAnime, me, computer }) => {
  useEffect(() => {
    gsap.fromTo(
      ".result",
      {
        y: -10,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: 4,
      }
    );
  }, []);

  return (
    <div className="absolute result top-[99%] md:top-[40%] left-1/2 text-center w-screen   -translate-x-1/2 p-4  rounded-md">
      <h2 className="text-white font-extrabold text-5xl tracking-wider">
        YOU {win ? "WIN" : "LOSE"}
      </h2>
      <div
        onClick={() => {
          reverseAnime();
          playingHandler(true);
        }}
        className="cursor-pointer w-max tracking-wider h-[40px] mx-auto px-20 text-dtex mt-4 bg-white rounded-md flex items-center justify-center"
      >
        PLAY AGAIN
      </div>
    </div>
  );
};

export default Result;
