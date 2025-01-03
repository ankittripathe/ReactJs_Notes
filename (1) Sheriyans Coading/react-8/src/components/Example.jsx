import React from "react";
import Example2 from "./Example2";

const Example = (props) => {
  return (
    <>
      <div>
        Mein hu Example {props.name}
        <Example2 user={props.name} />
      </div>
    </>
  );
};

export default Example;
