import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./components/Homepage/Homepage";
import Ringing from "./components/Ringing/Ringing";

import "./index.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Test from "./components/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ringing" element={<Ringing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/background" element={<Test />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
