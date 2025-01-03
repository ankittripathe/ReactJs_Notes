// props:- props property ki tarah hai props ke jagah kuch vi likh sket hai, like property, xyz etc

import React from "react";

const Card = (props) => {
//   console.log(props.user);

  return (
    <div className="bg-white text-black text-center inline-block text-2xl rounded p-6">
      <h1>
        UserName:- {props.user} {props.surname}
      </h1>
      <h2>
        City:- {props.address}, Age:- {props.age}
      </h2>
      <button>Add Friend</button>
    </div>
  );
};
export default Card;
