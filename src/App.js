import React, { Component } from 'react';
import Header from './components/Header';
//import IntroPage from './components/IntroPage';
import ThanksPage from './components/ThanksPage';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        
        <ThanksPage />
      </div>
    );
  }
}

export default App;