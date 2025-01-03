import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted By:-", username);
    setUsername("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="px-4 py-3 rounded text-xl m-5 text-black"
          type="text"
          placeholder="Enter Your Name"
        />
        <button className="px-5 py-3 text-xl bg-green-600 text-white m-5 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
