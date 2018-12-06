import React, { Component } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import ValidationPage from './components/ValidationPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProgressBar />
        <ValidationPage />
      </div>
    );
  }
}

export default App;
