import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Mainpage from "./components/Mainpage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mainpage />
      </div>
    );
  }
}

export default App;
