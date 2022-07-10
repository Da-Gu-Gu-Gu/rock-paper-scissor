import React, { useState, useEffect } from "react";
import gsap from "gsap";
import Header from "./components/Header";
import Rule from "./components/Rule";
import Start from "./components/Start";

const introAnime = () => {
  gsap.fromTo(
    ".header",
    {
      height: 0,
    },
    {
      height: "100px",
      duration: 0.5,
    }
  );
  gsap.fromTo(
    ".start",
    {
      rotate: "-360deg",
      display: "none",
    },
    {
      display: "block",
      rotate: 0,
      delay: 0.3,
      duration: 0.8,
    }
  );
  gsap.fromTo(
    ".rules-btn",
    {
      display: "none",
      x: 100,
    },
    {
      display: "block",
      x: 0,

      delay: 0.8,
      duration: 0.5,
    }
  );
};

const App = () => {
  const [score, setScore] = useState(0);
  const [win, setWin] = useState();
  const [playing, setPlaying] = useState(true);

  const checkHandler = (my, computer) => {
    //check greater 4 or not
    let checkmyplusone = my + 1 > 4 ? my + 1 - 5 : my + 1;
    let checkmyplusthree = my + 3 > 4 ? my + 3 - 5 : my + 3;

    if (checkmyplusone === computer || checkmyplusthree === computer) {
      setWin(true);
      setPlaying(false);
      setScore(score + 1);
    } else {
      setWin(false);
      setPlaying(false);
      score > 0 && setScore(score - 1);
    }
  };

  useEffect(() => {
    introAnime();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".score",
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.3,
        delay: 2,
      }
    );
  }, [score]);

  return (
    <div className="w-screen relative ">
      <Header score={score} />
      <Start
        checkHandler={checkHandler}
        playing={playing}
        win={win}
        playingHandler={setPlaying}
      />
      <Rule />
    </div>
  );
};

export default App;
