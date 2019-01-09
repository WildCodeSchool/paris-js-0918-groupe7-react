import React, { Component } from "react";

// IMPORT COMPONENTS
import Header from "./components/Header";
// import BarProgress from "./components/BarProgress";
// import Form from "./components/form/Form";
import FormPage from "./components/FormPage";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import ForgotPassword from "./components/Forgot.js";
import ResetPassword from "./components/ResetPassword";
import "./App.css";

// IMPORT OTHER PAGES COMPONENTS
// import IntroPage from './components/IntroPage';
// import ValidationPage from './components/ValidationPage';
import ThanksPage from './components/ThanksPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={FormPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/client/thanks" component={ThanksPage} />
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/reset_password/:reset_token" component={ResetPassword}/>
          {/* <Route exact path="/client" component={HomeClient} />
          TO IMPLEMENT : survey routing( dynamic ? )
          <Route exact path="/client/survey_validation" component={ValidationPage} />
          <Route exact path="/admin" component={HomeAdmin} />
          */}
        </Switch>
      </div>
    );
  }
}

export default App;
