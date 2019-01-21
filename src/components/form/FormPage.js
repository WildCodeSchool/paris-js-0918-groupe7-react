import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

// CSS
import IntroImage from "../../images/intro_image.png";

// Material UI dependencies
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

// React components
import SimpleForm from "./SimpleForm";

class FormPage extends Component {
  state = {
    redirect: false,
    status: 0
  };

  handleSubmit = values => {
    const url = "http://localhost:3002/users/register";
    const config = {
      email: values.email,
      password: values.password,
      gender: values.gender,
      age_range: values.age_range,
      seniority: values.seniority,
      is_active: true,
      business_focus: values.business_focus,
      agencyId: values.agency,
      companyId: values.company,
      poleId: values.department
    };

    // console.log(config);
    axios
      .post(url, config)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          alert(
            `An email has been send to ${
              values.email
            } ! Check the link within it to activate your account.`
          );
          this.setState({ redirect: true });
        } else {
          this.setState({ status: res.status });
        }
      })
      .catch(err => {
        console.log(err.response);
        this.setState({ status: err.response.status });
      });
  };

  render() {
    console.log("status", this.state.status);
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }

    if (this.state.status === 409) {
      return <Redirect to="/error" />;
    }

    return (
        <div>
          <Grid
            container
            className="formaccount"
            style={{
              backgroundColor: "rgb(125, 146, 177)",
              position: "absolute",
              minHeight: "100%"
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography
                className="titleform"
                style={{
                  textAlign: "center",
                  color: "white",
                  margin: "5%",
                  fontFamily: "Raleway",
                  fontSize: "2em",

                }}
                gutterBottom
              >
                {" "}
                Welcome to survey AAA
              </Typography>
              {/*
            <Form /> */}
              <SimpleForm
                onSubmit={this.handleSubmit}
                changeState={this.changeState}
              />
            </Grid>

          <Grid
            className="grid2"
            id="postit"
            style={{
              backgroundImage: `url(${IntroImage})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat"
            }}
            item
            xs={12}
            sm={6}
          />
        </Grid>
      </div>
    );
  }
}

export default FormPage;
