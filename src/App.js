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
import HomeClient from "./components/HomeClient";
import HomeAdmin from "./components/HomeAdmin";

// IMPORT OTHER PAGES COMPONENTS
// import IntroPage from './components/IntroPage';
import ValidationPage from "./components/ValidationPage";
import ThanksPage from "./components/ThanksPage";
import Survey from "./components/survey/Survey";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={FormPage} />
          <Route exact path="/user/survey" component={Survey} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/user" component={HomeClient} />
          <Route exact path="/admin" component={HomeAdmin} />
          <Route exact path="/forgot_password" component={ForgotPassword} />
          <Route path="/reset_password/:reset_token" component={ResetPassword}/>
          {/* <Route exact path="/client/thanks" component={ThanksPage} />
          <Route exact path="/client/survey_validation" component={ValidationPage} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
