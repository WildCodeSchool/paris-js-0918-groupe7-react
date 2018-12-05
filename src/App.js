import React, { Component } from "react";
import Header from "./components/Header";
import BarProgress from "./components/BarProgress";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BarProgress />
      </div>
    );
  }
}

export default App;
