import React from 'react';
import './App.scss';
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
