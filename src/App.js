import React from "react";
import Header from "./components/Header";
import Rule from "./components/Rule";
import Start from "./components/Start";

const App = () => {
  return (
    <div className="w-screen  relative">
      <Header />
      <Start />
      <Rule />
    </div>
  );
};

export default App;
