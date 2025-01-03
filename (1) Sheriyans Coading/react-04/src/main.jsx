import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import App from "./App.jsx";



// ReactDOM.AppcreateRoot(document.getElementById("root")).render(<App />);
const conatiner = document.getElementById('root')
const root = ReactDOM.createRoot(conatiner)
root.render(<App/>)

