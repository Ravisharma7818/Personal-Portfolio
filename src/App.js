import "./App.css";
import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
const App = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
