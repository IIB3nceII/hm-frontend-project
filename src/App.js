import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import ViewAll from "./components/ViewAll/ViewAll";
import Footer from "./components/Footer";
import Favourites from "./Favourites/Favourites";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/favourites">
            <Header />
            <Favourites />
            <Footer />
          </Route>

          <Route path="/women/newarrivals/viewall">
            <Header />
            <ViewAll />
            <Footer />
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
