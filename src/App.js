import React, { Component } from 'react';
import Header from './components/Header';
import IntroPage from './components/IntroPage';
import ThanksPage from './components/ThanksPage';
import './App.css';
import Form from './components/form/Form';
import BarProgress from "./components/BarProgress";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        
        <ThanksPage />
        <IntroPage />
        <BarProgress />
        <Form />
      </div>
    );
  }
}

export default App;