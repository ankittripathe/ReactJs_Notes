import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './style.css'

// ReactDOM.AppcreateRoot(document.getElementById("root")).render(<App />);
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App/>)
