import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import PageBody from "./components/common/PageBody/PageBody";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";
import Footer from "./components/common/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <PageBody />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
