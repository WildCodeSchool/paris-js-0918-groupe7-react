import React, { Component } from "react";

// IMPORT COMPONENTS
import Header from "./components/header/Header";
import FormPage from "./components/form/FormPage";
import Login from "./components/login/Login";
import { Switch, Route } from "react-router-dom";
import ForgotPassword from "./components/forgot/Forgot.js";
import ResetPassword from "./components/resetPassword/ResetPassword";

import AdminHomePage from "./components/admin/AdminHomePage";
import Download from "./components/admin/Download";
import UpdateCompanies from "./components/admin/UpdateCompanies";
import UpdateAgencies from "./components/admin/UpdateAgencies";
import UpdateUsersRole from "./components/admin/UpdateUsersRole";
import ActivationAccount from "./components/activationAccount/ActivationAccount";
import UserAlreadyExist from "./components/userAlreadyExist/UserAlreadyExist";

import "./App.css";
import HomeClient from "./components/homeClient/HomeClient";
import HomeAdmin from "./components/admin/HomeAdmin";

// IMPORT OTHER PAGES COMPONENTS
import Survey from "./components/survey/Survey";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          {/* Visitor routes */}
          <Route exact path="/" component={FormPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot_password" component={ForgotPassword} />
          <Route path="/reset_password/:reset_token" component={ResetPassword} />
          <Route path="/account_activation/:activation_token" component={ActivationAccount}/>
          <Route path="/error" component={UserAlreadyExist}/>

          {/* User routes */}
          <Route exact path="/user" component={HomeClient} />
          <Route exact path="/user/survey" component={Survey} />

          {/* Admin routes */}
          <Route exact path="/admin" component={HomeAdmin} />
          <Route exact path="/admin/Home" component={AdminHomePage} />
          <Route exact path="/admin/DownloadData" component={Download} />
          <Route exact path="/admin/UpdateCompanies" component={UpdateCompanies} />
          <Route exact path="/admin/UpdateAgencies" component={UpdateAgencies} />
          <Route exact path="/admin/UpdateUsersRole" component={UpdateUsersRole} />



          {/* <Route exact path="/client/thanks" component={ThanksPage} />
          <Route exact path="/client/survey_validation" component={ValidationPage} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
