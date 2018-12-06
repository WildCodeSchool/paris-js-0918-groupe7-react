import React, { Component } from 'react';
import Header from './components/Header';
import IntroPage from './components/IntroPage';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <IntroPage />
      </div>
    );
  }
}

export default App;
