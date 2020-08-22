import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Porfolio";
import "animate.css/animate.min.css";
import useSticky from "./components/useSticky";
import About from "./components/About";

function App() {
  const { isSticky, element } = useSticky();
  return (
    <div className="App">
      <React.Fragment>
        <NavBar sticky={isSticky} />
        <Home id="home" element={element} />
        <About id="about" />
        <Portfolio id="portfolio" />
      </React.Fragment>
    </div>
  );
}

export default App;
