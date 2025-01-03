import React from "react";

const App = () => {
  let user = "Ankit";
  let age = 25;

  const changeKaro = () => {
    console.log(user);
    user = 'Aryan'
    console.log(user);      // Real DOM se intract ho rha hai na ki Virtual DOM. So change is not possible
  };

  return (
    <div>
      <h1>Hi, My name is {user}</h1>
      <h1>I am {age} year old</h1>
      <button onClick={changeKaro}>Change User</button>
    </div>
  );
};

export default App;
