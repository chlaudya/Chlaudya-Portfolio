import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Router from "./router/router";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Sayembara from "./components/PorfolioOne";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Home id="home" />
          <Sayembara id="sayembara" />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
