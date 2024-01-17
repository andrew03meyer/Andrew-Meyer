import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import React from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation";

import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header />
        <Navigation />
        
      <Router>
          <switch>
              <Route path="/" exact component={Header} />
              <Route path="/about" component={AboutMe} />
          </switch>
      </Router>
    </div>
  );
}

export default App;
