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
          <Switch>
              <Route path="/" exact component={Header} />
              <Route path="/about" component={AboutMe} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
