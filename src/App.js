import logo from "./assets/images/logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
