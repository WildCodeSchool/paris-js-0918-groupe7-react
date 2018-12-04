import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/form/Form';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
