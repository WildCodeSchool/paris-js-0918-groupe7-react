import React, { Component } from 'react';

// IMPORT COMPONENTS
import Header from './components/Header';
import BarProgress from "./components/BarProgress";
import Form from './components/form/Form';

import './App.css';

// IMPORT OTHER PAGES COMPONENTS
// import IntroPage from './components/IntroPage';
// import ValidationPage from './components/ValidationPage';
// import ThanksPage from './components/ThanksPage';




class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <BarProgress />
        <Form />
        {/* <IntroPage />
        <ThanksPage />
        <ValidationPage /> */}
      </div>
    );
  }
}

export default App;