import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
