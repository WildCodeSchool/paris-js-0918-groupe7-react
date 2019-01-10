import React, { Component } from "react";

// IMPORT COMPONENTS
import Header from "./components/Header";
// import BarProgress from "./components/BarProgress";
// import Form from "./components/form/Form";
import FormPage from "./components/FormPage";
import ValidationPage from "./components/ValidationPage";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import ForgotPassword from "./components/Forgot.js";
import ResetPassword from "./components/ResetPassword";
import AdminForm from "./components/admin/AdminForm";
import AdminHomePage from "./components/admin/AdminHomePage";
import Download from "./components/admin/Download";

import "./App.css";
import HomeClient from "./components/HomeClient";
import HomeAdmin from "./components/HomeAdmin";

// IMPORT OTHER PAGES COMPONENTS
// import IntroPage from './components/IntroPage';
// import ValidationPage from './components/ValidationPage';
import ThanksPage from './components/ThanksPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/*<IntroPage />
        <BarProgress />
        <Form />
        <ThanksPage />
        <ValidationPage />
        <Login /> */}

        <Switch>
          <Route exact path="/" component={FormPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/client" component={HomeClient} />
          <Route exact path="/admin" component={HomeAdmin} />
          <Route exact path="/admin/Forms" component={AdminForm} /> 
          <Route exact path="/admin/Home" component={AdminHomePage} /> 
          <Route exact path="/admin/DownloadData" component={Download} />          
          <Route exact path="/forgot_password" component={ForgotPassword} />
          <Route path="/reset_password/:reset_token" component={ResetPassword} />
          <Route exact path="/client/thanks" component={ThanksPage} />
          <Route path="/reset_password/:reset_token" component={ResetPassword}/>
          TO IMPLEMENT : survey routing( dynamic ? )
          <Route exact path="/client/survey_validation" component={ValidationPage} />
          <Route exact path="/admin" component={HomeAdmin} />
         
        </Switch>
      </div>
    );
  }
}

export default App;
