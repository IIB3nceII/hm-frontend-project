import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/women/newarrivals/viewall">
            <Header />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
