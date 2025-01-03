// hooks:- hooks are special type of function
// statemgmt :- useState
import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0); // use State hooks

  return (
    <div>
      <h1>The value of Num is {num} </h1>
      <button
        onClick={() => {
          setNum(num + 10);
        }}
      >
        Increment
      </button>
      <button onClick={() => setNum(num - 10)}>Decrement</button>
    </div>
  );
};

export default App;
