// props:- props property ki tarah hai props ke jagah kuch vi likh sket hai, like property, xyz etc
import React from "react";

const Card = (props) => {
  // console.log(props.city);

  return (
    <div className="mr-8 bg-white text-black inline-block text-center rounded p-6">
      <img
        className="bg-red-400 h-40 w-40 rounded-full mb-4 m-auto"
        src={props.photo}
        alt="Profile_Picture"
      />
      <h1 className="text-2xl font-semibold mb-2">{props.user}</h1>
      <h2 className="font-medium">
        {props.city}, {props.age}
      </h2>
      <h2 className="font-medium">{props.prof}</h2>
      <button className="bg-emerald-700 text-white px-4 py-2 rounded font-medium mt-3">
        Add Friend
      </button>
    </div>
  );
};
export default Card;
