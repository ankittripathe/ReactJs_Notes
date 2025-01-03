// hooks:- hooks are special type of function
// statemgmt :- useState
import React, { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);   // use State hooks

  const changeMe = () => {
    console.log('change ho gaya');   // output in console
    setA(20);
    // setA('Happy Diwali') // can assign string as well
  };

  return (
    <div>
      <h1>Value of Num is {a}</h1>
      <button onClick={changeMe}>Change A</button>
    </div>
  );
};

export default App;
