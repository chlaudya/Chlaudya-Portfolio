import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Sayembara from "./components/PorfolioOne";
import "animate.css/animate.min.css";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar />
        <Home id="home" />
        <Sayembara id="sayembara" />
      </React.Fragment>
    </div>
  );
}

export default App;
