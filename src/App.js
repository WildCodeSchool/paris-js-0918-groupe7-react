import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/form/Form';
import BarProgress from "./components/BarProgress";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <BarProgress />
        <Form /> */}
      </div>
    );
  }
}

export default App;
