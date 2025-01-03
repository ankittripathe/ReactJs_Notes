import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/UserContext";

const Footer = () => {
  const naam = useContext(DataContext);
  return (
    <div>
      <h1>Footer {naam.age}</h1>
    </div>
  );
};

export default Footer;
